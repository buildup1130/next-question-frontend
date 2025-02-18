import next from "next";
import MainCarouselUI from "./MainCarousel.Presenter";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function MainCarouselLogic(){
const [currentSlide, setCurrentSlide] = useState(0);
        
        const slides = [
          {
            title: '데일리 문제',
            description: '오늘의 문제를 풀어보아요.문제는 오답 문제, 내가 보유한 문제, 추천 문제 중 무작위로 제공됩니다.',
            image: '/image/cat.png'
          },
          {
            title: '슬라이드 2',
            description: '두 번째 슬라이드입니다.',
            image: '/image/cat.png'
          },
          {
            title: '슬라이드 3',
            description: '세 번째 슬라이드입니다.',
            image: '/image/cat.png'
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
          trackMouse: true,
          preventDefaultTouchmoveEvent: true,
          trackTouch: true,
          delta: 10,          // 최소 스와이프 거리
          rotationAngle: 0,   // 회전 각도 설정
          swipeDuration: 500, // 스와이프 지속 시간
        });




    return(
        <MainCarouselUI
            currentSlide = {currentSlide}
            slides = {slides}
            nextSlide = {nextSlide}
            prevSlide = {prevSlide}
            handlers = {handlers}
        ></MainCarouselUI>
    )
}