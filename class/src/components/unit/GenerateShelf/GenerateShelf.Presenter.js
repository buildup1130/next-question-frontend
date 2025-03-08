import { GenerateShelf__Container, GenerateShelf__Shelf, GenerateShelf__Wrapper } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper
        onClick={props.isQuestionArr?
            () => {props.setIsCreated(false)}:() => {}
        }
    >
        <GenerateShelf__Container>
            {props.isQuestionArr?
            <GenerateShelf__Shelf>
                
            </GenerateShelf__Shelf>
            :
            <div>로딩 중</div>
            }
        </GenerateShelf__Container>
    </GenerateShelf__Wrapper>);
}