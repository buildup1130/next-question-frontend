import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { Home__CalBar, Home__CalMore, Home__CalTitle, Home__IconBar, Home__IconBar__Login, Home_CalMore_Image } from "./styles";
import MainCarouselLogic from "@/components/unit/MainCarousel/MainCarousel.Container";
import MainCalendarLogic from "@/components/unit/MainCalendar/MainCalendar.Container";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";

export default function Home() {  
  const router = useRouter();
  const {user, isAuthenticated} = useAuth();

  return (
    <MainContainerLogic>
      <Home__IconBar>
        <img src = "/image/Vector_user.png"
          onClick={() => {
            router.push("Login");
          }}
        />
        <img src = "/image/material-symbols_settings.png"/>
        <Home__IconBar__Login>
          {!isAuthenticated? "로그인이 필요합니다.":user.nickname+" 님 환영합니다."}
        </Home__IconBar__Login>
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
