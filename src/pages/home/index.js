import { useEffect, useState } from "react";

// helper functions
import { switchCase } from "./helpers";

//external-libraries
import axios from "axios";
import { Rings } from "react-loader-spinner";

// styles
import "./styles.modules.css";

//components
import Navbar from "../../components/navbar";

const Home = () => {
  //

  const [Data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  // react-element
  let loader = (
    <div className="loader-class">
      <Rings height="100" width="100" color="#FFAD00" ariaLabel="loading" />
    </div>
  );

  useEffect(() => {
    // fetching data at loading
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(
          "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17"
        );
        setData(data.card_groups);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
      setLoading(false);
    };

    fetchCards();
  }, []);

  return (
    <>
      {loading ? (
        loader
      ) : (
        <div className="main-container">
          <Navbar />
          <div className="container">
            <div className="main">
              {Data.map((card) => (
                <div className={card.design_type + "-main"}>
                  {switchCase(card.design_type, card.cards)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
