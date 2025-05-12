import {
  CheckedIcon,
  DownIcon,
  RefreshIcon,
  TrashCanIcon,
  XButton,
} from '@/utils/SvgProvider';
import {
  GenerateShelf__Container,
  GenerateShelf__Shelf,
  GenerateShelf__Shelf__Container,
  GenerateShelf__Shelf__Input,
  GenerateShelf__Shelf__Input__Button,
  GenerateShelf__Shelf__Input__Container,
  GenerateShelf__Shelf__QuestionContainer,
  GenerateShelf__Shelf__QuestionText,
  GenerateShelf__Shelf__QuestionTitle,
  GenerateShelf__Shelf__Select,
  GenerateShelf__Shelf__Select__Button,
  GenerateShelf__Shelf__submitButton,
  GenerateShelf__Shelf__Title,
  GenerateShelf__Shelf__Title__Button,
  GenerateShelf__Wrapper,
  GenerateShelf__Shelf__QuestionWrapper,
  GenerateShelf__Shelf__ButtonContainer,
  GenerateShelf__countbutton,
  GenerateShelf__countbuttonContainer,
  GenerateShelf__Shelf__Title__Text,
  GenerateShelf__Shelf__QuestionNum,
  GenerateShelf__Shelf__QuestionAnswer,
  GenerateShelf__Shelf__QuestionAnswerContainer,
  GenerateShelf__Shelf__QuestionHeader,
  GenerateShelf__Shelf__QuestionDeleteContainer,
  GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan,
  GenerateShelf__Shelf__QuestionDeleteContainer__XButton,
  GenerateShelf__type,
  GenerateShelf__typeContainer,
  GenerateShelf__typeElement,
  GenerateShelf__Shelf__Subtitle,
  GenerateShelf__Shelf__CountContainer,
  GenerateShelf__Shelf__Arrow,
  GenerateShelf__Shelf__Option,
  GenerateShelf__Shelf__OptionContainer,
  GenerateShelf__Shelf__SelectContainer,
  GenerateShelf__Shelf__StyledSelect,
} from './GenerateShelf.Styles';
import CustomSelectLogic from '../CustomSelect/CustomSelect.Container';
import { DocsIcon } from '@/utils/SvgProvider';
import { useState } from 'react';

import dynamic
 from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import loadingAnimation from '@/lotties/generate_loading.json';

export default function GenerateShelfUI(props) {
  return (
    <GenerateShelf__Wrapper>
      <GenerateShelf__Container>
        <GenerateShelf__Shelf>
          {!props.questionInfoArr && props.sequence === 1 ? (
            <LoadingModal></LoadingModal>
          ) : (
            <>
              {props.sequence === 0 ? (
                <TypeModal {...props} />
              ) : props.sequence === 1 ? (
                <QuestionModal {...props} />
              ) : props.sequence === 2 ? (
                <SavingModal {...props} />
              ) : (
                <div>문제가 저장되었습니다.</div>
              )}
            </>
          )}
        </GenerateShelf__Shelf>
      </GenerateShelf__Container>
    </GenerateShelf__Wrapper>
  );
}

//타입 선택 모달
const TypeModal = (props) => {
  return (
    <>
      <GenerateShelf__Shelf__Title>
        <GenerateShelf__Shelf__Title__Text>
          문제 생성하기
        </GenerateShelf__Shelf__Title__Text>
        <GenerateShelf__Shelf__Title__Button
          onClick={() => {
            props.setIsCreated(false);
          }}
        >
          X
        </GenerateShelf__Shelf__Title__Button>
      </GenerateShelf__Shelf__Title>
      <GenerateShelf__Shelf__Subtitle>문제 유형</GenerateShelf__Shelf__Subtitle>
      <GenerateShelf__typeContainer>
        {['객관식', '참/거짓', '주관식'].map((type, index) => (
          <GenerateShelf__type
            onClick={() => {
              props.onClickType(index);
            }}
            isSelected={props.selectedType.includes(index)}
          >
            <GenerateShelf__typeElement>
              <DocsIcon></DocsIcon>
              {type}
            </GenerateShelf__typeElement>
            {props.selectedType.includes(index) ? (
              <div style={{ color: '#a0a0a0' }}>
                <CheckedIcon></CheckedIcon>
              </div>
            ) : (
              <></>
            )}
          </GenerateShelf__type>
        ))}
      </GenerateShelf__typeContainer>
      <GenerateShelf__Shelf__CountContainer>
        <div>질문 수</div>
        <CustomSelectLogic
          options={props.numArr}
          defaultValue={5}
          onChange={(value) => {
            props.setQuestionCount(value);
          }}
        ></CustomSelectLogic>
      </GenerateShelf__Shelf__CountContainer>
      <GenerateShelf__Shelf__ButtonContainer>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.setIsCreated(false);
          }}
          style={{ backgroundColor: '#ffffff', color: '#111111' }}
        >
          취소
        </GenerateShelf__Shelf__submitButton>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.onCreateQuestion();
          }}
        >
          생성
        </GenerateShelf__Shelf__submitButton>
      </GenerateShelf__Shelf__ButtonContainer>
    </>
  );
};

