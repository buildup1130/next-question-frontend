import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  padding: 16px 16px 80px;
  margin: 0 auto;
  background-color: #ffffff;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 24px;
`;

export const BackButton = styled.button`
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  word-break: break-word;
  white-space: normal;
  text-align: center;
  max-width: calc(100% - 40px);
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
  font-weight: 500;
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
  font-size: 14px;
  font-weight: 400;
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
  font-size: 12px;
`;

export const OptionNumber = styled.div`
  width: 18px;
  height: 18px;
  font-size: 14px;
  background-color: ${(props) => (props.isAnswer ? "#808fff" : "#f3f4f6")};
  color: ${(props) => (props.isAnswer ? "#fff" : "#999")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const Answer = styled.div`
  font-size: 14px;
  line-height: 1.2;
  color: #333;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 2px;
  min-height: 24px;
`;

export const AnswerLabel = styled.div`
  width: 18px;
  height: 18px;
  font-size: 14px;
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
