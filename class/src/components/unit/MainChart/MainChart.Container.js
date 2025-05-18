import MainChartUI from "./MainChart.Presenter";

export default function MainChartLogic(props){

    return(
        <MainChartUI
            chartArr = {props.chartArr}
        ></MainChartUI>
    )
}