//옵션 모달
const OptionModal = (props) => {
  return (
    <>
      <GenerateShelf__Shelf__Title>
        <GenerateShelf__Shelf__Title__Text>
          옵션
        </GenerateShelf__Shelf__Title__Text>
        <GenerateShelf__Shelf__Title__Button
          onClick={() => {
            props.setIsCreated(false);
          }}
        >
          X
        </GenerateShelf__Shelf__Title__Button>
      </GenerateShelf__Shelf__Title>
      <GenerateShelf__Shelf__Title>문제 수</GenerateShelf__Shelf__Title>
      <GenerateShelf__countbuttonContainer isSingle={props.numArr.length === 1}>
        {props.numArr.map((num, index) => (
          <GenerateShelf__countbutton
            key={index}
            style={
              props.questionCount === num
                ? {
                    backgroundColor: '#3b82f6',
                    color: 'white',
                  }
                : {
                    backgroundColor: '#e5e7eb',
                    color: 'black',
                  }
            }
            onClick={() => {
              props.setQuestionCount(num);
            }}
          >
            {num}
          </GenerateShelf__countbutton>
        ))}
      </GenerateShelf__countbuttonContainer>

      <GenerateShelf__Shelf__ButtonContainer>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.setSequence(0);
          }}
          style={{ backgroundColor: '#ffffff', color: '#111111' }}
        >
          이전
        </GenerateShelf__Shelf__submitButton>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.onCreateQuestion();
          }}
        >
          다음
        </GenerateShelf__Shelf__submitButton>
      </GenerateShelf__Shelf__ButtonContainer>
    </>
  );
};

//문제 모달
const QuestionModal = (props) => {
  return (
    <>
      <GenerateShelf__Shelf__Title>
        <GenerateShelf__Shelf__Title__Text>
          문제 확인
        </GenerateShelf__Shelf__Title__Text>
      </GenerateShelf__Shelf__Title>
      <GenerateShelf__Shelf__QuestionWrapper>
        {props.questionInfoArr?.map((info, index) => {
          const optArr = info.opt ? info.opt.split('|||') : [];

          return (
            <GenerateShelf__Shelf__QuestionContainer key={index}>
              <GenerateShelf__Shelf__QuestionHeader
                style={{ marginBottom: '8px' }}
              >
              <GenerateShelf__Shelf__QuestionTitle
              style={{fontWeight:700}}>
                Q{index + 1}
              </GenerateShelf__Shelf__QuestionTitle>
                <GenerateShelf__Shelf__QuestionDeleteContainer>
                  <GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan
                    isVisible={props.visibleTrashIndex === index}
                    onClick={() => {
                      props.onClickTrashCan(index);
                    }}
                  >
                    <TrashCanIcon></TrashCanIcon>
                  </GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan>
                  <GenerateShelf__Shelf__QuestionDeleteContainer__XButton
                    isVisible={props.visibleTrashIndex === index}
                    onClick={() => {
                      props.onClickDelete(index);
                    }}
                  >
                    <XButton
                      color='red'
                    ></XButton>
                  </GenerateShelf__Shelf__QuestionDeleteContainer__XButton>
                </GenerateShelf__Shelf__QuestionDeleteContainer>
              </GenerateShelf__Shelf__QuestionHeader>
              <GenerateShelf__Shelf__QuestionTitle
                style={{ marginBottom: '20px' }}
              >
                {info.name}
              </GenerateShelf__Shelf__QuestionTitle>
              <GenerateShelf__Shelf__QuestionAnswerContainer>
                {info.type === 'MULTIPLE_CHOICE' &&
                  optArr.map((optInfo, index) => {
                    const number = optInfo[0];
                    const subs = optInfo.slice(2);
                    return (
                      <GenerateShelf__Shelf__QuestionText>
                        <GenerateShelf__Shelf__QuestionNum
                          isAns={index === info.answer - 1}
                        >
                          {number}
                        </GenerateShelf__Shelf__QuestionNum>
                        <div>{subs}</div>
                      </GenerateShelf__Shelf__QuestionText>
                    );
                  })}
                {info.type === 'OX' && (
                  <>
                    <GenerateShelf__Shelf__QuestionText>
                      <GenerateShelf__Shelf__QuestionNum
                        isAns={info.answer === 'O'}
                      >
                        1
                      </GenerateShelf__Shelf__QuestionNum>
                      O
                    </GenerateShelf__Shelf__QuestionText>
                    <GenerateShelf__Shelf__QuestionText>
                      <GenerateShelf__Shelf__QuestionNum
                        isAns={info.answer === 'X'}
                      >
                        2
                      </GenerateShelf__Shelf__QuestionNum>
                      X
                    </GenerateShelf__Shelf__QuestionText>
                  </>
                )}
              </GenerateShelf__Shelf__QuestionAnswerContainer>
              {info.type === 'FILL_IN_THE_BLANK' && (
                <GenerateShelf__Shelf__QuestionAnswer>
                  {info.answer}
                </GenerateShelf__Shelf__QuestionAnswer>
              )}
            </GenerateShelf__Shelf__QuestionContainer>
          );
        })}
      </GenerateShelf__Shelf__QuestionWrapper>
      <GenerateShelf__Shelf__ButtonContainer>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.setIsCreated(false);
          }}
          style={{ backgroundColor: '#ffffff', color: '#111111' }}
        >
          취소
        </GenerateShelf__Shelf__submitButton>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.setSequence(2);
            props.setVisibleTrashIndex(null);
          }}
        >
          다음
        </GenerateShelf__Shelf__submitButton>
      </GenerateShelf__Shelf__ButtonContainer>
    </>
  );
};

