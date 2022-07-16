// helper functions
import { navigate } from "../../components/cards/helpers";

// components
import HC3 from "../../components/cards/HC3";
import HC1 from "../../components/cards/HC1";
import HC6 from "../../components/cards/HC6";

export const switchCase = (cardName, arr) => {
  //

  // returns an array of card elements. returning and rendering to index page
  return arr.map((cardDetails) => {
    switch (cardName) {
      //

      case "HC6":
        return <HC6 alt={cardName} cardDetails={cardDetails} />;

      case "HC1":
        return <HC1 alt={cardName} cardDetails={cardDetails} />;

      case "HC3":
        return <HC3 alt={cardName} cardDetails={cardDetails} />;

      case "HC9":
        console.log(cardDetails.url);
        return (
          <img
            alt={cardName}
            onClick={() => navigate(cardDetails)}
            src={cardDetails.bg_image.image_url}
          />
        );

      case "HC5":
        return (
          <img
            alt={cardName}
            onClick={() => navigate(cardDetails)}
            src={cardDetails.bg_image.image_url}
          />
        );

      default:
        return;

      //
    }
  });

  //
};
