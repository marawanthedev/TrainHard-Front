export default function Footer() {
  return (
    <footer className="action-sec py-lg-5 py-3" style={{ direction: "ltr" }}>
      <div className="container-fluid px-lg-5 px-3">
        <div className="row">
          <div className="col-lg-6 footer-grid">
            <h3 className="mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, Cras blandit nibh ut pretium
              elementum. Duis bibendum convallis nunc a dictum. Quisque ac ipsum
              porta, ultrices metus sit amet, cursus nisl. Duis aliquet varius
              sem sit amet tempus. Curabitur vitae dui bibendum
            </p>
            <div className="row mt-5">
              <div className="col-md-12 mb-3">
                <a
                  href="https://www.facebook.com/samerkbd"
                  className="facebook-footer "
                >
                  <span className="fa fa-facebook mr-1" /> Facebook
                </a>
                <a href="#x" className="twitter-footer">
                  <span className="fa fa-instagram mr-1" /> Instagram
                </a>
                <a
                  href="https://wa.me/+201005000538"
                  className="twitter-footer"
                >
                  <span className="fa fa-whatsapp mr-1" /> Whatsapp
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
                  href="https://www.google.com/maps?q=29.9677791595459,31.255416870117188&z=17&hl=en"
                  style={{ cursor: "pointer" }}
                >
                  8088H 5th Street Parking, King <br />
                  Maadi, Cairo.
                </a>
              </p>
              <p>
                <i className="fa fa-phone mr-1" /> +201005000538
              </p>

              <p>
                <i className="fa fa-envelope-open  mr-1" />
                <a href="mailto:samerkbd@hotmail.com">samerkbd@hotmail.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="copyright mt-md-5 mt-4 text-center">
        <p>
          © 2021 Budgee . All Rights Reserved | built by
          <a
            rel="noreferrer"
            href="https://marwan-mostafa.com/"
            target="_blank"
            style={{ marginLeft: ".5rem" }}
          >
            Marwan Mostafa
          </a>
        </p>
      </div>
    </footer>
  );
}
