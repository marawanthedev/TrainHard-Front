import "./categoryItem.scss";
import urlFor from "../../util/imageBuilder";
import { Link } from "react-router-dom";
export default function CategoryItem({ category, animationDelay }) {
  return (
    <div
      className="category-item"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Link
        to={{
          pathname: "/category",
          data: {
            categoryName: `${category.name}`,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <div
          className="category-item__img"
          style={{ backgroundImage: `url(${urlFor(category.image).url()})` }}
        />
      </Link>
    </div>
  );
}
