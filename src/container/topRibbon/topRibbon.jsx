import "./tobRibbon.scss";
import sanityClient from "../../sanity/sanity";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const TopRibbon = () => {
  const [offerMessage, setOfferMessage] = useState(null);
  const query = '*[_type == "offer"]{description}';
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        const offerMessage = data[0].description;
        setOfferMessage(offerMessage);
      })
      .catch((e) => {});
  }, []);

  return offerMessage !== undefined && offerMessage !== null ? (
    <Fade>
      <div className="top-ribbon">
        <div className="top-ribbon__content">{offerMessage}</div>
      </div>
    </Fade>
  ) : null;
};

export default TopRibbon;
