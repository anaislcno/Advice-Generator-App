import { useState, useCallback } from "react";
import { AdviceModel, fetchAdviceProps } from "../types/advice";

const useAdviceFetcher = () => {
  const [advice, setAdvice] = useState<AdviceModel>({
    slip_id: 0,
    advice: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchAdvice = useCallback(() => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: fetchAdviceProps) => {
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
  }, []);

  return { advice, loading, fetchAdvice };
};

export default useAdviceFetcher;
