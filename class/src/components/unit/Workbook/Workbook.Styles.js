import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 16px 16px 80px;
  background-color: #fff;
  overflow-y: scroll;
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

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  min-height: 90px; // 문제 길이에 따라 조절 가능
  gap: 8px;
`;

export const ToggleAnswerSingleButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px 12px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: white;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ActionButton = styled.button`
  flex: 1;
  height: 32px;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: ${({ disabled }) => (disabled ? "#B3BCFF" : "#808FFF")};
  border: 1px solid #b3bcff;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  white-space: nowrap;
`;

export const QuestionCard = styled.div`
  padding: 16px 0 12px;
  border-bottom: 1px solid #ddd;
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  position: relative;
`;

export const QuestionTextWrapper = styled.div`
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 88px); // 정답 버튼 너비 + 여유 공간
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
  background-color: ${({ isAnswer }) => (isAnswer ? "#808fff" : "#f3f4f6")};
  color: ${({ isAnswer }) => (isAnswer ? "#fff" : "#999")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #65558f;
  flex-shrink: 0;
  margin-top: 4px;
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
  font-weight: 400;
  background-color: ${({ isAnswer }) => (isAnswer ? "#808fff" : "#f3f4f6")};
  color: ${({ isAnswer }) => (isAnswer ? "#fff" : "#999")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 6px;
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
