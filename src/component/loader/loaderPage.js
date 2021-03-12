// import Rolling2 from "../../media/loader/Rolling2.svg";
import "./style.css";
import { Spinner } from "reactstrap";
const LoaderPage = () => (
  <div className="fl-div">
    <Spinner color="success" className="fl-img" size="md" />
    {/* <img src={Rolling2} className="fl-img" alt="loading" /> */}
  </div>
);
export default LoaderPage;
