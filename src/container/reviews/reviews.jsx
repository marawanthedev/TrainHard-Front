import Slider from "react-slick";
import "./reviews.css";
import { useState, useEffect } from "react";
import sanityClient from "../../sanity/sanity";
import urlFor from "../../util/imageBuilder";
import { Fade } from "react-awesome-reveal";

export default function Reviews() {
  const [slidesSettings, setSlidesSettings] = useState({
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  const [reviews, setReviews] = useState(null);
  const query = '*[_type == "review"]{text,image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setReviews(data);
      })
      .catch((e) => {});
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
          nextArrow: <> </>,
          prevArrow: <> </>,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          nextArrow: <> </>,
          prevArrow: <> </>,
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section id="reviews" className="banner-bottom-wthree py-lg-5 py-4">
      <div className="reviews-container">
        <div className="inner-sec py-md-5 py-3">
          <h3 className="tittle text-center mb-lg-5 mb-3 reviews-header">
            Clients' Reviews
          </h3>
          <div className="row blog">
            <div className="col-lg-12">
              <div className="reviews-slider-container slider-container mt-3">
                <Slider {...sliderSettings}>
                  {reviews !== null
                    ? reviews.map((review, index) => (
                        <Fade>
                          <div
                            key={index}
                            className=" col-md-12 pd-3  reviews-box "
                          >
                            <div className="review-img-container">
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
                            </div>
                          </div>
                        </Fade>
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
