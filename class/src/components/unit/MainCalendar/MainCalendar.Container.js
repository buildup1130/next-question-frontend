import MainCalendarUI from "./MainCalendar.Presenter";
import { useState } from "react";

export default function MainCalendarLogic({ studiedDays = [] }){
    const [currentDate, setCurrentDate] = useState(new Date());
  
    // 이전 달로 이동
    const prevMonth = () => {
        setCurrentDate(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() - 1);
        return newDate;
        });
    };
  
    // 다음 달로 이동
    const nextMonth = () => {
        setCurrentDate(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + 1);
        return newDate;
        });
    };
  
    // 해당 월의 날짜 배열 생성
    const getDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
    
        const days = [];
        const firstDayOfWeek = firstDay.getDay();
    
        // 이전 달의 날짜들을 채움
        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(null);
        }
    
        // 현재 달의 날짜들을 채움
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(i);
        }
    
        return days;
    };
  
    const isToday = (day) => {
        const today = new Date();
        return day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();
    };
  
    const hasStudied = (day) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return studiedDays.includes(dateStr);
    };



    return(
        <MainCalendarUI
            currentDate = {currentDate}
            prevMonth = {prevMonth}
            nextMonth = {nextMonth}
            getDaysInMonth = {getDaysInMonth}
            isToday = {isToday}
            hasStudied = {hasStudied}
        ></MainCalendarUI>
    )
}