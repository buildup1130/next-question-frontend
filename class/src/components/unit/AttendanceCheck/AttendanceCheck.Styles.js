import styled from "styled-components";
import keyframes from "styled-components";

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

const flow = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
    
    animation: ${(props) => props.$attended ? 'none' : `${flow} 2s linear infinite`};
`

