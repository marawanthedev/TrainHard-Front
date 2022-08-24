import { PureComponent } from "react";
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
        text: "من نحن؟",
        to: "#about",
      },
      {
        text: "خدمات",
        to: "#services",
      },
      {
        text: "معرض الصور",
        to: "#gallery",
      },
      {
        text: "قالو عنا",
        to: "#testimonials",
      },
      {
        text: "تواصل معنا",
        to: "#contact",
      },
    ];
    return (
      <>
        <nav
          className={`navbar ${
            this.state.scrolled ? "navbar-scroll-mode" : null
          }`}
        >
          <div className="logo" />
          <ul className="list">
            {links.map((link, index) => {
              return (
                <li className="item" key={index}>
                  <a href={`${link.to}`}>{link.text} </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
