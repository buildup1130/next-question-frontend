import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 160px;
  margin: 0 auto;
  position: relative;
`;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  padding-top: 12px;
  font-weight: bold;
  font-size: 20px;
`;

export const CalendarButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Section = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin-top: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

export const AgainButton = styled.button`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #6f6cf1;
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
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
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

export const AnswerBox = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
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
  padding: 20px;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;

  border: 1px solid #ccc;
  border-radius: 6px;

  appearance: none;
  background-color: white;
`;

export const DateModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const QuickRangeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`;

export const QuickRangeButton = styled.button`
  flex: 1;
  padding: 8px;
  margin: 0 4px;
  border: 1px solid #ddd;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #eaeaea;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 12px;
  top: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  border: none;
  margin-top: 8px;
  margin-bottom: 12px;
`;
