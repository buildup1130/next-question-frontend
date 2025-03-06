import styled from "@emotion/styled"

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width:100%;
  max-width:500px;
  /* left: 0;
  right: 0; */
  height: 76px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px 16px 24px rgba(0,0,0,0.1);
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  color: ${props => props.active ? '#007BFF' : '#CCCCCC'};
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;