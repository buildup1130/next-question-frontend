import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 0 16px 100px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 8px 0;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: #222;
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
    color: #000000;
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
  gap: 8px;
  align-items: center;
`;

export const FilterSelect = styled.select`
  height: 32px;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  background-color: #fff;
`;

export const SelectButton = styled.button`
  padding: 6px 12px;
  height: 32px;
  border-radius: 6px;
  background-color: #808fff;
  border: 1px solid #b3bcff;
  color: white;
  cursor: pointer;
  font-size: 14px;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  height: 32px;
  border-radius: 6px;
  background-color: ${({ disabled }) => (disabled ? "#B3BCFF" : "#808FFF")};
  border: 1px solid #b3bcff;
  color: white;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-size: 14px;
`;

export const BookList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;

export const BookItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

export const BookInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
  color: #707070;
  word-break: break-word;
  white-space: normal;
`;

export const BookDate = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const BookInfoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 64px; // ✅ 고정 너비 지정 (or 60~72px 정도)
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
  transform: none;
  accent-color: #65558f;
  cursor: pointer;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const OptionPopup = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  background: #c9cef5;
  border: 1px solid #eaedff;
  border-radius: 8px;
  padding: 8px;
  z-index: 100;
`;

export const OptionItem = styled.div`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #eaedff;
  }
`;

export const AddBookArea = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  color: #808fff;
  border-top: 1px solid #b3bcff;
  font-size: 18px;
`;

export const BottomFloatingButton = styled.button`
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 30px;
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
  border-radius: 12px;
  font-weight: 600;
  padding: 24px;
  width: 90%;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;

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
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 400;
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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
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

export const CardBottom = styled.div`
  background-color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  word-break: break-word;
  text-align: center;
`;

export const CardTop = styled.div`
  position: relative;
  background-color: #eef0ff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardInfo = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  text-align: center;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    background-color: white;
  }
`;

export const TileTopRightButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;

export const PlusCard = styled(Card)`
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  cursor: pointer;
  color: #999;
  font-size: 32px;
`;
