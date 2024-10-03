// Carousel.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw; /* Adjust as needed */
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translate}%) ;
`;

const Slide = styled.div`
  min-width: ${props => props.cardSize || '300px'};
  flex: 0 0 auto;
  margin: 0 10px; /* Adjust for spacing between cards */
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
  ${props => (props.left ? 'left: 10px;' : 'right: 10px;')}
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'black' : 'lightgray')};
  margin: 0 5px;
  cursor: pointer;
`;

const CustomCarousel = ({
  slides,
  autoplay = false,
  slideTime = 3000,
  showArrows = true,
  showDots = true,
  cardSize = '300px',
  continuous = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(nextSlide, slideTime);
    }
    return () => clearInterval(timer);
  }, [autoplay, slideTime]);

  return (
    <CarouselContainer>
      <SlideWrapper translate={-currentIndex * (100 / totalSlides)}>
        {slides.map((slide, index) => (
          <Slide key={index} cardSize={cardSize}>
            {slide}
          </Slide>
        ))}
      </SlideWrapper>
      {showArrows && (
        <>
          <Arrow left onClick={prevSlide}>❮</Arrow>
          <Arrow onClick={nextSlide}>❯</Arrow>
        </>
      )}
      {showDots && (
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

export default CustomCarousel;
