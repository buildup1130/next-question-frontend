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
    border-top: 1px solid #d9d9d9;
    padding-top:20px;
    margin-bottom:10px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
`

export const Home__CalTitle = styled.div`
    font-size: 18px;
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

export const Home__BlurContainer = styled.div`
  position: relative;
  filter: blur(2px);
  pointer-events: none; // 블러 처리된 콘텐츠와 상호작용 방지
`;

export const Home__LoginOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  border-radius: 8px;
`;

export const Home__LoginMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

export const Home__LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2563eb;
  }
`;

export const Home__StatContainer = styled.div`
  width:100%;
  max-width:500px;

  padding-top:20px;

  display:flex;
  flex-direction:column;
  gap:5px;
`

export const Home__StatTitle = styled.div`
  display:flex;
  align-items:center;
  gap: 10px;

  font-weight: 600;
`

export const Home__StatButton = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;

  padding: 4px 8px;
  cursor: pointer;

  &:hover{
    background-color:#f5f5f5;
  }
`