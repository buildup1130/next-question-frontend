import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background: white;
  border-radius: 10px;
  margin: 250px auto;
  padding: 24px;
  text-align: center;

  input {
    width: 100%;
    padding: 12px 10px;
    margin-top: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: #000;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
