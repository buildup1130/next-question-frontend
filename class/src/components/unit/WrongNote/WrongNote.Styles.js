import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const DateHeader = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 8px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  span.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }

  span.type {
    flex-shrink: 0;
    margin-left: 12px;
    color: #888;
  }
`;

export const DateTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  cursor: pointer;
  user-select: none;
`;

export const AgainButton = styled.button`
  width: 100%;
  padding: 12px;
  background: yellow;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  font-weight: bold;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  margin: 10% auto;
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
`;

export const OptionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 8px;
`;

export const OptionItem = styled.li`
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.5;
`;

export const AnswerBox = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
`;
