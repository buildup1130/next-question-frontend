import { Attendance__Component, Attendance__Container, Attendance__Title } from "./AttendanceCheck.Styles";

export default function AttendanceCheckUI({
    onClickAttend,
    weekDates,
    checkArr,
    isAttended
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

                return(
                    <Attendance__Component
                        key={index}
                        $attended = {attended}
                    >{dayName}</Attendance__Component>
                )
            })}
        </Attendance__Container>
    )
}