import Template from "../../components/template/template";
import Header from "../../container/header/header";
import Testimonials from "../../container/testinmonials/testimonials";
import MyProducts from "../../container/myProducts/myProducts";
import LoadingOverlay from "../../components/loadingOverlay/loadingOverlay";
import SideButton from "../../components/sideButton/sideButton";
import sanityClient from "../../sanity/sanity";
import CategoryList from "../../container/categoriesList/categoriesList";

export default function Landing() {
  const query = '*[_type == "gallery"]';
  sanityClient
    .fetch(query)
    .then((data) => {})
    .catch((e) => console.log(e));

  return (
    <Template>
      <div>
        <div className="main">
          <div id="page">{/* <Header></Header> */}</div>
        </div>

        {/* Loading overlay
    ================================================== */}
        <LoadingOverlay />

        {/* Category List ================================================== */}
        <CategoryList />

        {/* Testimonials
    ================================================== */}
        {/* <Testimonials /> */}

        {/* Products slider
    ================================================== */}
        <MyProducts />

        {/* Youtube Side button
    ================================================== */}
        <SideButton />
      </div>
    </Template>
  );
}
