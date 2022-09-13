import Template from "../../components/template/template";
import Header from "../../container/header/header";
import MyProducts from "../../container/myProducts/myProducts";
import LoadingOverlay from "../../components/loadingOverlay/loadingOverlay";
import SideButton from "../../components/sideButton/sideButton";
import sanityClient from "../../sanity/sanity";
import CategoryList from "../../container/categoriesList/categoriesList";
import Reviews from "../../container/reviews/reviews";
import OfferProducts from "../../container/offerProducts/offerProducts";

export default function Landing() {
  const query = '*[_type == "gallery"]';
  sanityClient
    .fetch(query)
    .then((data) => {})
    .catch((e) => {});

  return (
    <Template>
      <div>
        <div className="main">
          <div id="page">{/* <Header></Header> */}</div>
        </div>

        {/* header */}
        <Header />

        {/* Loading overlay
    ================================================== */}
        <LoadingOverlay />

        {/* Products slider
    ================================================== */}
        <OfferProducts />

        {/* Category List ================================================== */}
        <CategoryList />

        {/* Products slider
    ================================================== */}
        <MyProducts />

        {/* Reviews
    ================================================== */}
        <Reviews />
        {/* Youtube Side button
    ================================================== */}
        <SideButton />
      </div>
    </Template>
  );
}
