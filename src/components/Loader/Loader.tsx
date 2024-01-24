import PropagateLoader from "react-spinners/PropagateLoader";
import { LoaderProps } from "../../types/loader";

const Loader: React.FC<LoaderProps> = ({ color, loading }) => {
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
