// Data structure fetched from API
export interface FetchAdviceProps {
  slip: {
    id: number;
    advice: string;
  };
}

// Data model for an advice
export interface AdviceModel {
  slip_id: number | null;
  advice: string | null;
}
