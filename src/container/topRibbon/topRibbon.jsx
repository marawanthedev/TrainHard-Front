import "./tobRibbon.scss";
import sanityClient from "../../sanity/sanity";
import { useState, useEffect } from "react";

//sanityIo offer structure sample
// offer: {
//   description: "";
// }

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
      .catch((e) => console.log(e));
  }, []);

  return offerMessage !== undefined && offerMessage !== null ? (
    <div className="top-ribbon">
      <div className="top-ribbon__content">{offerMessage}</div>
    </div>
  ) : null;
};

export default TopRibbon;