//문제 저장 모달
const SavingModal = (props) => {
  return (
    <>
      <GenerateShelf__Shelf__Title>
        <GenerateShelf__Shelf__Title__Text>
          문제 저장
        </GenerateShelf__Shelf__Title__Text>
      </GenerateShelf__Shelf__Title>
      <GenerateShelf__Shelf__Container>
        <GenerateShelf__Shelf__Select
          value={props.savingWorkBook}
          onChange={(e) => {
            props.setSavingWorkBook(e.target.value);
          }}
        >
          <option value="">문제집을 선택해주세요.</option>
          {props.workBooks?.map((info, index) => (
            <option value={info.encryptedWorkBookId} key={index}>
              {info.name}
            </option>
          ))}
        </GenerateShelf__Shelf__Select>
        {/* <GenerateShelf__Shelf__Select__Button
                        onClick={() => {
                            if(props.isCreating){
                                props.setIsCreating(false)
                            }else{
                            props.setIsCreating(true)}
                        }}
                    >+</GenerateShelf__Shelf__Select__Button> */}
      </GenerateShelf__Shelf__Container>
      {/* {props.isCreating?
                    <GenerateShelf__Shelf__Input__Container>
                        <GenerateShelf__Shelf__Input
                            onChange={(e) => {props.HandleWorkBookName(e);
                            }}
                            placeholder="문제집명을 입력해주세요."
                        ></GenerateShelf__Shelf__Input>
                        <GenerateShelf__Shelf__Input__Button
                            onClick={() => {props.onCreateWorkBook()}}
                        >생성</GenerateShelf__Shelf__Input__Button>
                    </GenerateShelf__Shelf__Input__Container>
                    :
                    <></>} */}
      <GenerateShelf__Shelf__Input__Container>
        <GenerateShelf__Shelf__Input
          value={props.creatingName}
          onChange={(e) => {
            props.HandleWorkBookName(e);
          }}
          placeholder="문제집명을 입력해주세요."
          maxLength={17}
        ></GenerateShelf__Shelf__Input>
        <GenerateShelf__Shelf__Input__Button
          onClick={() => {
            props.onCreateWorkBook();
          }}
        >
          생성
        </GenerateShelf__Shelf__Input__Button>
      </GenerateShelf__Shelf__Input__Container>
      <GenerateShelf__Shelf__ButtonContainer>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.setSequence(1);
          }}
          style={{ backgroundColor: '#ffffff', color: '#111111' }}
        >
          이전
        </GenerateShelf__Shelf__submitButton>
        <GenerateShelf__Shelf__submitButton
          onClick={() => {
            props.onClickSubmit();
          }}
        >
          저장하기
        </GenerateShelf__Shelf__submitButton>
      </GenerateShelf__Shelf__ButtonContainer>
    </>
  );
};

const LoadingModal = () => {
  return (
    <div
      style={{
        height: '35vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie
          animationData={loadingAnimation}
          loop
          autoplay
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      </div>
      <div
        style={{
          marginTop: '8px',
          fontSize: '22px',
          textAlign: 'center',
          color: 'black',
        }}
      >
        문제를 생성 중이에요
      </div>

      
    </div>
  );
};

// // 커스텀 셀렉트트
// const CustomSelect = ({
//   options,
//   defaultValue,
//   onChange,
//   optionContainerStyle,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(
//     defaultValue || options[0]
//   );

//   const toggleSelect = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (option) => {
//     setSelectedValue(option);
//     setIsOpen(false);
//     if (onChange) onChange(option);
//   };

//   return (
//     <GenerateShelf__Shelf__SelectContainer onClick={toggleSelect}>
//       <GenerateShelf__Shelf__StyledSelect>
//         {selectedValue}
//         <GenerateShelf__Shelf__Arrow isOpen={isOpen}>
//           <DownIcon></DownIcon>
//         </GenerateShelf__Shelf__Arrow>
//       </GenerateShelf__Shelf__StyledSelect>
//       <GenerateShelf__Shelf__OptionContainer
//         isOpen={isOpen}
//         style={optionContainerStyle}
//       >
//         {options.map((option, index) => (
//           <GenerateShelf__Shelf__Option
//             key={index}
//             onClick={(e) => {
//               e.stopPropagation();
//               handleSelect(option);
//             }}
//           >
//             {option}
//           </GenerateShelf__Shelf__Option>
//         ))}
//       </GenerateShelf__Shelf__OptionContainer>
//     </GenerateShelf__Shelf__SelectContainer>
//   );
// };
