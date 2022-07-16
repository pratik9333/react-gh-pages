import { useState } from "react";

// images
import arrow from "../../assets/images/arrow.png";

// helper functions
import { constructText, navigate } from "./helpers";

// styles
import "./styles.modules.css";

const HC1 = (props) => {
  const [card] = useState(props.cardDetails);

  // inline styling for dynamic usecase
  const cardStyles = {
    text: { color: card.color ? card.color : "#000000" },
    main: { backgroundColor: card.bg_color ? card.bg_color : "#ffffff" },
  };

  return (
    <div onClick={() => navigate(card)} className="hc1" style={cardStyles.main}>
      <div className="left-container">
        <div className="logo">
          <img src={card.icon.image_url} alt="icon" />
        </div>
        <div className="text">
          <h3 style={cardStyles.text}>
            {card.formatted_title.entities.length > 0
              ? constructText(
                  card.formatted_title.text,
                  card.formatted_title.entities
                )
              : card.title}
          </h3>
        </div>
      </div>

      <div className="right-container">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default HC1;
