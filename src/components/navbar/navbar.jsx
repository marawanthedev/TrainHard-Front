import { PureComponent } from "react";
import { Link } from "react-router-dom";

// import Zoom from "react-reveal/Zoom";
import "./navbar.css";
export default class Navbar extends PureComponent {
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
    const links = [
      {
        text: "Main",
        to: "/#main",
      },
      {
        text: "New Arrival",
        to: "/#new-arrivals",
      },
      {
        text: "Categories",
        to: "/#categories",
      },
      {
        text: "Reviews",
        to: "/#reviews",
      },
    ];
    return (
      <>
        <nav
          className={`my_navbar ${
            this.state.scrolled ? "navbar-scroll-mode" : null
          }`}
        >
          <Link to="/" className="logo-link">
            <div className="logo" />
          </Link>

          <ul className="list">
            {links.map((link, index) => {
              return (
                <li className="item" key={index}>
                  {/* <Link to={link.to}>{link.text}</Link> */}
                  <a href={link.to}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
