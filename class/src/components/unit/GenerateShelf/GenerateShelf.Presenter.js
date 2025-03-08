import { GenerateShelf__Container, GenerateShelf__Wrapper } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper
        onClick={
            () => {
                props.setIsCreated(false)
            }
        }
    >
        <GenerateShelf__Container>
            {props.isQuestionArr?
            <div>로딩 중</div>:
            <div></div>
            }
        </GenerateShelf__Container>
    </GenerateShelf__Wrapper>);
}