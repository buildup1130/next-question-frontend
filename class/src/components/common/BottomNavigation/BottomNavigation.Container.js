import { useRouter } from "next/router";
import BottomNavigationUI from "./BottomNavigation.Presenter";
import { useState } from "react";

export default function BottomNavigationLogic(){
    const router = useRouter();

  
    const handleNavigation = (path) => {
        router.push(path);
     };


     // URL 경로에 따라 activeTab 결정
    const getActiveTabFromPath = (path) => {
        if (path === '/') return 'home';
        if (path.includes('/BookShelf')) return 'shelf';
        if (path.includes('/check')) return 'check';
        if (path.includes('/history')) return 'history';
        return 'home'; // 기본값
    };
    
    const activeTab = getActiveTabFromPath(router.pathname);

    return(
        <BottomNavigationUI
            activeTab = {activeTab}
            handleNavigation = {handleNavigation}
        >
        </BottomNavigationUI>
    )
}