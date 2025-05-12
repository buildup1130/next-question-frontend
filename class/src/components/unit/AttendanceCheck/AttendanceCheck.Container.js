import { useAuth } from "@/utils/AuthContext";
import AttendanceCheckUI from "./AttendanceCheck.Presenter";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { searchAllWorkBooks } from "@/utils/WorkbookManager";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AttendanceCheckLogic(
    {
        checkArr
    }
){
    const {token} = useAuth();
    
    const router = useRouter();
    const [isAccessible, setIsAccessible] = useState(false);

    useEffect(() => {
        if(token){
        try{
            const data = searchAllWorkBooks(token).then((res) =>{
                if(res.length!==0){
                    let total = 0;
                    res.map((data,index)=>{
                        total = total+data.totalQuestion;
                    })
                    if(total !== 0){
                        setIsAccessible(true);
                    }
                }
            })      
        }catch(error){

        }

        }
    },[token]);

    const onClickAttend = () => {
        if(isAccessible){
        router.push({
            pathname:"/Question",
            query:{
                type:2
            }
        })
        }else{
            toast.error("문제집이 없거나, 문제 수가 적습니다.",{position:"top-center"})
        }
    }
    
    // 오늘 날짜 기준으로 이번 주의 날짜 배열 생성
    const weekDates = useMemo(() => {
        const today = new Date();
        const day = today.getDay(); // 0(일)~6(토)
        const diff = day === 0 ? 6 : day - 1; // 월요일 기준으로 조정 (월요일이 0이 되도록)
        
        const monday = new Date(today);
        monday.setDate(today.getDate() - diff);
        
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            dates.push(date.toISOString().split('T')[0]); // YYYY-MM-DD 형식
        }
        return dates;
    }, []);

    const todayObj = new Date();
    const today = todayObj.toISOString().split('T')[0];
    

    // 요일이 출석체크된 날짜인지 확인하는 함수
    const isAttended = (date) => {
        // console.log(checkArr);
        return checkArr?.includes(date);
    };

    return <AttendanceCheckUI
        onClickAttend = {onClickAttend}
        checkArr = {checkArr}
        weekDates = {weekDates}
        isAttended = {isAttended}
        today = {today}
    ></AttendanceCheckUI>
}