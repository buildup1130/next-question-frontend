import GenerateShelfUI from "./GenerateShelf.Presenter";

export default function GenerateShelfLogic(props){

    return(
        <GenerateShelfUI
            setIsCreated = {props.setIsCreated}
            isQuestionArr = {props.isQuestionArr}
        >
            
        </GenerateShelfUI>
    )
}