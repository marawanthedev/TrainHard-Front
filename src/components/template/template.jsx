// import Navbar from "../navbar/navbar";
import MobileNavBar from "../mobileNavBar/mobileNavBar";
import "./template.css";
import Footer from "../footer/footer";
import TopRibbon from "../../container/topRibbon/topRibbon";
import Navbar from "../navbar/navbar";

const Template = (props) => {
  return (
    <>
      <TopRibbon />
      <header>
        {/* Navbar
    ================================================== */}
        <div className="nav-bar-container">
          <Navbar />
        </div>

        <div className="mobile-navbar-container">
          <MobileNavBar></MobileNavBar>
        </div>
      </header>

      <main>{props.children}</main>

      <Footer></Footer>
    </>
  );
};

export default Template;
