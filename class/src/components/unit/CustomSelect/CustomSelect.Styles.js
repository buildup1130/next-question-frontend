import styled from "styled-components";

// Styled components for custom select
export const CustomSelect__SelectContainer = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
`;

export const CustomSelect__StyledSelect = styled.div`
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

export const CustomSelect__Arrow = styled.span`
  display: inline-block;
  transform: ${(props) => (props.isOpen ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: transform 0.3s ease;
`;

export const CustomSelect__OptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const CustomSelect__Option = styled.div`
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;