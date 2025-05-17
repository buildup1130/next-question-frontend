import React from "react";
import { format, subDays } from "date-fns";

import {
  Wrapper,
  Header,
  FullWidthWrapper,
  GraySection,
  UserCard,
  UserText,
  Nickname,
  UserId,
  ReportWrapper,
  ReportTitle,
  ReportGrid,
  ReportCard,
  ReportContent,
  ReportRow,
  LargeReportCard,
  Label,
  Value,
  SummaryCard,
  SummaryHeader,
  SummaryLabel,
  SummaryStats,
  SummaryValue,
  SummaryUnit,
  SummaryItem,
  SummaryDesc,
  HeatmapWrapper,
  CustomHeatmapGrid,
  CustomHeatmapBox,
  IconWrapper,
  BoxWrapper,
  BoxLabelTop,
} from "./Profile.Styles";

import {
  UserIcon,
  IconTarget,
  IconCheck,
  IconFire,
  IconBookMark,
} from "@/utils/SvgProvider";

export default function ProfileUI({
  nickname,
  userId,
  averageAccuracy,
  todayStudyCount,
  showLabel,
  streak,
  totalSolved,
  maxStreak,
  avgPerDay,
  heatmapData,
}) {
  // 색상 클래스 분기
  const getLevelClass = (count) => {
    if (!count || count === 0) return "color-empty";
    if (count <= 1) return "color-scale-1";
    if (count <= 2) return "color-scale-2";
    if (count <= 3) return "color-scale-3";
    if (count <= 4) return "color-scale-4";
    return "color-scale-5";
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const year = today.getFullYear();
  const month = today.getMonth();

  const maxDays = 31;
  const fixedDates = Array.from({ length: maxDays }, (_, i) =>
    format(new Date(year, month, i + 1), "yyyy-MM-dd")
  );

  const heatmapMap = new Map(
    heatmapData.map((item) => {
      const localDate = new Date(item.date);
      localDate.setHours(localDate.getHours() + 9);
      const kstDateStr = format(localDate, "yyyy-MM-dd");
      return [kstDateStr, item.count];
    })
  );

  return (
    <FullWidthWrapper>
      <Header>프로필</Header>
      <GraySection>
        <Wrapper>
          {/* 유저 카드 */}
          <UserCard>
            <UserIcon />
            <UserText>
              <Nickname>{nickname}</Nickname>
              <UserId>{userId}</UserId>
            </UserText>
          </UserCard>

          {/* 리포트 */}
          <ReportWrapper>
            <ReportTitle>나의 학습 리포트</ReportTitle>
            <ReportGrid>
              <LargeReportCard>
                <ReportContent>
                  <IconWrapper>
                    <IconTarget />
                  </IconWrapper>
                  <Label>평균 정답률</Label>
                  <Value>{averageAccuracy}%</Value>
                </ReportContent>
              </LargeReportCard>

              <ReportRow>
                <ReportCard>
                  <ReportContent>
                    <IconWrapper>
                      <IconCheck />
                    </IconWrapper>
                    <Label>오늘의 학습</Label>
                    <Value>{todayStudyCount}개</Value>
                  </ReportContent>
                </ReportCard>

                <ReportCard>
                  <ReportContent>
                    <IconWrapper>
                      <IconFire />
                    </IconWrapper>
                    <Label>최장 출석 기록</Label>
                    <Value>{maxStreak ?? 0}일</Value>
                  </ReportContent>
                </ReportCard>
              </ReportRow>
            </ReportGrid>
          </ReportWrapper>

          {/* 학습 요약 + 커스텀 Heatmap */}
          <SummaryCard>
            <SummaryHeader>
              <IconWrapper>
                <IconBookMark />
              </IconWrapper>
              <SummaryLabel>학습 요약</SummaryLabel>
            </SummaryHeader>

            <SummaryStats>
              <SummaryItem>
                <SummaryValue>
                  <span>{totalSolved}</span>
                  <SummaryUnit>개</SummaryUnit>
                </SummaryValue>
                <SummaryDesc>이번 달 풀이</SummaryDesc>
              </SummaryItem>

              <SummaryItem>
                <SummaryValue>
                  <span>{maxStreak}</span>
                  <SummaryUnit>일</SummaryUnit>
                </SummaryValue>
                <SummaryDesc>연속 출석일</SummaryDesc>
              </SummaryItem>

              <SummaryItem>
                <SummaryValue>
                  <span>{avgPerDay}</span>
                  <SummaryUnit>/일</SummaryUnit>
                </SummaryValue>
                <SummaryDesc>평균 문제 풀이</SummaryDesc>
              </SummaryItem>
            </SummaryStats>

            <HeatmapWrapper>
              <div
                style={{
                  fontSize: "14px",
                  marginBottom: "24px",
                  marginLeft: "17px",
                  color: "#868686",
                }}
              >
                {format(today, "M")}월
              </div>

              <CustomHeatmapGrid>
                {fixedDates.map((date, i) => {
                  const count = heatmapMap.get(date) || 0;
                  const isToday = date === format(today, "yyyy-MM-dd");

                  return (
                    <BoxWrapper key={date}>
                      {[0, 4, 9].includes(i) && (
                        <BoxLabelTop>
                          {i === 0
                            ? "1일"
                            : i === 4
                            ? "5일"
                            : i === 9
                            ? "10일"
                            : ""}
                        </BoxLabelTop>
                      )}
                      <CustomHeatmapBox
                        className={`${getLevelClass(count)} ${
                          isToday ? "today" : ""
                        }`}
                        title={`${date}: ${count}개`}
                      />
                    </BoxWrapper>
                  );
                })}
              </CustomHeatmapGrid>
            </HeatmapWrapper>
          </SummaryCard>
        </Wrapper>
      </GraySection>
    </FullWidthWrapper>
  );
}
