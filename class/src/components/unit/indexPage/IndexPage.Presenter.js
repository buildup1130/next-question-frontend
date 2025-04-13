import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import {
  Home__IconBar,
  Home__IconBar__Login,
  Home_CalMore_Image,
  Home__CalBar,
  Home__CalTitle,
  Home__CalMore,
} from "@/pages/styles";
import MainCalendarLogic from "../MainCalendar/MainCalendar.Container";
import UploadBoxLogic from "../UploadBox/UploadBox.Container";
import GenerateShelfLogic from "../GenerateShelf/GenerateShelf.Container";
import AttendanceCheckLogic from "../AttendanceCheck/AttendanceCheck.Container";

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
  numArr
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
        <img src="/image/Vector_user.png" onClick={onClickLogin} />
        <img src="/image/material-symbols_settings.png" />
        <Home__IconBar__Login>
          {!isAuthenticated
            ? "로그인이 필요합니다."
            : user.nickname + " 님 환영합니다."}
        </Home__IconBar__Login>
      </Home__IconBar>
      <UploadBoxLogic setFile={setFile} file={file} setIsCreated = {setIsCreated}></UploadBoxLogic>
      <AttendanceCheckLogic></AttendanceCheckLogic>
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
