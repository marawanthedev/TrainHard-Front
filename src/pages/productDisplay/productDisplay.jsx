import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "./productDisplay.scss";
import Slider from "react-slick";
import urlFor from "../../util/imageBuilder";
import Button from "../../components/button/button";
import Template from "../../components/template/template";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import sanityClient from "../../sanity/sanity";
import ProductsSlider from "../../components/productSlider/productsSlider";

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  let product = null;

  useEffect(() => {
    if (product !== null) {
      localStorage.setItem("product", JSON.stringify(product));

      const query = `*[_type == "product" && category=="${product.category}"]{name,description,price,category,isNew,isHot,front_image,back_image}`;

      sanityClient
        .fetch(query)
        .then((data) => {
          setProducts(data);
        })
        .catch((e) => {});
      console.log(products);
    }
  }, [product, products]);

  if (location.data) {
    product = location.data.product;
  }
  if (!location.data) {
    const storedProduct = JSON.parse(localStorage.getItem("product"));
    console.log(storedProduct);
    if (storedProduct) {
      product = storedProduct;
    } else {
      return <Redirect to="/" />;
    }
  }

  function extractImages() {
    const imagesArray = [];
    for (const prop in product) {
      if (prop.includes("image") && product[prop] !== null) {
        imagesArray.push(product[prop]);
      }
    }
    return imagesArray;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <> </>,
    prevArrow: <> </>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <> </>,
          prevArrow: <> </>,
        },
      },
    ],
  };

  return product ? (
    <Template>
      <div className="product-display-container">
        <div className="product-display-container__card">
          <div className="product-display-container__left">
            <div className="product-display-container__left__slider">
              <Slider {...sliderSettings}>
                {extractImages().map((image) => {
                  return (
                    <img
                      className="product-display-container__left__slider__image"
                      src={`${urlFor(image).url()}`}
                      alt="product"
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="product-display-container__right">
            <div className="product-display-container__right__header">
              {product.name}
            </div>
            <div className="product-display-container__right__price">
              Price: {product.price}
            </div>
            <div className="product-display-container__right__category">
              Category: {product.category.split("_").join(" ")}
            </div>
            <div className="product-display-container__right__desc">
              {product.description}
            </div>

            <Button
              textContent={"Buy Now"}
              linkTo="http://m.me/supplementshopp"
            />
          </div>
        </div>
      </div>

      {products.length > 1 ? (
        <div className="related-products-container">
          <ProductsSlider
            products={products}
            header={"Related Products"}
          ></ProductsSlider>
        </div>
      ) : null}
    </Template>
  ) : (
    <Template>
      <div>Can not find product, will be redirected to home Page</div>
    </Template>
  );
}
