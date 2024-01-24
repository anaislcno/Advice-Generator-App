// Data structure fetched from API
export interface fetchAdviceProps {
  slip: {
    id: number;
    advice: string;
  };
}

// Data model for an advice
export interface AdviceModel {
  slip_id: number;
  advice: string;
}