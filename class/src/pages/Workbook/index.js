import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";

import WorkbookLogic from "@/components/unit/Workbook/Workbook.Container";

export default function WorkbookPage() {
  return (
    <MainContainerLogic>
      <WorkbookLogic />
    </MainContainerLogic>
  );
}
