import next from "next";
import MainCarouselUI from "./MainCarousel.Presenter";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";

export default function MainCarouselLogic(props){
const [currentSlide, setCurrentSlide] = useState(0);
const [touchStartTime, setTouchStartTime] = useState(0);
const router = useRouter();
        
        const slides = [
          {
            title: '데일리 문제',
            description: '오늘의 문제를 풀어보아요.문제는 오답 문제, 내가 보유한 문제, 추천 문제 중 무작위로 제공됩니다.',
            image: '/image/cat.png',
            url:'/daily'
          },
          {
            title: '문제 생성',
            description: '두 번째 슬라이드입니다.',
            image: '/image/cat.png',
            url:'/generate'
          },
          {
            title: '슬라이드 3',
            description: '세 번째 슬라이드입니다.',
            image: '/image/cat.png',
            url:''   
          },
        ];
      
        const nextSlide = () => {
          setCurrentSlide(prev => 
            prev === slides.length - 1 ? 0 : prev + 1
          );
        };
      
        const prevSlide = () => {
          setCurrentSlide(prev => 
            prev === 0 ? slides.length - 1 : prev - 1
          );
        };
      
        const handlers = useSwipeable({
          onSwipedLeft: () => nextSlide(),
          onSwipedRight: () => prevSlide(),
          onTouchStartOrOnMouseDown: () => {  //터치 시작 시 발생하는 이벤트
            setTouchStartTime(new Date().getTime());
          },
          trackMouse: true,
          preventDefaultTouchmoveEvent: true,
          trackTouch: true,
          delta: 10,          // 최소 스와이프 거리
          rotationAngle: 0,   // 회전 각도 설정
          swipeDuration: 500, // 스와이프 지속 시간
        });

        const onClickSlide = (url,e) =>{
          const touchEndTime = new Date().getTime();
          const touchDuration = touchEndTime - touchStartTime;
        
          // 터치 지속 시간이 120ms 미만일 때만 클릭으로 간주
          if (touchDuration < 120) {
              router.push(url);
          }
        }

    return(
        <MainCarouselUI
            currentSlide = {currentSlide}
            setCurrentSlide = {setCurrentSlide}
            slides = {slides}
            nextSlide = {nextSlide}
            prevSlide = {prevSlide}
            handlers = {handlers}
            onClickSlide = {onClickSlide}
        ></MainCarouselUI>
    )
}