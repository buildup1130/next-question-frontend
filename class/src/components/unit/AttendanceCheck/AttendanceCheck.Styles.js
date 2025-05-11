import styled from "styled-components";
import {keyframes, css} from "styled-components";

export const Attendance__Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 80px;

    margin-top:20px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`

export const Attendance__Title = styled.div`
    font-size:16px;
`

export const Attendance__Component = styled.div`
    width:10%;
    aspect-ratio: 1/1;
    
    border: 1px solid #d9d9d9;
    border-radius: 100%;
    background-color: ${(props) => props.$attended ? '#D9DEFF' : 'white'};
    color: ${(props) => props.$attended ? 'white' : 'black'};


    display:flex;
    justify-content:center;
    align-items:center;
`

const glow = keyframes`
  0%, 100% {
            box-shadow: 0 0 5px 2px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 7px 4px rgba(59, 130, 246, 0.7);
    }
`;

const bounce = keyframes`
  0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
    }
`

    
    /* 핑 애니메이션 정의 */
    const ping = keyframes`
        0% {
            transform: translate(30%, -30%) scale(1);
            opacity: 1;
        }
        75%, 100% {
            transform: translate(30%, -30%) scale(1.2);
            opacity: 0.7;
        }
    `

export const Attendance__Component__UnChecked = styled.div`
    width:12%;
    aspect-ratio: 1/1;
    position:relative;
    
    /* border: 1px solid #d9d9d9; */
    border-radius: 100%;
    background-color: #8D9BFF;
    color: white;

    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;

    animation:${(props) => props.isAnimating ? css`${glow} 2s linear infinite, ${bounce} 1s infinite` : 'none'};

    &::after{
      content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background-color: #FFD700; /* 금색 */
        border-radius: 50%;
        transform: translate(30%, -30%); /* 원 밖으로 살짝 이동 */
        box-shadow: 0 0 5px 2px rgba(255, 215, 0, 0.5); /* 빛나는 효과 */
        
        /* 빛나는 효과를 위한 애니메이션 */
        animation:${ping} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
`


