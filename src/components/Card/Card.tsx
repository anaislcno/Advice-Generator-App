import { useState, useEffect } from "react";
import "./Card.css";
import Divider from "./../../assets/images/pattern-divider-desktop.svg";
import MobileDivider from "./../../assets/images/pattern-divider-mobile.svg";
import Loader from "../Loader/Loader";

type CardProps = {
  slip_id: number;
  advice: string;
};

const Card = () => {
  const [advice, setAdvice] = useState<CardProps>({ slip_id: 0, advice: "" });
  const [width, setWidth] = useState(window.innerWidth > 767);
  const [loading, setLoading] = useState(false);

  const updateMedia = () => {
    setWidth(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  type fetchAdviceProps = {
    slip: {
      id: number;
      advice: string;
    };
  };

  const fetchAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data: fetchAdviceProps) => {
        console.log(data);
        if (data.slip && data.slip.advice) {
          setAdvice({
            slip_id: data.slip.id,
            advice: data.slip.advice,
          });
        } else {
          console.error("API response is erroneous.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <section className="card">
        <h1 className="advice__nb">Advice #{advice.slip_id}</h1>
        {loading ? (
          <Loader color="#52ffa8" loading={loading} />
        ) : (
          <p className="advice">"{advice.advice}"</p>
        )}
        {width ? (
          <img className="divider" src={Divider} alt="divider" />
        ) : (
          <img className="divider" src={MobileDivider} alt="divider" />
        )}
        <button onClick={fetchAdvice} className="dice__btn"></button>
      </section>
    </div>
  );
};

export default Card;
