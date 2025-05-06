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
  justify-content: center;
  align-items: center;
  padding: 16px 0 4px 0;
`;

export const PageTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 8px 0 4px 0;
  text-align: center;
  width: 100%;
`;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 4px;
  gap: 6px;
  flex-wrap: wrap;
`;

export const CalendarButton = styled.button`
  margin-left: 8px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 12px;
  padding: 0 16px;
`;

export const SelectBox = styled.select`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const FilterButton = styled.button`
  background-color: #808fff;
  color: white;
  font-weight: bold;
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
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
  accent-color: #6f6cf1;
  margin-left: 12px;
  cursor: pointer;
`;

export const DateTitle = styled.div`
  background-color: #e4e7ff;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const QuestionItem = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;

  &:first-child {
    border-top: none;
  }

  span.title {
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }

  span.type {
    margin-left: 12px;
    color: #7f7f7f;
    font-size: 13px;
    flex-shrink: 0;
  }
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
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.5;
`;

export const DateModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const DateModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px 20px;
  width: 90%;
  max-width: 360px;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
`;

export const DateModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  & > button:first-child {
    background: #e0e0e0;
    color: #333;
  }

  & > button:last-child {
    background: #808fff;
    color: white;
  }
`;

export const QuickRangeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const QuickRangeButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border: none;
  background: #eef0ff;
  border-radius: 10px;
  color: #6f6cf1;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #dbe0ff;
  }
`;

export const WorkbookRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

export const WorkbookName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  flex: 1;
`;

export const WorkbookArrow = styled.div`
  font-size: 14px;
  color: #666;
  margin-left: 12px;
  white-space: nowrap;
`;

export const QuestionListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #f9f9fc;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #eef0ff;
  }
`;

export const QuestionNumber = styled.span`
  flex-shrink: 0;
  font-weight: bold;
  color: #6f6cf1;
`;

export const QuestionTitle = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WorkbookRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  min-width: 80px;
`;

export const WorkbookCount = styled.div`
  color: #666;
  font-size: 14px;
  flex-shrink: 0;
`;
