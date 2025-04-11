import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 168px;
  aspect-ratio: 5/3;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px dashed #d9d9d9;

  background: #f5f5f5;
  /* box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1); */

  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag: none;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadContainer__text = styled.div`
  font-size: 16px;
  color: #585858;
  line-height: 14px;
  font-weight: 700;
`;

export const CurrentFilename = styled.div`
  font-size: 12px;
  padding-left: 8px;
  color: #767676;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HiddenForm = styled.input`
  display: none;
`;

export const UploadBox__UploadButton = styled.div`
  width:50%;
  max-width:250px;
  height:60px;
  border-radius:50px;

  background-color: #808ff8;
  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  transform:translateY(-45px);
  cursor: pointer;

  :hover{
    transform:translateY(-47px);
  }

  :active{
    transform:translateY(-45px);
  }
`