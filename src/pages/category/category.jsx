import { useState, useEffect } from "react";
import sanityClient from "../../sanity/sanity";
import Template from "../../components/template/template";
import "./category.scss";
import ProductCard from "../../components/productCard/productCard";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import Button from "../../components/button/button";
import { Redirect } from "react-router-dom";
export default function Category() {
  const location = useLocation();
  const data = location.data;
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let categoryName;

  if (data) {
    categoryName = data.categoryName;
  }
  if (!data) {
    const storedCategoryName = localStorage.getItem("categoryName");
    if (storedCategoryName !== null && storedCategoryName !== undefined) {
      categoryName = storedCategoryName;
    } else {
      return <Redirect to="/" />;
    }
  }

  const query = `*[_type == "product" && category=="${categoryName}"]{name,description,price,category,isNew,isHot,front_image,back_image}`;

  /*eslint-disable */
  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(query)
      .then((data) => {
        setCategoryItems(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });

    if (data) {
      localStorage.setItem("categoryName", data.categoryName);
    }
  }, []);
  /*eslint-enable */

  function handleItemsDisplay() {
    if (categoryItems.length > 1) {
      return categoryItems.map((product, index) => (
        <ProductCard
          isBig={true}
          margin={"1rem .5rem"}
          product={product}
          key={index}
        ></ProductCard>
      ));
    }
    if (!isLoading && categoryItems.length === 0) {
      return (
        <div className="category-wrapper__not-found">
          <div className="category-wrapper__not-found__header">
            Products of that Category were not found
          </div>
          <Button textContent="Home Page" linkTo="/"></Button>
        </div>
      );
    }
  }

  function extractCategoryName() {
    const _categoryName = categoryName.split("_").join(" ");
    return _categoryName;
  }
  return (
    <Template>
      <div className="category-wrapper">
        {categoryItems.length > 0 ? (
          <div className="category-wrapper__header">
            {extractCategoryName()}
          </div>
        ) : null}

        <div className="category-items-list">{handleItemsDisplay()}</div>
      </div>
    </Template>
  );
}
