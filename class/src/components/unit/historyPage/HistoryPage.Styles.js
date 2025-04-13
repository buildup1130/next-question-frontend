import styled from "@emotion/styled";

export const History__Header = styled.div`
  width:100%;
  max-width:500px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const History__BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  left: 0;
`;

export const History__Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`;

export const History__Plus = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 0;
  transform: translateY(2px);
`;

export const History__Container = styled.div`
  width:100%;
  max-width:500px;
  padding-top:20px;

  display:flex;
  flex-direction:column;
  gap:10px;
`