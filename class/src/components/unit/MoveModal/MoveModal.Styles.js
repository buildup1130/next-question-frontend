import styled from "@emotion/styled";

export const MoveModal__Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveModal__Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px 8px;
`;

export const MoveModal__Inner = styled.div`
  width: 100%;
  padding: 16px 8px;
  border-radius: 20px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoveModal__Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
`;

export const MoveModal__Select = styled.select`
  flex: 1;
  height: 44px;
  padding: 0 36px 0 12px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  color: #8c8b81;

  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  background-size: 16px;
`;

export const MoveModal__Input = styled.input`
  flex: 1;
  height: 36px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  padding: 0 12px;
  color: #333;
  outline: none;
`;

export const MoveModal__CreateButton = styled.button`
  height: 33px;
  width: 68px;

  border-radius: 20px;
  border: none;

  background-color: white;
  color: #808fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: 14px;

  white-space: nowrap;
`;

export const MoveModal__ButtonContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  gap: 12px;
  padding: 0 8px;
`;

export const MoveModal__CancelButton = styled.button`
  flex: 1;
  min-height: 48px;
  border-radius: 12px;
  background-color: #ffffff;
  color: #111;
  border: 1px solid #d9d9d9;
  font-size: 15px;
  font-weight: 400;
`;

export const MoveModal__SubmitButton = styled.button`
  flex: 1;
  min-height: 48px;
  border-radius: 12px;
  background-color: ${({ disabled }) => (disabled ? "#B3BCFF" : "#808FFF")};
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const MoveModal__InputContainer = styled.div`
  width: 100%;
  padding: 6px 10px 6px 0;
  margin-top: 8px;

  border-radius: 10px;
  background-color: #edefff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const MoveModal__SelectContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;
