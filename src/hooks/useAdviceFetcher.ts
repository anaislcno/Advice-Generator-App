import { useState, useCallback } from "react";
import { AdviceModel, FetchAdviceProps } from "../types/advice";

const useAdviceFetcher = () => {
  const [advice, setAdvice] = useState<AdviceModel>({
    slip_id: null,
    advice: null,
  });

  const [loading, setLoading] = useState(false);

  const fetchAdvice = useCallback(() => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: FetchAdviceProps) => {
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
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { advice, loading, fetchAdvice };
};

export default useAdviceFetcher;
