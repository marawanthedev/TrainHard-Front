import Slider from "react-slick";
import "./testnimonials.css";
import { useState, useEffect } from "react";
import sanityClient from "../../sanity/sanity";
import urlFor from "../../util/imageBuilder";

export default function Testimonials() {
  const [slidesSettings, setSlidesSettings] = useState({
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  const [reviews, setReviews] = useState(null);
  const query = '*[_type == "reviews"]{text,image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setReviews(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {}, [slidesSettings]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: slidesSettings.slidesToShow,
    slidesToScroll: slidesSettings.slidesToScroll,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: <></>,
          nextArrow: <> </>,
          prevArrow: <> </>,
        },
      },
    ],
  };
  window.onresize = function () {
    if (window.innerWidth < 400) {
      setSlidesSettings({
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }
  };

  return (
    <section id="testimonials" className="banner-bottom-wthree py-lg-5 py-4">
      <div className="container">
        <div className="inner-sec py-md-5 py-3">
          <h3 className="tittle text-center mb-lg-5 mb-3 reviews-header">
            آراء عملائي
          </h3>
          <div className="row blog">
            <div className="col-lg-12">
              <div className="testimonials-slider-container slider-container mt-3">
                <Slider {...sliderSettings}>
                  {/* style=
                  {{
                    backgroundImage: `url(${urlFor(
                      slide.image.asset._ref
                    ).url()})`,
                  }} */}
                  {reviews !== null
                    ? reviews.map((review, index) => (
                        <div
                          key={index}
                          className=" col-md-12 pd-3  reviews-box"
                        >
                          <p>
                            {" "}
                            <div
                              className="review-img col-md-12"
                              style={{
                                backgroundImage: review.image
                                  ? `url(${urlFor(
                                      review.image.asset._ref
                                    ).url()})`
                                  : null,
                              }}
                            ></div>
                          </p>
                        </div>
                      ))
                    : null}
                </Slider>
              </div>
              {/*.Carousel*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
