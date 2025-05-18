import { MainChart__Wrapper } from "./MainChart.Styles";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from "react-chartjs-2";

// Chart.js 컴포넌트 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function MainChartUI(props){
    console.log(props.chartArr);
//     const [chartData,setChartData] = useState({
//         labels: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
//     datasets: [
//         {
//             label: '푼 문제 수',
//             data: [0,0,0,0,0,0,0],
//             borderColor: '#8979ff',
//             backgroundColor: 'rgba(75, 192, 192, 0.5)',
//             tension: 0,
//         },
//         {
//             label: '정답 수',
//             data: [0,0,0,0,0,0,0],
//             borderColor: '#ff928a',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             tension: 0,
//         }
//     ]
//     })

//     useEffect(() => {
//   if(props.chartArr !== null){
//     const dateArr = props.chartArr?.day.map((dat) => dat+"요일");
//     setChartData({
//       labels: dateArr,
//       datasets: [
//         {
//           label: '푼 문제 수',
//           data: props.chartArr?.total,
//           borderColor: '#8979ff',
//           backgroundColor: 'rgba(75, 192, 192, 0.5)',
//           tension: 0,
//         },
//         {
//           label: '정답 수',
//           data: props.chartArr?.correct,
//           borderColor: '#ff928a',
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//           tension: 0,
//         }
//       ]
//     });
//   }
// }, [props.chartArr]); // props.chartArr가 변경될 때만 이 효과가 실행됩니다


// 주간 문제 풀이 데이터 상태 관리(하드코딩딩)
const [chartData, setChartData] = useState({
    labels: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    datasets: [
        {
            label: '푼 문제 수',
            data: [12, 8, 15, 10, 7, 20, 14],
            borderColor: '#8979ff',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0,
        },
        {
            label: '정답 수',
            data: [10, 5, 12, 8, 6, 18, 10],
            borderColor: '#ff928a',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0,
        }
    ]
});

// 차트 옵션 설정
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true, // 사각형 대신 원형 포인트 사용
                pointStyle: 'round',  // 선 스타일의 범례
                boxWidth: 10,        // 범례 선의 길이
                boxHeight: 10,        // 범례 선의 높이/두께
                padding: 15,         // 범례 항목 간 간격
                font: {
                    size: 12
                }
            }    
        },
        title: {
            display: false,
            text: '주간 문제 풀이 통계',
            font: {
                size: 16
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const label = context.dataset.label || '';
                    return `${label}: ${context.parsed.y}개`;
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: false,
                text: '개수'
            },
            ticks: {
                precision: 0
            }
        },
        x: {
            title: {
                display: false,
                text: '요일'
            }
        }
    }
};

// 컴포넌트 마운트 시 데이터 가져오기 (API 연동 시 사용)
useEffect(() => {
    // 실제 프로젝트에서는 여기서 API 호출을 통해 데이터를 가져올 수 있습니다.
    // 예: fetchWeeklyData().then(data => setChartData(data));
}, []);

return(
    <MainChart__Wrapper>
        <div className="chart-container" style={{ height: '200px', width: '100%' }}>
            <Line data={chartData} options={options} />
        </div>
    </MainChart__Wrapper>
)
}