import "./categoryItem.scss";
import urlFor from "../../util/imageBuilder";

export default function CategoryItem({ category }) {
  console.log();
  return (
    <div className="category-item">
      <div
        className="category-item__img"
        style={{ backgroundImage: `url(${urlFor(category.image).url()})` }}
      />
      <div className="category-item__name">
        {/* thats pretty good */}
        {/* joining all with a space */}
        {category.name.split("_").join(" ")}
      </div>
    </div>
  );
}
