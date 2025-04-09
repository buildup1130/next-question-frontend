import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 80px; // ✅ 하단 네비게이션 높이만큼 공간 확보
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 48px;
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
