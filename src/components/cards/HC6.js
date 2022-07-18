import { useState } from "react";

// helper functions
import { constructText } from "./helpers";

// styles
import "./styles.modules.css";

const HC6 = (props) => {
  const [card] = useState(props.cardDetails);

  const cardStyles = {
    main: { backgroundColor: card.bgColor ? card.bgColor : "#FBAF03" },
  };

  return (
    <div
      className="hc6"
      onClick={() => window.location.replace(card.url)}
      style={cardStyles.main}
    >
      <div className="left-container">
        <div className="logo">
          <img src={card.icon.image_url} alt="icon" />
        </div>
        <div className="text">
          <h3>
            {card.formatted_title.entities.length > 0
              ? constructText(
                  card.formatted_title.text,
                  card.formatted_title.entities
                )
              : card.title}
          </h3>
          <span>
            {card.formatted_description.entities.length > 0
              ? constructText(
                  card.formatted_description.text,
                  card.formatted_description.entities
                )
              : card.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HC6;
