import "./sideButton.css";
import React from "react";
export default class SideButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handlePageScroll);
    if (window.pageYOffset > 1) {
      this.setState({ scrolled: true });
    }
  }
  handlePageScroll = () => {
    if (window.scrollY > 1) {
      this.setState({ scrolled: true });
    }
    if (window.scrollY <= 1) {
      this.setState({ scrolled: false });
    }
  };
  render() {
    return this.state.scrolled ? (
      <div className="side-button">
        <div className="side-button-links">
          <a
            href="https://www.facebook.com/supplementshopp"
            style={{ color: "white" }}
            className=" side-button-link side-button-link-facebook"
          >
            <span className={`fa fa-facebook mr-1`} />
            {/* <div className="shop-now">{props.textContent}</div> */}
          </a>
          <a
            href="https://www.instagram.com/train_hard2/"
            style={{ color: "white" }}
            className=" side-button-link side-button-link-instagram"
          >
            <span className={`fa fa-instagram mr-1`} />
            {/* <div className="shop-now">{props.textContent}</div> */}
          </a>
        </div>
      </div>
    ) : null;
  }
}
