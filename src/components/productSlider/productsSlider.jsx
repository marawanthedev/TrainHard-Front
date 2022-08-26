import Slider from "react-slick";
import ProductCard from "../productCard/productCard";
import "./productsSlider.css";

const productSliderConfig = {
  productPerSlide: 4,
};
export default function ProductsSlider(props) {
  const { products, header } = props;
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: productSliderConfig.productPerSlide,
    slidesToScroll: productSliderConfig.productPerSlide,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <> </>,
          prevArrow: <> </>,
        },
      },
    ],
  };
  return (
    <div className="products-main-container">
      <div className="products-slider-container">
        <h1 className="products-slider-container-header">{header}</h1>
        <Slider {...sliderSettings}>
          {products != null
            ? products.map((product, index) => (
                <ProductCard key={index} product={product}></ProductCard>
              ))
            : null}
        </Slider>
      </div>
    </div>
  );
}
