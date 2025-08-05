import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import {
  Home__IconBar,
  Home__IconBar__Login,
  Home_CalMore_Image,
  Home__CalBar,
  Home__CalTitle,
  Home__CalMore,
  Home__IconBar__LoginBtn,
  Home__IconBar__Logo,
  Home__BlurContainer,
  Home__LoginButton,
  Home__LoginMessage,
  Home__LoginOverlay,
  Home__StatButton,
  Home__StatContainer,
  Home__StatTitle,
} from "./IndexPage.Styles";
import UploadBoxLogic from "../UploadBox/UploadBox.Container";
import GenerateShelfLogic from "../GenerateShelf/GenerateShelf.Container";
import AttendanceCheckLogic from "../AttendanceCheck/AttendanceCheck.Container";
import MainCalendarLogic from "../MainCalendar/MainCalendar.Container";
import MainChartLogic from "../MainChart/MainChart.Container";
import { BookIcon, DownIcon } from "@/utils/SvgProvider";

export default function IndexPageUI({
  onClickLogin,
  user,
  isAuthenticated,
  isCreated,
  setFile,
  file,
  setIsCreated,
  questionArr,
  questionInfoArr,
  numArr,
  checkArr,
  chartArr,
}) {
  console.log(chartArr);
  return (
    <MainContainerLogic>
      {isCreated && file && (
        <GenerateShelfLogic
          setIsCreated={setIsCreated}
          // isQuestionArr={questionArr !== undefined && questionArr.length > 0}
          questionArr={questionArr}
          questionInfoArr={questionInfoArr}
          numArr={numArr}
          file={file}
          setFile={setFile}
        ></GenerateShelfLogic>
      )}
      <Home__IconBar>
        <Home__IconBar__Login>
          {!isAuthenticated
            ? "로그인이 필요합니다."
            : user.nickname + "님 환영합니다."}
          <Home__IconBar__LoginBtn onClick={onClickLogin}>
            {!isAuthenticated ? "로그인" : "로그아웃"}
          </Home__IconBar__LoginBtn>
        </Home__IconBar__Login>
        <Home__IconBar__Logo>
          <img src="/image/Logo.png" style={{ height: "50px" }}></img>
        </Home__IconBar__Logo>
      </Home__IconBar>
      <UploadBoxLogic
        setFile={setFile}
        file={file}
        setIsCreated={setIsCreated}
      ></UploadBoxLogic>
      {/* 로그인 시 보이는 학습분석 */}
      {isAuthenticated && (
        <>
          <Home__CalBar>
            <Home__CalTitle>주간 학습 분석</Home__CalTitle>
          </Home__CalBar>
          <MainChartLogic chartArr={chartArr} />
          <AttendanceCheckLogic checkArr={checkArr} />
          {/* <Home__StatContainer>
            <Home__StatButton>
              <Home__StatTitle>
                <BookIcon></BookIcon>최근에 틀렸던 문제
              </Home__StatTitle>
              <div style={{ transform: "rotate(-90deg)" }}>
                <DownIcon></DownIcon>
              </div>
            </Home__StatButton>
            <Home__StatButton>
              <Home__StatTitle>
                <BookIcon></BookIcon>여러번 틀렸던 문제
              </Home__StatTitle>
              <div style={{ transform: "rotate(-90deg)" }}>
                <DownIcon></DownIcon>
              </div>
            </Home__StatButton>
            <Home__StatButton>
              <Home__StatTitle>
                <BookIcon></BookIcon>최근 학습한 문제
              </Home__StatTitle>
              <div style={{ transform: "rotate(-90deg)" }}>
                <DownIcon></DownIcon>
              </div>
            </Home__StatButton>
          </Home__StatContainer> */}
        </>
      )}
      {/* 비로그인 시 보이는 학습분석 */}
      {!isAuthenticated && (
        <>
          <div
            style={{ position: "relative", width: "100%", maxWidth: "500px" }}
          >
            <Home__BlurContainer>
              <Home__CalBar>
                <Home__CalTitle>주간 학습 분석</Home__CalTitle>
              </Home__CalBar>
              <MainChartLogic />
              <AttendanceCheckLogic checkArr={checkArr} />
              {/* <Home__StatContainer>
                  <Home__StatButton><Home__StatTitle><BookIcon></BookIcon>최근에 틀렸던 문제</Home__StatTitle><div style={{transform:"rotate(-90deg)"}}><DownIcon></DownIcon></div></Home__StatButton>
                  <Home__StatButton><Home__StatTitle><BookIcon></BookIcon>여러번 틀렸던 문제</Home__StatTitle><div style={{transform:"rotate(-90deg)"}}><DownIcon></DownIcon></div></Home__StatButton>
                  <Home__StatButton><Home__StatTitle><BookIcon></BookIcon>최근 학습한 문제</Home__StatTitle><div style={{transform:"rotate(-90deg)"}}><DownIcon></DownIcon></div></Home__StatButton>
                </Home__StatContainer> */}
            </Home__BlurContainer>
            <Home__LoginOverlay>
              <Home__LoginMessage>로그인 후 이용 가능합니다</Home__LoginMessage>
              <Home__LoginButton onClick={onClickLogin}>
                로그인하기
              </Home__LoginButton>
            </Home__LoginOverlay>
          </div>
        </>
      )}
      {/* <Home__CalBar><Home__CalTitle>주간 학습 분석</Home__CalTitle></Home__CalBar>
      <MainChartLogic></MainChartLogic>
      <AttendanceCheckLogic
        checkArr={checkArr}
      ></AttendanceCheckLogic> */}
      {/* <Home__CalBar>
        <Home__CalTitle>캘린더</Home__CalTitle>
        <Home__CalMore>
          <>더보기</>
          <Home_CalMore_Image src="/image/Vector_next.png"></Home_CalMore_Image>
        </Home__CalMore>
      </Home__CalBar>
      <MainCalendarLogic></MainCalendarLogic> */}
    </MainContainerLogic>
  );
}
