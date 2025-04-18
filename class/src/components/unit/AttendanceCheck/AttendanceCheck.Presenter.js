import { CheckedIcon } from "@/utils/SvgProvider";
import { Attendance__Component, Attendance__Container, Attendance__Title } from "./AttendanceCheck.Styles";

export default function AttendanceCheckUI({
    onClickAttend,
    weekDates,
    isAttended,
    today
}){

    return(
        <Attendance__Container>
            {/* <button
                onClick={() => {
                    onClickAttend();
                }}
            >출석하러 가기</button> */}
            <Attendance__Title>출석 체크</Attendance__Title>
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
                        <Attendance__Component
                            style={{width:"12%", backgroundColor:"#00B2FF", cursor:"pointer", color:"white"}}
                            $attended = {attended}
                            onClick={onClickAttend}
                            key = {index}
                        >
                            오늘<br></br>출석
                        </Attendance__Component>
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