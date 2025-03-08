import styled from "@emotion/styled"

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
`;

export const GenerateShelf__Container = styled.div`
  width:100%;
  height:100%;

  max-width:500px;

  display:flex;
  justify-content:center;
  align-items:center;
`

export const GenerateShelf__Shelf = styled.div`
  width:100%;
  padding: 0px 8px;

  display:flex;
  flex-direction:row;
  align-items:center;

  background-color:#ffffff;
`