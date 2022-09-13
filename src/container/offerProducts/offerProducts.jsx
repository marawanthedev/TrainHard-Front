import ProductsSlider from "../../components/productSlider/productsSlider";
import { useEffect, useState } from "react";
import sanityClient from "../../sanity/sanity";

export default function OfferProducts() {
  const [products, setProducts] = useState(null);
  const query =
    '*[_type == "offer_products"]{name,old_price,new_price,category,isNew,isHot,front_image,description}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      {products !== null && products.length > 1 ? (
        <div style={{ width: "100%", height: "auto" }} id="new-arrivals">
          <ProductsSlider products={products} header="On Sale"></ProductsSlider>
        </div>
      ) : null}
    </>
  );
}
