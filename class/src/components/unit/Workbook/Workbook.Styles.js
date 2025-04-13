import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 80px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 48px;
  margin-bottom: 16px;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;
export const TopRightButtonGroup = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px; // ✅ 버튼 간격
`;

export const TopRightButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px; // 클릭 영역 확보
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ddd;
  margin: 0 0 16px 0;
`;

export const QuestionCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
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

export const Checkbox = styled.input`
  margin-top: 6px;
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
