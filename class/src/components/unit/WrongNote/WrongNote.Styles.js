import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 0 16px 100px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 8px;
`;

export const PageTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  color: #000;
`;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  margin: 6px 0 18px;
  gap: 6px;
  flex-wrap: wrap;
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 12px 0;
`;

export const SelectBox = styled.select`
  width: 120px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
  color: #000000;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const FilterButton = styled.button`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #eee;
`;

export const Section = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin-top: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const WorkbookTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 12px 0;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #65558f;
  margin-left: 12px;
  cursor: pointer;
`;

export const AgainButton = styled.button`
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 30px;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  width: 80%;
  max-width: 400px;
  background-color: ${({ disabled }) => (disabled ? "#B3BCFF" : "#808FFF")};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  z-index: 999;
`;

export const LearnConfirmButton = styled.button`
  position: fixed;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #00c18c;
  color: white;
  padding: 12px 24px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  z-index: 999;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const DateModalBackdrop = styled(ModalBackdrop)``;

export const DateModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px 20px;
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  margin: 10% auto;
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const AnswerBox = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
`;

export const OptionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 8px;
`;

export const OptionItem = styled.li`
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

export const DateRangeWrapper = styled.div`
  margin-top: 8px;
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  .rdrCalendarWrapper {
    font-family: inherit;
    border-radius: 12px;
    max-width: 100%;
    min-width: 280px;
    box-sizing: border-box;
  }

  .rdrMonth {
    width: 100% !important;
  }

  .rdrDayNumber span {
    font-size: 13px;
  }

  .rdrDayToday .rdrDayNumber span {
    border-bottom: none;
  }

  .rdrSelected {
    background: #808fff;
  }

  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    background: #cfd4ff;
  }
`;

export const DateInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const DateInputLabel = styled.label`
  font-size: 13px;
  color: #000;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-sizing: border-box;
  color: #8c8b81;
`;

export const DateModalButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  button {
    flex: 1;
    padding: 12px 0;
    font-size: 14px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
  }

  button:first-child {
    background: #eee;
    color: #444;
  }

  button:last-child {
    background: #808fff;
    color: white;
  }
`;

export const QuickRangeButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

export const QuickRangeButton = styled.button`
  padding: 10px 0;
  background: #edefff;
  border: none;
  border-radius: 12px;
  color: #8c8b81;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #e1e4f9;
  }
`;

export const WorkbookRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 12px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

export const WorkbookName = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 15px;
    font-weight: 500;
    color: #707070;
    margin-bottom: 4px;
  }

  .date {
    font-size: 12px;
    color: #999;
  }
`;

export const WorkbookArrow = styled.div`
  width: 18px;
  font-size: 14px;
  color: #666;
  margin-left: 12px;
  white-space: nowrap;
`;

export const WorkbookRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 64px;
  justify-content: flex-end;
  white-space: nowrap;
`;

export const WorkbookCount = styled.div`
  color: #666;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 42px;
  height: 42px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
`;
