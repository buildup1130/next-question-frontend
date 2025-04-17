import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";

import BookShelfLogic from "@/components/common/BookShelf/BookShelf.Container";

export default function BookShelf() {
  return (
    <MainContainerLogic>
      {" "}
      <BookShelfLogic></BookShelfLogic>
    </MainContainerLogic>
  );
}
