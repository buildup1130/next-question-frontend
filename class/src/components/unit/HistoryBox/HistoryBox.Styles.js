import styled from "@emotion/styled"

export const HistoryBox__Wrapper = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;
    gap:5px;
`

export const HistoryBox__TitleContainer = styled.div`
    width:100%;
    max-width:500px;
    height:80px;
    padding-left:10px;

    border:1px solid #ddd;
    border-radius:10px;

    display:flex;
    flex-direction:row;
    align-items:center;

    overflow:hidden;
`
export const HistoryBox__TitleLeft = styled.div`
  flex:1;
`
export const HistoryBox__downButton = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;


  padding:0 8px;
  background-color:#e7e7e7;
  cursor: pointer;
`


export const HistoryBox__InfoContainer = styled.div`
    width:100%;
    max-width:500px;

    border:1px solid #ddd;
    border-radius:10px;

    display: ${(props) => (props.$visible?"flex":"none")};
    flex-direction:column;

    padding-bottom:8px;
`

export const HistoryBox__QuestionWrapper = styled.div`
  width:100%;
  height:100%;
  padding: 0 8px;



  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`

export const HistoryBox__QuestionContainer = styled.div`
  margin-top:8px;
  padding: 10px;

  border: 1px solid #d9d9d9;
  border-radius:20px;
`

export const HistoryBox__QuestionTitle = styled.div`
  font-weight:bold;
`

export const HistoryBox__QuestionType = styled.div`
  color: #555;
  font-size: 13px;
  margin-top: 4px;
`

export const HistoryBox__QuestionAnswer = styled.div`
  font-size:14px;
  color:green;
`

export const HistoryBox__QuestionOption = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: #888;
`;