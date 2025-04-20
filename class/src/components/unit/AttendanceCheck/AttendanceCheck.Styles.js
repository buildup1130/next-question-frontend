import styled from "styled-components";

export const Attendance__Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 80px;

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
    align-items:center
`

