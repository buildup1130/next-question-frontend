import styled from "@emotion/styled"

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  padding: 20px;

  border: 1px solid #d9d9d9;
  border-radius: 16px;

  background: white;

  box-shadow: 0 16px 24px rgba(0,0,0,0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const MonthTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }
`;

export const DayLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 10px;
`;

export const DayLabel = styled.div`
  font-size: 14px;
  color: #767676;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const Day = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  
  ${props => props.isToday && `
    font-weight: bold;
    color: #007AFF;
  `}
  
  ${props => props.hasStudied && `
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 4px;
      height: 4px;
      background: #007AFF;
      border-radius: 50%;
    }
  `}
  
  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }
`;