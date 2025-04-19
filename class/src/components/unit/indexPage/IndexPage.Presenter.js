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
} from "./IndexPage.Styles"
import UploadBoxLogic from "../UploadBox/UploadBox.Container";
import GenerateShelfLogic from "../GenerateShelf/GenerateShelf.Container";
import AttendanceCheckLogic from "../AttendanceCheck/AttendanceCheck.Container";
import MainCalendarLogic from "../MainCalendar/MainCalendar.Container";

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
  checkArr
}) {
  return (
    <MainContainerLogic>
      {(isCreated && file) &&(
        <GenerateShelfLogic
          setIsCreated={setIsCreated}
          // isQuestionArr={questionArr !== undefined && questionArr.length > 0}
          questionArr={questionArr}
          questionInfoArr={questionInfoArr}
          numArr = {numArr}
          file = {file}
          setFile = {setFile}
        ></GenerateShelfLogic>
      )}
      <Home__IconBar>
        <Home__IconBar__Login>
          {!isAuthenticated
            ? "로그인이 필요합니다."
            : user.nickname + " 님 환영합니다."}
            <Home__IconBar__LoginBtn
              onClick={onClickLogin}
            >{!isAuthenticated?"로그인":"로그아웃"}</Home__IconBar__LoginBtn>
        </Home__IconBar__Login>
        <Home__IconBar__Logo>LOGO</Home__IconBar__Logo>
      </Home__IconBar>
      <UploadBoxLogic setFile={setFile} file={file} setIsCreated = {setIsCreated}></UploadBoxLogic>
      <AttendanceCheckLogic
        checkArr={checkArr}
      ></AttendanceCheckLogic>
      <Home__CalBar>
        <Home__CalTitle>캘린더</Home__CalTitle>
        <Home__CalMore>
          <>더보기</>
          <Home_CalMore_Image src="/image/Vector_next.png"></Home_CalMore_Image>
        </Home__CalMore>
      </Home__CalBar>
      <MainCalendarLogic></MainCalendarLogic>
    </MainContainerLogic>
  );
}
