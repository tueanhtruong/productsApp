import { Container, Button } from "reactstrap";
import LoaderContainer from "../component/LoaderContrainer";
import UrlForm from "../component/UrlForm";
import Modals from "../component/Modals";
import shortid from "shortid";
import "./style.css";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions";

// import { useEffect, useState } from "react";

let Home = ({ loading, results, error, getClassi, onAddURL, onDeleteURL }) => {
  const [loader] = LoaderContainer();
  const handleAddURL = () => onAddURL();
  const handleDeleteURL = () => onDeleteURL();
  const handleSubmitURL = () => getClassi();
  return (
    <Container>
      <h1>Text Classification </h1>
      <div className="add-more-url">
        <Button color="primary" onClick={handleAddURL} className="button-tini">
          More URL
        </Button>
        <Button
          color="danger"
          onClick={handleDeleteURL}
          className="button-tini"
        >
          Delete URL
        </Button>
      </div>
      {results.map((n) => (
        <UrlForm
          label="URL"
          data={n}
          key={shortid.generate()}
          handleChangeValue={(event) => {
            n.url = event;
          }}
        />
      ))}
      <div className="main-button-container">
        <Button
          onClick={handleSubmitURL}
          color="success"
          className="main-button"
        >
          Run Process
        </Button>
      </div>
      <Modals />
      {loading ? loader : null}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getClassi: () => dispatch({ type: ACTION_TYPE.GET_CLASSI }),
  onAddURL: () => dispatch({ type: ACTION_TYPE.ON_ADD_URL }),
  onDeleteURL: () => dispatch({ type: ACTION_TYPE.ON_DELETE_URL }),
});

const mapStateToProps = (state) => ({
  loading: state.loading,
  results: state.results,
  error: state.error,
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
