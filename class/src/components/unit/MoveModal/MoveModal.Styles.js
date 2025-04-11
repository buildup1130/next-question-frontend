import styled from "@emotion/styled";

export const MoveModal__Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const MoveModal__CreateContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 0 8px;

  display: flex;
  flex-direction: column; // ✅ 세로 배치로 변경
  gap: 8px;
`;

export const MoveModal__Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px 8px;
`;

export const MoveModal__Inner = styled.div`
  width: 100%;
  padding: 16px 8px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

export const MoveModal__Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const MoveModal__SelectContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MoveModal__Select = styled.select`
  width: 100%;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

export const MoveModal__SelectButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 0;
  font-size: 30px;
`;

export const MoveModal__ButtonContainer = styled.div`
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 40px;
`;

export const MoveModal__CancelButton = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 52px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MoveModal__SubmitButton = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 52px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #3b82f6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MoveModal__CreateRow = styled.div`
  width: 100%;
  padding: 0 8px;
  margin-top: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const MoveModal__Input = styled.input`
  flex: 1;
  height: 40px;
  font-size: 16px;
  padding: 0 12px;
  box-sizing: border-box;
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
