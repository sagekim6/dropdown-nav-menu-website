import { useState, memo } from "react";
import Button from "./Button";
import FeaturesList from "./FeaturesList";
import CompanyList from "./CompanyList";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";

const Navigation = () => {
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false);
  const [isCompanyClicked, setIsCompanyClicked] = useState(false);

  const handleFeaturesClicked = () => {
    setIsFeaturesClicked(!isFeaturesClicked);
  };
  const handleCompanyClicked = () => {
    setIsCompanyClicked(!isCompanyClicked);
  };

  const CareersMemo = memo(Button);
  const AboutMemo = memo(Button);
  const LoginMemo = memo(Button);
  const RegisterMemo = memo(Button);

  return (
    <nav className={"desktop_nav"}>
      <div className="nav_btns">
        <div>
          <Button
            text="Features"
            className={["Features"]}
            handleFeaturesClicked={handleFeaturesClicked}
          />
          {isFeaturesClicked ? (
            <>
              <ArrowUp />
              <FeaturesList />
            </>
          ) : (
            <>
              <ArrowDown />
            </>
          )}
        </div>
        <div>
          <Button
            text="Company"
            className={["Company"]}
            handleCompanyClicked={handleCompanyClicked}
          />
          {isCompanyClicked ? (
            <>
              <ArrowUp />
              <CompanyList />
            </>
          ) : (
            <>
              <ArrowDown />
            </>
          )}
        </div>
        <CareersMemo text="Careers" className={["Careers"]} />
        <AboutMemo text="About" className={["About"]} />
      </div>
      <div className="Login_Register">
        <LoginMemo text="Login" className={["Login"]} />
        <RegisterMemo text="Register" className={["Register"]} />
      </div>
    </nav>
  );
};

export default memo(Navigation);
