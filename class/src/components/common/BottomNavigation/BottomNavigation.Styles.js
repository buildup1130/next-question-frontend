import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  /* left: 0;
  right: 0; */
  height: 76px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  color: ${(props) => (props.active ? "#007BFF" : "#CCCCCC")};
`;

export const NavTitle = styled.div`
  font-size: 12px;
`;

export const Icon = styled.div`
  font-size: 24px;
`;
