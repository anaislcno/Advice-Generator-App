import PropagateLoader from "react-spinners/PropagateLoader";

type LoaderProps = {
  color: string;
  loading: boolean;
};

const Loader = ({ color, loading }: LoaderProps) => {
  return (
    <PropagateLoader
      className="loader"
      color={color}
      loading={loading}
      cssOverride={{
        display: "flex",
        margin: "20px auto",
        justifyContent: "center",
      }}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
