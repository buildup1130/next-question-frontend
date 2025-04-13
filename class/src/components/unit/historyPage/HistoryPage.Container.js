import { useRouter } from "next/router";
import HistoryPageUI from "./HistoryPage.Presenter";
import { fetchHistories } from "@/utils/StatisticManager";
import { useAuth } from "@/utils/AuthContext";
import { useState,useEffect } from "react";

export default function HistoryPageLogic(){
    const router = useRouter();

    const {isAuthenticated,token} = useAuth();

    const [histories,setHistories] = useState();

    const onClickBack = () => {
        router.back();
    }

    useEffect(
        () => {
        if(isAuthenticated){
            const response = fetchHistories(token).then(response => {  
            setHistories(response);
            });
        }
        },[token]
    );

    return <HistoryPageUI
       onClickBack={onClickBack}
       histories={histories}
    ></HistoryPageUI>
}