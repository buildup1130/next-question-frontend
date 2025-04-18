import styled from "@emotion/styled";

export const Generate__subtitle = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 16px;

  font-size: 24px;
  font-weight: 700;
  color: #111111;
`;

export const Generate__Optname = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 4px;

  font-size: 20px;
  color: #111111;
`;

export const Generate__countContainer = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Generate__countbutton = styled.div`
  width: 30%;
  max-width: 500px;
  min-height: 52px;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px solid #d9d9d9;

  background: white;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1);

  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag: none;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Generate__submitButton = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 52px;

  border-radius: 20px;
  margin-top: 40px;
  border: 1px solid #d9d9d9;

  background-color: #3b82f6;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Home__IconBar = styled.div`
    width:100%;
    max-width:500px;

    display:flex;
    flex-direction:row-reverse;
`

export const Home__IconBar__Login = styled.div`


    font-size:16px;
    font-weight:700;

    display:flex;
    align-items:center;
    gap:10px;
`

export const Home__IconBar__LoginBtn = styled.div`
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;

    cursor: pointer;
`

export const Home__IconBar__Logo = styled.div`
    font-size:32px;
    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex:1;
`


export const Home__CalBar = styled.div`
    width:100%;
    max-width: 500px;
    margin-top:20px;
    padding: 0 16px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
`

export const Home__CalTitle = styled.div`
    font-size: 24px;
    font-weight:700;
    color:#111111;
`

export const Home__CalMore = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    font-size:16px;
    letter-spacing:-2.5%;
    color:#767676;
`

export const Home_CalMore_Image = styled.img`
    width:9px;
    height:9px;
`