import { DocsIcon } from "@/utils/SvgProvider";
import {
  BookShelfQuestion__Container,
  BookShelfQuestion__CountContainer,
  BookShelfQuestion__Input,
  BookShelfQuestion__isTestButton,
  BookShelfQuestion__Modal,
  BookShelfQuestion__submitButton,
  BookShelfQuestion__SubTitle,
  BookShelfQuestion__Title,
  BookShelfQuestion__Wrapper,
  CurrentValue,
  Progress,
  ProgressBarContainer,
  ProgressWrapper,
  ValuesContainer,
  BookShelfQuestion__CloseButtonContainer,
  BookShelfQuestion__CloseButton,
  BookShelfQuestion__type,
  BookShelfQuestion__typeContainer,
  BookShelfQuestion__typeElement,
  BookShelfQuestion__typeCount,
  BookShelfQuestion__count,
} from "./BookShelfQuestion.Styles";

export default function BookShelfQuestionUI(props) {
  return (
    <BookShelfQuestion__Wrapper>
      <BookShelfQuestion__Container>
        <BookShelfQuestion__Modal>
          {/* 닫기 버튼 추가 */}
          <BookShelfQuestion__CloseButtonContainer>
            <BookShelfQuestion__CloseButton onClick={props.onClose}>
              ✖
            </BookShelfQuestion__CloseButton>
          </BookShelfQuestion__CloseButtonContainer>

          <BookShelfQuestion__Title>옵션</BookShelfQuestion__Title>

          <BookShelfQuestion__SubTitle>문제 유형</BookShelfQuestion__SubTitle>
          {/* <ProgressBar value={props.count} max={props.curBook.items} />

          <BookShelfQuestion__CountContainer>
            <BookShelfQuestion__Input
              type="number"
              min="1"
              max={props.curBook.items}
              value={props.count}
              onChange={props.handleChange}
            />
            문제
          </BookShelfQuestion__CountContainer> */}
          <BookShelfQuestion__typeContainer>
            {[
              { type: "객관식", count: props.typeNum?.multipleChoice },
              { type: "참/거짓", count: props.typeNum?.ox },
              { type: "주관식", count: props.typeNum?.fillInTheBlank },
            ].map((obj, index) => (
              <BookShelfQuestion__type
                onClick={() => {
                  props.onClickType(index);
                }}
                isSelected={props.selectedType.includes(index)}
              >
                <BookShelfQuestion__typeElement>
                  <DocsIcon></DocsIcon>
                  {obj.type}
                </BookShelfQuestion__typeElement>
                <BookShelfQuestion__typeCount>
                  {obj.count != null ? obj.count : ""}개
                </BookShelfQuestion__typeCount>
              </BookShelfQuestion__type>
            ))}
          </BookShelfQuestion__typeContainer>
          <BookShelfQuestion__count></BookShelfQuestion__count>
          <BookShelfQuestion__CountContainer>
            <div>모의고사 모드</div>
            <BookShelfQuestion__isTestButton
              type="checkbox"
              onClick={() =>
                props.isTest ? props.setIsTest(false) : props.setIsTest(true)
              }
              isTest={props.isTest}
            />
          </BookShelfQuestion__CountContainer>

          <BookShelfQuestion__submitButton onClick={props.onClickLearning}>
            학습하기
          </BookShelfQuestion__submitButton>
        </BookShelfQuestion__Modal>
      </BookShelfQuestion__Container>
    </BookShelfQuestion__Wrapper>
  );
}

const ProgressBar = ({ value, max }) => {
  return (
    <div style={{ width: "100%" }}>
      <ProgressWrapper>
        <CurrentValue value={value} max={max}>
          {value}
        </CurrentValue>
        <ProgressBarContainer>
          <Progress value={value} max={max} />
        </ProgressBarContainer>
        <ValuesContainer>
          <span>0</span>
          <span>{max}</span>
        </ValuesContainer>
      </ProgressWrapper>
    </div>
  );
};
