import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  input {
    width: 100%;
    height: 36px;
    margin-bottom: 16px;
    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    height: 36px;
    padding: 0 16px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }

  button:first-of-type {
    background-color: #808fff;
    color: white;
  }

  button:last-of-type {
    background-color: #eee;
    color: #333;
  }
`;
