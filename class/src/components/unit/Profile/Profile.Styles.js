import styled from "styled-components";

export const FullWidthWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 0px;
  box-sizing: border-box;
`;

export const GraySection = styled.div`
  background-color: #f5f5f5;
  padding-top: 16px;
  padding-bottom: 80px;
  min-height: 100%;
`;

export const Wrapper = styled.div`
  padding: 16px;
`;

export const Header = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #000000;
  font-size: 18px;
  margin-bottom: 12px;
  margin-left: 10px;
`;

export const UserCard = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const UserText = styled.div`
  margin-left: 12px;
`;

export const Nickname = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const UserId = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ReportWrapper = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 0 0 16px 0;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const ReportTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  text-align: center;
  color: #666;
`;

export const ReportGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ReportRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-left: 10px;
`;

export const ReportCard = styled.div`
  background: #ffffff;
  padding: 12px;
  border-radius: 10px;
  flex: 1;

  display: flex;
  align-items: center;
`;

export const LargeReportCard = styled(ReportCard)`
  flex: 1 1 100%;
  min-height: 120px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #515151;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-top: 4px;
`;

export const SummaryCard = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-sizing: border-box;
`;

export const SummaryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-left: 10px;
`;

export const SummaryLabel = styled.div`
  font-size: 12px;
  color: #515151;
`;

export const SummaryStats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const SummaryUnit = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #999;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SummaryValue = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #808fff;
`;
export const SummaryDesc = styled.div`
  font-size: 12px;
  color: #17171b;
  margin-top: 3px;
`;

export const HeatmapWrapper = styled.div`
  margin-top: 8px;
`;

export const HeatmapContainer = styled.div`
  margin-top: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CustomHeatmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 6px;
  width: 100%;
  max-width: 100%;
  padding: 0 16px;
`;

export const CustomHeatmapBox = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 6px;
`;

export const XAxisLabelRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin-top: 6px;
`;

export const XAxisLabel = styled.div`
  font-size: 14px;
  color: #868686;
  text-align: center;
`;

export const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxLabelTop = styled.div`
  position: absolute;
  top: -16px;
  font-size: 11px;
  color: #868686;
  text-align: center;
  width: 100%;
`;
