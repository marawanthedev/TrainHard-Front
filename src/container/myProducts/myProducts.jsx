import ProductsSlider from "../../components/productSlider/productsSlider";
import { useEffect, useState } from "react";
import sanityClient from "../../sanity/sanity";

export default function MyProducts() {
  const [products, setProducts] = useState(null);
  const query =
    '*[_type == "product"]{name,price,category,isNew,isHot,front_image,back_image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <ProductsSlider
        products={products}
        header="New arrivals"
      ></ProductsSlider>
    </div>
  );
}
