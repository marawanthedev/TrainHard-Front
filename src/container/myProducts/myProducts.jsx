import ProductsSlider from "../../components/productSlider/productsSlider";
import { useEffect, useState } from "react";
import sanityClient from "../../sanity/sanity";

export default function MyProducts() {
  const [products, setProducts] = useState(null);
  const query =
    '*[_type == "new_arrival"]{name,price,category,isNew,isHot,front_image,description}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {});
  }, []);

  return (
    <div style={{ width: "100%", height: "auto" }} id="new-arrivals">
      <ProductsSlider
        products={products}
        header="New arrivals"
      ></ProductsSlider>
    </div>
  );
}
