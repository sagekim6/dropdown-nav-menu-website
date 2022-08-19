import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [featuresClicked, setFeaturesClicked] = useState(false);
  const [companyClicked, setCompanyClick] = useState(false);

  const handleFeaturesClicked = () => {
    setFeaturesClicked(!featuresClicked);
  };

  const handleCompanyClicked = () => {
    setCompanyClick(!companyClicked);
  };

  return (
    <>
      <Header
        featuresClicked={featuresClicked}
        companyClicked={companyClicked}
        handleFeaturesClicked={handleFeaturesClicked}
        handleCompanyClicked={handleCompanyClicked}
      />
      <Main />
    </>
  );
}

export default App;
