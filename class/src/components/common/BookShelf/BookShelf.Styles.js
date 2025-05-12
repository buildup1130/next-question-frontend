import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 0 16px 100px;
  background-color: #fff;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 8px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin: 0;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #eee;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-bottom: 12px;
`;

export const StyledSearchInput = styled.input`
  width: 200px;
  height: 32px;
  padding: 6px 10px 6px 32px;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 12px;
  background-color: #fff;

  &::placeholder {
    color: #000;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 14px;
  color: #000;
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const FilterActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterSelect = styled.select`
  height: 32px;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  color: #000;
`;

export const SelectButton = styled.button`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const DeleteButton = styled(SelectButton)`
  background-color: ${({ disabled }) => (disabled ? "#B3BCFF" : "#808FFF")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const BookList = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding: 0;
`;

export const BookItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
`;

export const BookInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #707070;
  margin-bottom: 4px;
  word-break: break-word;
`;

export const BookDate = styled.div`
  font-size: 12px;
  color: #999;
`;

export const BookInfoRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 64px;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const BookCount = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #707070;
`;

export const BookCheckbox = styled.input`
  width: 24px;
  height: 16px;
  accent-color: #65558f;
  cursor: pointer;
`;

export const MoreButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionPopup = styled.div`
  position: absolute;
  top: 40px; // ✅ 버튼 아래로 약간 띄움
  right: 0; // ✅ 버튼 오른쪽 정렬 유지
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #eef0ff;
  }
`;

export const AddBookArea = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  color: #808fff;
  text-align: center;
  border-top: 1px solid #b3bcff;
  cursor: pointer;
`;

export const BottomFloatingButton = styled.button`
  position: fixed;
  bottom: 95px;
  left: 50%;
  transform: translateX(-50%);
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  width: 80%;
  max-width: 400px;
  background-color: #808fff;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
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
  padding: 24px;
  width: 90%;
  max-width: 360px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 36px;
    margin-bottom: 16px;
    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #878787;
  }

  button {
    height: 36px;
    margin: 0 4px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  button:first-of-type {
    background-color: #808fff;
    color: white;
  }

  button:last-of-type {
    background-color: #eee;
    color: #333;
  }
`;

export const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-top: 16px;
`;

export const TileItem = styled.div`
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const CardTop = styled.div`
  position: relative;
  background-color: #eef0ff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TileTopRightButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;

export const CardBottom = styled.div`
  background-color: white;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4px;
  word-break: break-word;
`;

export const CardInfo = styled.div`
  font-size: 11px;
  color: #666;
  text-align: center;
  margin-bottom: 6px;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;

  button {
    padding: 2px 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 11px;
    background-color: white;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const PlusCard = styled(Card)`
  min-height: 150px;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  color: #999;
  font-size: 32px;
  cursor: pointer;
`;
