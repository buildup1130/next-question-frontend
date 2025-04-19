import {
  HomeIcon,
  BookIcon,
  CheckIcon,
  ShelfIcon,
  HistoryIcon,
} from "@/utils/SvgProvider";
import {
  NavContainer,
  Icon,
  NavItem,
  NavTitle,
} from "./BottomNavigation.Styles";

export default function BottomNavigationUI(props) {
  return (
    <NavContainer>
      {/* 홈 */}
      <NavItem
        active={props.activeTab === "home"}
        onClick={() => props.handleNavigation("/")}
      >
        <Icon>
          <HomeIcon></HomeIcon>
        </Icon>
        <NavTitle>홈</NavTitle>
      </NavItem>
      {/* 책장 */}
      <NavItem
        active={props.activeTab === "shelf"}
        onClick={() => props.handleNavigation("/BookShelf")}
      >
        <Icon>
          <ShelfIcon></ShelfIcon>
        </Icon>
        <NavTitle>책장</NavTitle>
      </NavItem>
      {/* 오답노트 */}
      <NavItem
        active={props.activeTab === "check"}
        onClick={() => props.handleNavigation("/WrongNote")}
      >
        <Icon>
          <CheckIcon></CheckIcon>
        </Icon>
        <NavTitle>오답노트</NavTitle>
      </NavItem>
      {/* 학습기록 */}
      <NavItem
        active={props.activeTab === "history"}
        onClick={() => props.handleNavigation("/history")}
      >
        <Icon>
          <HistoryIcon></HistoryIcon>
        </Icon>
        <NavTitle>학습기록</NavTitle>
      </NavItem>
    </NavContainer>
  );
}
