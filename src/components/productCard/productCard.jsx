import "./productCard.css";
import Button from "../button/button";
import urlFor from "../../util/imageBuilder";

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${urlFor(product.front_image).url()})` }}
      ></div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">
        {parseFloat(product.price)}
        <span>EGP</span>
      </div>
      {product.communicationLink !== null ? (
        <Button
          linkTo={product.communicationLink}
          textContent="Contact"
          iconName="whatsapp"
        ></Button>
      ) : null}
    </div>
  );
}
