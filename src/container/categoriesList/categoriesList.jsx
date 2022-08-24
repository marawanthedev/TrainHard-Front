import "./categoriesList.scss";
import { useState, useEffect } from "react";
import sanityClient from "../../sanity/sanity";
import CategoryItem from "../../components/categoryItem/categoryItem";
export default function CategoryList() {
  const [categories, setCategories] = useState(null);
  const query = '*[_type == "category"]{name,image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleCategoriesRendering = () => {
    if (!categories) return null;
    return categories.map((category) => {
      return <CategoryItem category={category} />;
    });
  };
  return <div className="category-list">{handleCategoriesRendering()}</div>;
}
