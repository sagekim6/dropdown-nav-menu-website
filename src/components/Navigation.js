import Button from "./Button";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";
import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-close-menu.svg";

const Navigation = () => {
  return (
    <nav className="desktop_nav">
      <div className="nav_btns">
        <div>
          <Button text="Features" className={["Features"]} />
          <ArrowDown />
        </div>
        <div>
          <Button text="Company" className={["Company"]} />
          <ArrowDown />
        </div>
        <Button text="Careers" />
        <Button text="About" />
      </div>
      <div>
        <Button text="Login" className={["Login"]} />
        <Button text="Register" className={["Register"]} />
      </div>
    </nav>
  );
};

export default Navigation;
