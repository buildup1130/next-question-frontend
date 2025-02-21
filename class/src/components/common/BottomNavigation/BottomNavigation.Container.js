import { useRouter } from "next/router";
import BottomNavigationUI from "./BottomNavigation.Presenter";
import { useState } from "react";

export default function BottomNavigationLogic(){
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('home');
  
    const handleNavigation = (path, tab) => {
        setActiveTab(tab);
        router.push(path);
     };


    return(
        <BottomNavigationUI
            activeTab = {activeTab}
            handleNavigation = {handleNavigation}
        >
        </BottomNavigationUI>
    )
}