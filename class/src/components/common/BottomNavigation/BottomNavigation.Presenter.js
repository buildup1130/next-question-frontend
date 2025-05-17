import {
  HomeIcon,
  BookIcon,
  CheckIcon,
  ShelfIcon,
  ProfileIcon,
} from "@/utils/SvgProvider";
import {
  NavContainer,
  Icon,
  NavItem,
  NavTitle,
} from "./BottomNavigation.Styles";

import { useState } from "react";

export default function BottomNavigationUI(props) {
  const [isHover, setIsHover] = useState(null);

  const renderIcon = (index, IconComponent) => {
    const iconSize = index === isHover ? 28 : 24;
    return <IconComponent size={iconSize} />;
  };

  return (
    <NavContainer>
      {/* 홈 */}
      <NavItem
        active={props.activeTab === "home"}
        onClick={() => props.handleNavigation("/")}
        onMouseOver={() => {
          setIsHover(0);
        }}
        onMouseOut={() => {
          setIsHover(null);
        }}
      >
        <Icon>
          {/* <HomeIcon></HomeIcon> */}
          {renderIcon(0, HomeIcon)}
        </Icon>
        <NavTitle>홈</NavTitle>
      </NavItem>
      {/* 책장 */}
      <NavItem
        active={props.activeTab === "shelf"}
        onClick={() => props.handleNavigation("/BookShelf")}
        onMouseOver={() => {
          setIsHover(1);
        }}
        onMouseOut={() => {
          setIsHover(null);
        }}
      >
        <Icon>
          {/* <ShelfIcon></ShelfIcon> */}
          {renderIcon(1, ShelfIcon)}
        </Icon>
        <NavTitle>책장</NavTitle>
      </NavItem>
      {/* 오답노트 */}
      <NavItem
        active={props.activeTab === "check"}
        onClick={() => props.handleNavigation("/WrongNote")}
        onMouseOver={() => {
          setIsHover(2);
        }}
        onMouseOut={() => {
          setIsHover(null);
        }}
      >
        <Icon>
          {/* <CheckIcon></CheckIcon> */}
          {renderIcon(2, CheckIcon)}
        </Icon>
        <NavTitle>오답노트</NavTitle>
      </NavItem>
      {/* 프로필 */}
      <NavItem
        active={props.activeTab === "Profile"}
        onClick={() => props.handleNavigation("/Profile")}
        onMouseOver={() => {
          setIsHover(3);
        }}
        onMouseOut={() => {
          setIsHover(null);
        }}
      >
        <Icon>
          {/* <HistoryIcon></HistoryIcon> */}
          {renderIcon(3, ProfileIcon)}
        </Icon>
        <NavTitle>프로필</NavTitle>
      </NavItem>
    </NavContainer>
  );
}
