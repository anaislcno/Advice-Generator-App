import { useState, useEffect } from "react";
import "./Card.css";
import Divider from "./../../assets/images/pattern-divider-desktop.svg";

const Card = () => {
  const [advice, setAdvice] = useState({ slip_id: 0, advice: "" });

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
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
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <section className="card">
        <h1 className="advice__nb">Advice #{advice.slip_id}</h1>
        <p className="advice">"{advice.advice}"</p>
        <img className="divider" src={Divider} alt="divider" />
        <button onClick={fetchAdvice} className="dice__btn"></button>
      </section>
    </>
  );
};

export default Card;
