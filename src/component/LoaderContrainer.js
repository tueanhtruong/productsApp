import { connect } from "react-redux";
import LoaderPage from "./loader/loaderPage";

const Loader = ({ loading }) => {
  return loading && <LoaderPage />;
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const LoaderContainer = connect(mapStateToProps, null)(Loader);

export default LoaderContainer;
