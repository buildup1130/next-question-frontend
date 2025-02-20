import styled from "@emotion/styled"

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  margin-top:20px;
  border: 1px solid #d9d9d9;

  background: white;
  box-shadow: 0 16px 24px rgba(0,0,0,0.1);

  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag: none;
`;

export const SlidesContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(-${props => props.currentSlide * 100}%);
  width:100%;
`;

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px;
`;

export const Content = styled.div`
    height:100%;
    margin-top:28px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`;

export const ContentTitle = styled.div`
    font-size:24px;
    color:#111111;
    line-height:24px;
    font-weight:700;
`

export const ContentDescription = styled.div`
    margin-top:10px;

    font-size:14px;
    color:#767676;
    line-height:22px;
`

export const Image = styled.img`
  width: 110px;
  height: 110px;

 /* 이미지 드래그 방지 속성들 */
 -webkit-user-drag: none;  // Chrome, Safari
  -khtml-user-drag: none;   // 구형 브라우저
  -moz-user-drag: none;     // Firefox
  -o-user-drag: none;       // Old Opera         // 표준
  pointer-events: none;     // 이미지 위에서의 마우스 이벤트 방지
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 6px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active ? '#007AFF' : '#dbdbdb'};
  cursor: pointer;
`;