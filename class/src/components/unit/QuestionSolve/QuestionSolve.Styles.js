import styled from "@emotion/styled";

// 스타일 컴포넌트 정의
export const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
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

export const QuestionSolve__ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 20px;
  margin-top: 20px;
`

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
  font-size: 16px;
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
  border: 1px solid ${(props) => {
    // 최근 제출한 선택지의 답에 따른 색 조정
    if(props.curAns){
     const tmpColor = props.isRightAnswer? "#155724": "#721c24";
     return tmpColor;
    }
    // 최근 선택한 선택지 색 조정 
    else{
      return props.selected ? "#0099ff" : "#ddd";
    }
    }};
  cursor: pointer;

  color: ${(props) =>{
    if(props.curAns){
     const tmpColor = props.isRightAnswer? "#155724": "#721c24";
     return tmpColor;
    }
    else{
      return "#111111";
    }
  }};

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

export const QuestionIcon = styled.img`
  width: 25px;
  height: 25px;
  
`;

export const QuestionBox__Header = styled.div`
  display: flex;
  margin-bottom: 20px;

  gap: 10px;
`;

export const QuestionSolve__ResultWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0, 0, 0, 0.5);
  z-Index: 10;

  overflow: hidden;

  display:flex;
  justify-content:center;
`

export const QuestionSolve__ResultContainer = styled.div`
  width:100%;
  height:100%;

  max-width:500px;

  display:flex;
  justify-content:center;
  align-items:center;

  z-index:100;

  padding: 20px 8px;
`

export const QuestionSolve__ResultBox = styled.div`
  width:100%;
  /* height:100%; */
  max-height:100%;
  padding: 16px 8px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;

  box-shadow: 0 16px 24px rgba(0,0,0,0.1);

  display:flex;
  flex-direction:column;
  align-items:center;

  background-color:#ffffff;
`

export const QuestionSolve__QuestionWrapper = styled.div`
  width:100%;
  height:100%;
  padding: 0 8px;

  border: 1px solid #d9d9d9;
  overflow-y: scroll;
  overflow-x: hidden;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`
export const QuestionSolve__QuestionContainer = styled.div`
  margin-top:8px;
`

export const QuestionSolve__QuestionTitle = styled.div`
  font-size:20px;
  font-weight:700;
`
export const QuestionSolve__QuestionText = styled.div`
  font-size:16px;
`

export const QuestionSolve__ButtonContainer = styled.div`
  width:100%;
  padding: 0 8px;

  display:flex;
  flex-direction:row;
  gap:12px;
`
export const QuestionSolve__submitButton = styled.div`
width:100%;
max-width:500px;
min-height:52px;

border-radius: 20px;
margin-top:40px;
border: 1px solid #d9d9d9;

background-color: #3b82f6;
color: white;

display:flex;
justify-content:center;
align-items:center;

cursor: pointer;
`
