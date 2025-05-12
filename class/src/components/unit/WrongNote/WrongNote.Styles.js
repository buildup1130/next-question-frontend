// ✅ WrongNote.Styles.js
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
  padding: 16px 0 8px 0;
`;

export const PageTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: #222;
`;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  margin-top: 6px;
  margin-bottom: 18px;
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

  svg {
    vertical-align: middle;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 12px;
  padding: 0 0px;
`;

export const SelectBox = styled.select`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

export const FilterButton = styled.button`
  padding: 6px 12px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: white;
  cursor: pointer;
  font-size: 14px;
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

export const DateModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

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
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  .rdrCalendarWrapper {
    font-family: inherit;
    border-radius: 12px;
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
  margin-bottom: 16px; // ✅ 간격 증가
`;

export const DateInputLabel = styled.label`
  font-size: 13px;
  color: #000000;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #ffffff;
  box-sizing: border-box;
  color: #8c8b81;
`;

export const DateModalButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px; // ✅ 버튼 위 간격 추가

  button {
    flex: 1;
    padding: 12px 0;
    font-weight: 600;
    font-size: 14px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
  }

  button:first-child {
    background: #eeeeee;
    color: #444444;
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
  margin-bottom: 16px; // ✅ 버튼 아래와 간격
`;

export const QuickRangeButton = styled.button`
  flex: 1;
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
  justify-content: center;

  .title {
    font-size: 15px;
    font-weight: 600; // 책장과 동일
    color: #707070; // 책장 기준 색상
    margin-bottom: 4px; // 제목과 날짜 사이 간격 추가
  }

  .date {
    font-size: 12px;
    color: #999999; // 책장과 동일
  }
`;

export const WorkbookArrow = styled.div`
  font-size: 14px;
  color: #666;
  margin-left: 12px;
  white-space: nowrap;
`;

export const WorkbookRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const WorkbookCount = styled.div`
  color: #666;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
