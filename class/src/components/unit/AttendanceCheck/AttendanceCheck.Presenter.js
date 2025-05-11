import { CheckedIcon } from "@/utils/SvgProvider";
import { Attendance__Component, Attendance__Container, Attendance__Title,Attendance__Component__UnChecked } from "./AttendanceCheck.Styles";
import { useEffect, useState } from "react";

export default function AttendanceCheckUI({
    onClickAttend,
    weekDates,
    isAttended,
    today
}){
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
    setIsAnimating(true);
    
    // 애니메이션을 주기적으로 반복
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000); // 2초마다 애니메이션 상태 토글
    
    return () => clearInterval(interval);
  }, [])

    return(
        <Attendance__Container>
            {/* <button
                onClick={() => {
                    onClickAttend();
                }}
            >출석하러 가기</button> */}
            <Attendance__Title>출석</Attendance__Title>
            {["월","화","수","목","금","토","일"].map((dayName,index) =>{
                const date = weekDates[index];
                const attended = isAttended(date);
                //오늘 날짜
                if(date === today){
                    //출석 완료
                    if(attended){
                    return(
                        <Attendance__Component
                            style={{width:"12%"}}
                            $attended = {attended}
                            key = {index}
                        >
                            <CheckedIcon></CheckedIcon>
                        </Attendance__Component>
                    )}
                    //출석 이전
                    else{
                        return(
                        <Attendance__Component__UnChecked
                            $attended = {attended}
                            onClick={onClickAttend}
                            key = {index}
                            isAnimating = {isAnimating}
                        >
                            출석
                        </Attendance__Component__UnChecked>
                        )
                    }
                }
                //다른 날짜
                else{
                    return(
                    <Attendance__Component
                        key={index}
                        $attended = {attended}
                    >{attended?<CheckedIcon></CheckedIcon>:dayName}</Attendance__Component>
                )}
                
            })}
        </Attendance__Container>
    )
}