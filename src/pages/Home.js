import { Container, Button } from "reactstrap";
import UrlForm from "../component/UrlForm";
import shortid from "shortid";
import "./style.css";
import { connect } from "react-redux";
import { getClassification } from "../actions";
import { useState } from "react";
import { errorHandle } from "../service/errors";
import { formatterData } from "./helper";

let Home = ({ onGetClassification }) => {
  const [form, setForm] = useState({ url: "", returnData: [] });

  const handleGetClassification = () => {
    onGetClassification({ url: [form.url] }, handleSuccess, errorHandle);
  };

  const handleSuccess = (res) => {
    const formattedData = formatterData(res);

    setForm({ ...form, returnData: formattedData });
  };

  return (
    <Container>
      <h1>Text Classification </h1>
      <div className="add-more-url"></div>
      <UrlForm
        label="URL"
        data={form.url}
        resultData={form.returnData}
        key={shortid.generate()}
        handleChangeValue={(value) => setForm({ ...form, url: value })}
      />
      <div className="main-button-container">
        <Button
          onClick={handleGetClassification}
          color="success"
          className="main-button"
        >
          Run Process
        </Button>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onGetClassification: (payload, onSuccess, onError) =>
    dispatch(getClassification(payload, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
  loading: state.loading,
  results: state.results,
  error: state.error,
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
