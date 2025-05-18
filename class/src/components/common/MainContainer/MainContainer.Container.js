import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import MainContainerUI from "./MainContainer.Presenter";

export default function MainContainerLogic({children}){


    return(
        <MainContainerUI>
            {children}
        </MainContainerUI>
    )
}