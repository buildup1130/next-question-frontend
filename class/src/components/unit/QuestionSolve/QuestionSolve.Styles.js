import styled from "@emotion/styled";

// 스타일 컴포넌트 정의
export const QuestionContainer = styled.div`
  width: 100%;

  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  position: relative;
  padding-bottom: 20px;

  border-bottom: 1px solid #d9d9d9;
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
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`;

export const ProgressBar = styled.div`
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => (props.current / props.total) * 100}%;
  background-color: #0099ff;
  border-radius: 5px;
`;

export const ProgressText = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

export const QuestionBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OptionItem = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#e6f4ff" : "white")};
  border: 1px solid ${(props) => (props.selected ? "#0099ff" : "#ddd")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#e6f4ff" : "#f5f5f5")};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const QuestionIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
`;

export const QuestionBox__Header = styled.div`
  display: flex;
  margin-bottom: 20px;

  gap: 10px;
`;
