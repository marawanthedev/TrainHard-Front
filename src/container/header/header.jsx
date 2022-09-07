import "./header.scss";
import Slider from "react-slick";
import sanityClient from "../../sanity/sanity";
import { useEffect, useState } from "react";
import urlFor from "../../util/imageBuilder";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  const [slides, setAllSlides] = useState(null);
  const query = '*[_type == "slide"]{image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setAllSlides(data);
      })
      .catch((e) => {});
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
          dots: true,
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
    return slides.map((slide, index) => {
      return (
        <Fade triggerOnce={true}>
          <div key={index}>
            <div
              className="header__background-image header__background-image__1"
              style={{
                backgroundImage: `url(${urlFor(slide.image.asset._ref).url()})`,
              }}
            ></div>
          </div>
        </Fade>
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
