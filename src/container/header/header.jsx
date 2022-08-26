import "./header.scss";
import Slider from "react-slick";
import sanityClient from "../../sanity/sanity";
import { useEffect, useState } from "react";
import urlFor from "../../util/imageBuilder";
// import Slide from "react-reveal/Fade";

export default function Header() {
  const [slides, setAllSlides] = useState(null);
  const query = '*[_type == "slide"]{image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        // console.log(data);
        setAllSlides(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: <></>,
        },
      },
      {
        breakpoint: 300,
        settings: {
          nextArrow: <> </>,
          prevArrow: <> </>,
          dots: <></>,
        },
      },
    ],
  };

  const getSlides = () => {
    console.log(slides);
    return slides.map((slide, index) => {
      return (
        <div key={index}>
          <div
            className="header__background-image header__background-image__1"
            style={{
              backgroundImage: `url(${urlFor(slide.image.asset._ref).url()})`,
            }}
          ></div>
          {/* <Slide up duration={750}> */}
          {/* <div className="header__background-image__text">
            <h2 className="header__background-image__text__title">
              {slide.title}
            </h2>
            <p className="header__background-image__text__desc">
              {slide.subTitle}
            </p>
          </div> */}
          {/* </Slide> */}
        </div>
      );
    });
  };
  return (
    <header id="main" className="header">
      <div className="slider-inner-container">
        <Slider {...sliderSettings}>
          {slides != null ? getSlides() : null}
        </Slider>
      </div>
    </header>
  );
}
