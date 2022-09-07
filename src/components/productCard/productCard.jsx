import "./productCard.css";
import Button from "../button/button";
import urlFor from "../../util/imageBuilder";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product, margin, isBig } = props;

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
          linkTo="https://www.facebook.com/messages/t/107120878120414/"
          textContent="Buy Now"
          iconName=""
        ></Button>
      ) : null}
    </div>
  );
}
