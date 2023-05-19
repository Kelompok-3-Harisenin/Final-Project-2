import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/index.css';

function carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (index) => {
        setCurrentSlide(index);
    };

    const getSlideClassName = (index) => {
        if (index === currentSlide) {
          return 'slide active';
        } else if (index < currentSlide) {
          return 'slide enter';
        } else {
          return 'slide leave';
        }
      };

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
        }, 3000); // Mengubah slide setiap 3 detik
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Carousel
      selectedItem={currentSlide}
      onChange={onChange}
      showStatus={false}
      showThumbs={false}
      transitionTime={1000} // Waktu transisi dalam milidetik
      showIndicators={true}
      infiniteLoop
      renderThumbs={() => null}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-prev">
            &#8249;
          </button>
        )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-next">
          &#8250;
        </button>
      )
    }
      >
        <div className={getSlideClassName(0)}>
          <img width={'750px'}height={'400px'} src='assets/Carousel/img-carousel1.jpeg' alt="Slide 1" />
        </div>
        <div className={getSlideClassName(1)}>
          <img width={'750px'}height={'400px'} src='assets/Carousel/img-carousel2.jpeg' alt="Slide 2" />
        </div>
        <div className={getSlideClassName(2)}>
          <img width={'750px'}height={'400px'} src='assets/Carousel/img-carousel3.jpeg' alt="Slide 3" />
        </div>
        <div className={getSlideClassName(3)}>
          <img width={'750px'}height={'400px'} src='assets/Carousel/img-carousel4.jpeg' alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
}

export default carousel;
