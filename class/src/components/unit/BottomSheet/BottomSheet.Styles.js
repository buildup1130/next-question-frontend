import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
`;

export const SheetContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 24px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  animation: slideUp 0.3s ease forwards;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Handle = styled.div`
  width: 50px;
  height: 5px;
  background: #ccc;
  border-radius: 2px;
  margin: 0 auto 16px;
`;

export const SheetContent = styled.div`
  text-align: left;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  hr {
    margin: 12px 0;
    border: none;
    height: 1.5px;
    background: #ddd;
  }
`;

export const OptionItem = styled.div`
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;
