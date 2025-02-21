import {CarouselContainer, SlidesContainer, Slide,Content,Image,Dot,Dots, ContentTitle,ContentDescription} from "./MainCarousel.Styles"


export default function MainCarouselUI(props){
        
    return (
        <>
        <CarouselContainer {...props.handlers}>
          <SlidesContainer currentSlide={props.currentSlide}>
            {props.slides.map((slide, index) => (
              <Slide key={index} onClick={(e) => {props.onClickSlide(slide.url,e)}}>
                <Content>
                  <ContentTitle>{slide.title}</ContentTitle>
                  <ContentDescription>{slide.description}</ContentDescription>
                </Content>
                <Image src={slide.image} alt={slide.title} />
              </Slide>
            ))}
          </SlidesContainer>
        </CarouselContainer>
        <Dots>
            {props.slides.map((_, index) => (
              <Dot 
                key={index}
                active={props.currentSlide === index}
                onClick={() => props.setCurrentSlide(index)}
              />
            ))}
          </Dots>
        </>
      );
}