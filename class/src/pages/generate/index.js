import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import UploadBoxLogic from "@/components/unit/UploadBox/UploadBox.Container";

export default function generatePage(){

    return(
    <MainContainerLogic>
        <UploadBoxLogic></UploadBoxLogic>

    </MainContainerLogic>)
}