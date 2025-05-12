import { useRouter } from "next/router";
import BottomNavigationUI from "./BottomNavigation.Presenter";

export default function BottomNavigationLogic() {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (router.pathname === path) {
      router.replace(path);
      router.reload();
    } else {
      router.push(path);
    }
  };

  // URL 경로에 따라 activeTab 결정
  const getActiveTabFromPath = (path) => {
    if (path === "/") return "home";
    if (path.includes("/BookShelf")) return "shelf";
    if (path.includes("/Workbook")) return "shelf";
    if (path.includes("/WrongNote")) return "check";
    if (path.includes("/WrongWorkbook")) return "check";
    if (path.includes("/history")) return "history";
    return "home";
  };

  const activeTab = getActiveTabFromPath(router.pathname);

  return (
    <BottomNavigationUI
      activeTab={activeTab}
      handleNavigation={handleNavigation}
    ></BottomNavigationUI>
  );
}
