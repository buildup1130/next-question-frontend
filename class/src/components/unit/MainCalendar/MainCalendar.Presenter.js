import {CalendarContainer, Header, Button, MonthTitle, DayLabels, DayLabel, DaysGrid, Day} from "./MainCalendar.Styles"

export default function MainCalendarUI(props){

    //HTML Part
    return(
        <CalendarContainer>
            <Header>
                <Button onClick={props.prevMonth}>{'<'}</Button>
                <MonthTitle>
                {props.currentDate.getFullYear()}년 {props.currentDate.getMonth() + 1}월
                </MonthTitle>
                <Button onClick={props.nextMonth}>{'>'}</Button>
            </Header>
      
            <DayLabels>
                {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <DayLabel key={day}>{day}</DayLabel>
                ))}
            </DayLabels>
      
            <DaysGrid>
                {props.getDaysInMonth().map((day, index) => (
                <Day 
                    key={index}
                    isToday={props.isToday(day)}
                    hasStudied={day && props.hasStudied(day)}
                >
                    {day}
                </Day>
                ))}
            </DaysGrid>
        </CalendarContainer>
    );
}