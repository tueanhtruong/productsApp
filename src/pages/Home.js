import { Container, Button } from "reactstrap";
import LoaderContainer from "../component/LoaderContrainer";
import UrlForm from "../component/UrlForm";
import Modals from "../component/Modals";
import shortid from "shortid";
import "./style.css";
import { connect } from "react-redux";
import { getClassi, onAddURL, onDeleteURL } from "../actions";

// import { useEffect, useState } from "react";

let Home = ({ loading, results, error, getClassi, onAddURL, onDeleteURL }) => {
  const [loader] = LoaderContainer();
  const handleAddURL = () => onAddURL();
  const handleDeleteURL = () => onDeleteURL();
  const handleSubmitURL = () => getClassi();
  return (
    <Container>
      <h1>Text Classification </h1>
      <div onClick={handleAddURL} className="add-more-url">
        <Button color="primary">More URL</Button>
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
      <div onClick={handleDeleteURL} className="delete-more-url">
        <Button color="danger">Delete URL</Button>
      </div>
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

const mapDispatchToProps = {
  getClassi: getClassi,
  onAddURL: onAddURL,
  onDeleteURL: onDeleteURL,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  results: state.results,
  error: state.error,
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
