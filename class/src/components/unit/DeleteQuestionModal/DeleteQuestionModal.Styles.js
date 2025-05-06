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

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const CancelButton = styled.button`
  flex: 1;
  min-height: 40px;
  border-radius: 8px;
  background-color: #f3f3f3;
  color: #333;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  min-height: 40px;
  border-radius: 8px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
`;
