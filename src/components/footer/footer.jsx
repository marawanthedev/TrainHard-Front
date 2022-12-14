import "../../assets/css/font-awesome.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="action-sec py-lg-5 py-3" style={{ direction: "ltr" }}>
      <div className="container-fluid px-lg-5 px-3">
        <div className="row">
          <div className="col-lg-6 footer-grid">
            <h3 className="mb-4">About Us</h3>
            <p>{/* desc if wanted */}</p>
            <div className="row mt-5">
              <div className="col-md-12 mb-3">
                <a
                  href="https://www.facebook.com/supplementshopp"
                  className="facebook-footer  footer-link"
                >
                  <span className="fa fa-facebook mr-1" /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/train_hard2/"
                  className="twitter-footer footer-link"
                >
                  <span className="fa fa-instagram mr-1" />
                  instagram
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 footer-grid">
            <h3 className="mb-4">Address</h3>
            <address className="mb-0">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt" />
                <a
                  href="https://goo.gl/maps/Ma4BJygMTh33MEPx5"
                  style={{ cursor: "pointer" }}
                >
                  93 Mohammed Farid Abou Hadid
                  <br />
                  Nasr City, Cairo.
                </a>
              </p>
              <p>
                <a href="tel:+20 100 650 0419">
                  <i className="fa fa-phone mr-1" /> +20 100 650 0419
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="copyright mt-md-5 mt-4 text-center">
        <p>© 2022 Train Hard . All Rights Reserved</p>
      </div>
    </footer>
  );
}
