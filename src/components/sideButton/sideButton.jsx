import "./sideButton.css";
import YoutubeIcon from "../../assets/img/youtube.png";
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
        <div className="side-button-text">
          حابب تشوف فيديوهات تعليميه؟
          <br />
          تابع فيديوهاتنا علي اليوتيوب
        </div>
        <a
          href="https://www.youtube.com/playlist?list=PLswkSwm89d9YAmLyasUlMGOxzShNKw21F"
          className="side-button-anchor"
        >
          <img className="youtube-icon" src={YoutubeIcon} alt="youtube-icon" />
        </a>
      </div>
    ) : null;
  }
}
