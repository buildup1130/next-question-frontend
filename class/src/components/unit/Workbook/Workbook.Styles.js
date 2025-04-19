import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 80px;
  margin: 0 auto;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`;

export const TopRightButtonGroup = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
`;

export const TopRightButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const QuestionCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`;

export const Checkbox = styled.input`
  margin-top: 6px;
`;

export const QuestionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Answer = styled.div`
  color: green;
  font-size: 14px;
`;

export const Type = styled.div`
  color: #555;
  font-size: 13px;
  margin-top: 4px;
`;

export const OptionList = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: #888;
`;

export const DeleteButton = styled.button`
  margin-top: 20px;
  padding: 10px 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
`;
