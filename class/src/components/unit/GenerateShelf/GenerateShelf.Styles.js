import styled from "@emotion/styled"
import { keyframes } from "styled-components";

export const GenerateShelf__Wrapper = styled.div`
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
  z-index:9999;
`;

export const GenerateShelf__Container = styled.div`
  width:100%;
  height:100%;

  max-width:500px;

  display:flex;
  justify-content:center;
  align-items:center;

  z-index:100;

  padding: 20px 8px;
`

export const GenerateShelf__Shelf = styled.div`
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

export const GenerateShelf__Shelf__Title = styled.div`
  width:100%;

  font-size:18px;
  font-weight:700;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
`

export const GenerateShelf__Shelf__Title__Button = styled.button`
  width:32px;
  height:32px;

  background-color:#ffffff;
  border:0;

  font-size:28px;
`

export const GenerateShelf__Shelf__Container = styled.div`
  width:100%;
  margin-top:20px;

  display:flex;
  flex-direction:row;
  justify-content:center;
`

export const GenerateShelf__Shelf__Select = styled.select`
  width:100%;
  height:45px;

  font-size:16px;

  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding-left: 22px;
`

export const GenerateShelf__Shelf__Select__Button = styled.button`
  width:40px;
  height:40px;

  background-color:#ffffff;
  border:0;

  font-size:30px;
`

export const GenerateShelf__Shelf__Input__Container = styled.div`
  width:100%;
  padding: 6px 10px 6px 0;
  margin-top:20px;

  border-radius: 10px;
  background-color: #edefff;
  display:flex;
  flex-direction:row;
  justify-content:center;
  gap:10px;
`

export const GenerateShelf__Shelf__Input = styled.input`
  width:100%;
  border:none;
  background-color:transparent;
  padding: 0 0 0 22px;
`

export const GenerateShelf__Shelf__Input__Button = styled.button`
  height:33px;
  width:80px;

border-radius: 20px;
border: none;

background-color: white;
color: #808fff;

display:flex;
justify-content:center;
align-items:center;

cursor: pointer;

  font-size:16px;

  white-space:nowrap;
`

export const GenerateShelf__Shelf__submitButton = styled.div`
width:100%;
max-width:500px;
min-height:52px;

border-radius: 20px;
margin-top:40px;
border: 1px solid #d9d9d9;

background-color: #808fff;
color: white;

display:flex;
justify-content:center;
align-items:center;

cursor: pointer;
`

export const GenerateShelf__Shelf__QuestionWrapper = styled.div`
  width:100%;
  height:100%;
  padding: 0 8px;

  /* border: 1px solid #d9d9d9; */
  overflow-y: scroll;
  overflow-x: hidden;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`
export const GenerateShelf__Shelf__QuestionContainer = styled.div`
  margin-top:8px;
  padding: 10px;

  border: 1px solid #d9d9d9;
  border-radius:20px;
`

export const GenerateShelf__Shelf__QuestionHeader = styled.div`
  display:flex;
  justify-content:space-between;
`

export const GenerateShelf__Shelf__QuestionDeleteContainer = styled.div`
  display:flex;


`

export const GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan = styled.div`
  padding:0 2px;
  color:#b3b3b3;
`

export const GenerateShelf__Shelf__QuestionDeleteContainer__XButton = styled.div`
  padding:0 2px;
  display:${(props) => (props.isVisible?"":"none")}
`

export const GenerateShelf__Shelf__QuestionTitle = styled.div`
  font-size:18px;
  font-weight:700;
`
export const GenerateShelf__Shelf__QuestionText = styled.div`
  font-size:16px;
  display:flex;

  align-items:center;
  gap:4px;
`
export const GenerateShelf__Shelf__QuestionAnswerContainer = styled.div`
  display:flex;
  flex-direction:column;

  gap:8px;
`

export const GenerateShelf__Shelf__QuestionNum = styled.div`
  font-size:16px;
  color:${(props) => (props.isAns?"#ffffff":"#b2b099")};
  width:20px;
  height:20px;
  
  background-color:${(props) => (props.isAns?"#808fff":"#f3f4f6")};
  border-radius: 5px;

  display:flex;
  justify-content:center;
  align-items:center;

  margin-right:2px;
  flex-shrink:0;
`

export const GenerateShelf__Shelf__QuestionAnswer = styled.div`
  font-size:16px;
  color: #a7a7a7;
`

export const GenerateShelf__Shelf__ButtonContainer = styled.div`
  width:100%;
  padding: 0 8px;

  display:flex;
  flex-direction:row;
  gap:12px;
`

export const GenerateShelf__countbutton = styled.div`
  width: 30%;
  max-width: 500px;
  min-height:52px;
  border-radius: 20px;
  margin-top:20px;
  border: 1px solid #d9d9d9;

  background: white;
  box-shadow: 0 16px 24px rgba(0,0,0,0.1);

  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag: none;

  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;
`

export const GenerateShelf__countbuttonContainer = styled.div`
  width: 100%;

  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;

  //버튼 하나일 경우 가운데 정렬
  ${props => props.isSingle && `
    justify-content:center;
  `
  }
`

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSvg = styled.svg`
  width:50px;
  height:50px;

  animation: ${spinner} 2s linear infinite;
  transform-origin: center;
`

export const LoadingCircle = styled.circle`
  fill: none;
  stroke: black;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 251.2;
  stroke-dashoffset: 62.8;
  transform-origin: center;
  animation: ${spinner} 2s linear infinite;
`;

export const GenerateShelf__Shelf__Title__Text = styled.div`
  width:100%;
  text-align:center;
`

export const GenerateShelf__typeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding: 0 10px;

  gap: 10px;
`;

export const GenerateShelf__type = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;

  font-size: 18px;

  border-radius: 15px;
  background-color: ${(props) =>
    props.isSelected ? "#edefff" : "transparent"};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  user-select: none; /* 텍스트 선택 방지 */
  -webkit-user-select: none; /* Safari 지원 */
  -moz-user-select: none; /* Firefox 지원 */
  -ms-user-select: none; /* IE/Edge 지원 */

  /* 이미지나 요소 드래그 방지 */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const GenerateShelf__typeElement = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const GenerateShelf__Shelf__Subtitle = styled.div`
  width:100%;

  font-size:16px;
  padding:5px 12px;

`

export const GenerateShelf__Shelf__CountContainer = styled.div`
    width:100%;
    margin-top:20px;
    padding:0 10px;


    color: #9e9e9e;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    /* 이미지나 요소 드래그 방지 */
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
`

// Styled components for custom select
export const GenerateShelf__Shelf__SelectContainer = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
`;

export const GenerateShelf__Shelf__StyledSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: none;
  background: transparent;
  padding: 4px 0;
  cursor: pointer;
  outline: none;
`;

export const GenerateShelf__Shelf__Arrow = styled.span`
  display: inline-block;
  transform: ${props => props.isOpen ? 'rotate(0)' : 'rotate(-90deg)'};
  transition: transform 0.3s ease;
`;

export const GenerateShelf__Shelf__OptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 10;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const GenerateShelf__Shelf__Option = styled.div`
  padding: 8px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;
