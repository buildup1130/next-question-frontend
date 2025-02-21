import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { Home__CalBar, Home__CalMore, Home__CalTitle, Home__IconBar, Home_CalMore_Image } from "./styles";
import MainCarouselLogic from "@/components/unit/MainCarousel/MainCarousel.Container";
import MainCalendarLogic from "@/components/unit/MainCalendar/MainCalendar.Container";

export default function Home() {
  
  return (
    <MainContainerLogic>
      <Home__IconBar>
        <img src = "/image/Vector_user.png"/>
        <img src = "/image/material-symbols_settings.png"/>
      </Home__IconBar>
      <MainCarouselLogic></MainCarouselLogic>
      <Home__CalBar>
        <Home__CalTitle>캘린더</Home__CalTitle>
        <Home__CalMore><>더보기</><Home_CalMore_Image src = '/image/Vector_next.png'></Home_CalMore_Image></Home__CalMore>
      </Home__CalBar>
      <MainCalendarLogic></MainCalendarLogic>
    </MainContainerLogic>
  );
}
