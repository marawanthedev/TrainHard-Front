import "./categoriesList.scss";
import { useState, useEffect } from "react";
import sanityClient from "../../sanity/sanity";
import CategoryItem from "../../components/categoryItem/categoryItem";

export default function CategoryList() {
  // start animation at 900
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState(null);
  const query = '*[_type == "category"]{name,image}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => {});
    // animation toggler
    window.addEventListener("scroll", handleScreenYPosition);
  }, []);

  const handleScreenYPosition = () => {
    if (window.innerWidth > 1024) {
      if (window.scrollY >= 850) {
        setDisplay(true);
      }
    }
    if (window.innerWidth < 768) {
      if (window.scrollY >= 550) {
        setDisplay(true);
      }
    }
  };
  const handleCategoriesRendering = () => {
    if (!categories) return null;
    return categories.map((category, index) => {
      return (
        <CategoryItem
          key={index}
          animationDelay={0.1 * index}
          category={category}
        />
      );
    });
  };
  return (
    <div id="categories" className="category-list">
      {display ? handleCategoriesRendering() : null}
    </div>
  );
}
