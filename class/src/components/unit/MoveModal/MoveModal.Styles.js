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
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoveModal__Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  width: 100%;
`;

export const MoveModal__SelectContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 8px;
`;

export const MoveModal__Select = styled.select`
  flex: 1;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

export const MoveModal__SelectButton = styled.button`
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveModal__CreateRow = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 8px;
  display: flex;
  gap: 10px;
`;

export const MoveModal__Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const MoveModal__CreateButton = styled.button`
  height: 40px;
  padding: 0 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
`;

export const MoveModal__ButtonContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 8px;
  display: flex;
  gap: 12px;
`;

export const MoveModal__CancelButton = styled.button`
  flex: 1;
  min-height: 52px;
  border-radius: 20px;
  background-color: #ffffff;
  color: #111;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  cursor: pointer;
`;

export const MoveModal__SubmitButton = styled.button`
  flex: 1;
  min-height: 52px;
  border-radius: 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
