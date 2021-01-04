import { useState } from "react";
import LoaderPage from "./loader/loaderPage";

const LoaderContainer = () => {
  const [loader, setLoader] = useState(false);
  return [
    loader && <LoaderPage />,
    () => setLoader(true),
    () => setLoader(false),
  ];
};

export default LoaderContainer;
