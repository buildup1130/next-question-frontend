import styled from "@emotion/styled";

export const Container = styled.div`
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

export const Plus = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 0;
  transform: translateY(2px);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 45px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #ccc;
  }
`;

export const SearchButton = styled.button`
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const BookList = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0;
`;

export const BookItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MoreButtonWrapper = styled.div`
  padding: 10px;
  margin-right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const LearnButtonWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const LearnButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 200px auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 24px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
`;

export const BookCheckbox = styled.input`
  margin-right: 4px;
  transform: scale(1.2);
`;

export const TopButtonBar = styled.div`
  position: fixed;
  bottom: 80px; /* 하단 네비게이션 위 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1000;
`;
