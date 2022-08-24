import leftChevronIcon from "../../assets/icons/left-chevron.png";
import rightChevronIcon from "../../assets/icons/right-chevron.png";
import "./chevron.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Chevron(props) {
  const { className, style, onClick, direction } = props;
  return (
    <LazyLoadImage
      src={direction === "right" ? rightChevronIcon : leftChevronIcon}
      alt="prev arrow"
      className={` arrow  ${className}`}
      style={{
        ...style,
        width: "3.5rem",
        height: "3.5rem",
      }}
      onClick={onClick}
    />
  );
}
