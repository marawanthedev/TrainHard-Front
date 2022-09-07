import "./productCard.css";
import Button from "../button/button";
import urlFor from "../../util/imageBuilder";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ProductCard(props) {
  const { product, margin, isBig } = props;
  let innerWidth;

  useEffect(() => {
    innerWidth = window.innerWidth;
  }, []);

  function getContactLink() {
    if (innerWidth > 1024) {
      //m.me/USERNAME
      return "http://m.me/supplementshopp";
    } else {
      return "http://m.me/supplementshopp";
    }
  }
  return (
    <div
      className={`product-card ${isBig ? "product-card__big" : null}`}
      style={{ margin: margin }}
    >
      <Link
        to={{
          pathname: "/product",
          data: {
            product: product,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${urlFor(product.front_image).url()})`,
          }}
        />
      </Link>
      <div className="product-name">{product.name}</div>
      <div className="product-price">
        {parseFloat(product.price)}
        <span>EGP</span>
      </div>
      {product.communicationLink !== null ? (
        <Button
          linkTo={getContactLink()}
          textContent="Buy Now"
          iconName=""
        ></Button>
      ) : null}
    </div>
  );
}
