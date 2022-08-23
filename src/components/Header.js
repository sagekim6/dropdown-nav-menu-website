import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

const Header = () => {
  const [width, setWidth] = useState(0);

  const handleWidth = (e) => {
    setWidth(e.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <header>
      <h1>snap</h1>
      {width < 768 ? (
        <>
          <MobileMenu />
        </>
      ) : (
        <>
          <Navigation />
        </>
      )}
    </header>
  );
};

export default Header;
