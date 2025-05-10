import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding: 16px;
  padding-bottom: 80px;
  margin: 0 auto;
  background-color: #ffffff;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #eee;
  width: 100%;
  max-width: 500px;
  margin: 4px auto;
`;

export const ControlBar = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 4px 0;
`;

export const ToggleAnswerButton = styled.button`
  padding: 6px 12px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const QuestionCard = styled.div`
  padding: 16px 0 12px 0;
  border-bottom: 1px solid #ddd;
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const QuestionTextWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

export const QuestionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
`;

export const OptionNumber = styled.div`
  width: 20px;
  height: 20px;
  font-size: 13px;
  background-color: ${(props) => (props.isAnswer ? "#808fff" : "#f3f4f6")};
  color: ${(props) => (props.isAnswer ? "#fff" : "#999")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const Answer = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 24px;
`;

export const AnswerLabel = styled.div`
  width: 20px;
  height: 20px;
  font-size: 13px;
  font-weight: bold;
  background-color: #808fff;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 6px;
`;
