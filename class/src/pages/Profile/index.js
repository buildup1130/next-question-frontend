import ProfileLogic from "@/components/unit/Profile/Profile.Container";
import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";

export default function ProfilePage() {
  return (
    <MainContainerLogic>
      <ProfileLogic />
    </MainContainerLogic>
  );
}
