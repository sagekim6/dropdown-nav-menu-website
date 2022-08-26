import { useState, memo } from "react";
import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-close-menu.svg";
import Navigation from "./Navigation";

const MobileMenu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      {isMenuClicked ? (
        <div className="aside_menu">
          <Close className="mobile_menu Close" onClick={handleMenuClicked} />
          <Navigation />
        </div>
      ) : (
        <>
          <Menu className="mobile_menu" onClick={handleMenuClicked} />
        </>
      )}
    </>
  );
};

export default memo(MobileMenu);
