import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const ModalTitle = styled.h2`
  // 변경: <p> → <h2>
  font-size: 18px; // 크기 맞춤
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ModalDescription = styled.p`
  font-size: 14px; // 크기 맞춤
  color: #555; // 동일한 톤
  margin-bottom: 20px;
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #eee;
  color: #333;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
`;
