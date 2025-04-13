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
                            style={{width:"12%", backgroundColor:"#21C12C", cursor:"pointer"}}
                            $attended = {attended}
                            onClick={onClickAttend}
                            key = {index}
                        >
                            출석<br></br>하기
                        </Attendance__Component>
                        )
                    }
                }
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