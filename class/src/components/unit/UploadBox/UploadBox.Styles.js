import styled from "@emotion/styled"

export const UploadContainer = styled.div`
  width: 100%;
  max-width: 500px;
  min-height:168px;
  border-radius: 20px;
  margin-top:20px;
  border: 1px solid #d9d9d9;

  background: white;
  box-shadow: 0 16px 24px rgba(0,0,0,0.1);

  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag: none;

  cursor:pointer;

  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

export const UploadContainer__text = styled.div`
    font-size:24px;
    color:#111111;
    line-height:24px;
    font-weight:700;
`

export const CurrentFilename = styled.div`
  width:100%;
  max-width: 500px;
  padding-left:8px;
  color:#767676;

  overflow:hidden;
  text-overflow:ellipsis;
`

export const HiddenForm = styled.input`
display:none
`