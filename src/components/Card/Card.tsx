import { useState, useEffect } from "react";
import "./Card.css";
import Divider from "./../../assets/images/pattern-divider-desktop.svg";
import MobileDivider from "./../../assets/images/pattern-divider-mobile.svg";
import Loader from "../Loader/Loader";
import useAdviceFetcher from "../../data/AdviceFetcher";

const Card = () => {
  const { advice, loading, fetchAdvice } = useAdviceFetcher();
  const [width, setWidth] = useState(window.innerWidth > 767);

  const updateMedia = () => {
    setWidth(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  return (
    <div className="container">
      <section className="card">
        <h1 className="advice__nb">Advice #{advice.slip_id}</h1>
        {loading ? (
          <Loader color="#52ffa8" loading={loading} />
        ) : (
          <p className="advice">"{advice.advice}"</p>
        )}
        <img
          className="divider"
          src={width ? Divider : MobileDivider}
          alt="divider"
        />
        <button onClick={fetchAdvice} className="dice__btn"></button>
      </section>
    </div>
  );
};

export default Card;
