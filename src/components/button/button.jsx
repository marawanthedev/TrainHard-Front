import "./button.css";
export default function Button(props) {
  return (
    <div className="button-container">
      <a
        href={props.linkTo !== null ? props.linkTo : "#"}
        style={{ color: "white" }}
        className="btn"
      >
        {props.iconName ? (
          <span className={`fa fa-${props.iconName} mr-1`} />
        ) : null}
        <div className="shop-now">{props.textContent}</div>
      </a>
    </div>
  );
}
