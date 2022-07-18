import { useState, useEffect, useCallback } from "react";

//images
import remind from "../../assets/images/Group 41.png";
import dismiss from "../../assets/images/Subtract.png";

// helper functions
import { constructText } from "./helpers";

// external libraries
import { useLongPress, LongPressDetectEvents } from "use-long-press";

// styles
import "./styles.modules.css";

const HC3 = (props) => {
  const [displayButton, setDisplayButton] = useState(false);
  const [displayCard, setDisplayCard] = useState(true);
  const [card] = useState(props.cardDetails);
  const [enabled] = useState(true);

  const callback = useCallback(() => {
    setDisplayButton(true);
  }, []);

  const bind = useLongPress(enabled ? callback : null, {
    onStart: () => console.log("Press started"),
    onFinish: () => console.log("Long press finished"),
    onCancel: () => console.log("Press cancelled"),
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH,
  });

  // handling card display on clicking card buttons
  const handleCard = (action) => {
    setDisplayCard(false);
    if (action) localStorage.setItem(card.name, "remind-later");
    else localStorage.setItem(card.name, "dismiss-now");
  };

  const cardStyles = {
    main: {
      backgroundColor: card.bg_color ? card.bg_color : "#ffffff",
      backgroundImage: `url(${card.bg_image.image_url})`,
    },
    hc3main2: { display: displayCard ? "flex" : "none" },
    hc3Left: { display: displayButton ? "flex" : "none" },
    button: {
      backgroundColor: card.cta[0].bg_color,
      color: card.cta[0].text_color,
      outline: "none",
    },
  };

  useEffect(() => {
    //

    let checkCard = localStorage.getItem(card.name);

    if (!checkCard) {
      localStorage.setItem(card.name, "none");
    } else {
      if (checkCard === "dismiss-now") setDisplayCard(false);
    }

    //
  }, []);

  //
  return (
    <div {...bind()} className="hc3-main-2" style={cardStyles.hc3main2}>
      <div className="hc3-left" style={cardStyles.hc3Left}>
        <div onClick={() => handleCard(1)}>
          <img src={remind} alt="remind-later" />
          <h4>Remind Later</h4>
        </div>
        <div onClick={() => handleCard(0)}>
          <img src={dismiss} alt="dismiss-now" />
          <h4>Dismiss Now</h4>
        </div>
      </div>
      <div className="hc3-right" style={cardStyles.main}>
        <div className="top-container">
          <div className="text">
            <h3>
              {card.formatted_title.entities.length > 0
                ? constructText(
                    card.formatted_title.text,
                    card.formatted_title.entities
                  )
                : card.title}
            </h3>
            <p>
              {card.formatted_description.entities.length > 0
                ? constructText(
                    card.formatted_description.text,
                    card.formatted_description.entities
                  )
                : card.description}
            </p>
          </div>
          <div
            className="button"
            onClick={() => window.location.replace(card.url)}
          >
            <button style={cardStyles.button}>{card.cta[0].text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HC3;
