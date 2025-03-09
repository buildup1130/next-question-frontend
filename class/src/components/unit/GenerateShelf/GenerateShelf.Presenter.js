import { GenerateShelf__Container, GenerateShelf__Shelf, GenerateShelf__Shelf__Container, GenerateShelf__Shelf__Input, GenerateShelf__Shelf__Input__Button, GenerateShelf__Shelf__Input__Container, GenerateShelf__Shelf__Select, GenerateShelf__Shelf__Select__Button, GenerateShelf__Shelf__Title, GenerateShelf__Shelf__Title__Button, GenerateShelf__Wrapper } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper>
        <GenerateShelf__Container>
            {props.isQuestionArr?
            <GenerateShelf__Shelf>
                <GenerateShelf__Shelf__Title>
                    <div>문제집 선택</div>
                    <GenerateShelf__Shelf__Title__Button
                        onClick={() => {
                            props.setIsCreated(false);
                        }}
                    >X</GenerateShelf__Shelf__Title__Button>
                </GenerateShelf__Shelf__Title>
                <GenerateShelf__Shelf__Container>
                    <GenerateShelf__Shelf__Select>
                      <option value="">-- 문제집을 선택하세요 --</option>
                      
                    </GenerateShelf__Shelf__Select>
                    <GenerateShelf__Shelf__Select__Button
                        onClick={() => {props.setIsCreating(true)}}
                    >+</GenerateShelf__Shelf__Select__Button>
                </GenerateShelf__Shelf__Container>
                {props.isCreating?
                    <GenerateShelf__Shelf__Input__Container>
                        <GenerateShelf__Shelf__Input
                            onChange={(e) => {props.HandleWorkBookName(e);
                            }}
                        ></GenerateShelf__Shelf__Input>
                        <GenerateShelf__Shelf__Input__Button
                            onClick={() => {props.onCreateWorkBook()}}
                        >등록하기</GenerateShelf__Shelf__Input__Button>
                    </GenerateShelf__Shelf__Input__Container>
                    :
                    <></>}
            </GenerateShelf__Shelf>
            :
            <div>로딩 중</div>
            }
        </GenerateShelf__Container>
    </GenerateShelf__Wrapper>);
}