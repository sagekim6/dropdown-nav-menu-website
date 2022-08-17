import Button from "./Button";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import { ReactComponent as Menu } from "../images/icon-menu.svg";

const Header = () => {
  return (
    <header>
      <div className="title_nav">
        <h1>snap</h1>
        <nav className="destTop_nav">
          <div>
            <Button text="Features" className={["features_btn"]} />
            <ArrowDown />
          </div>
          <div>
            <Button text="Company" className={["company_btn"]} />
            <ArrowDown />
          </div>
          <a href="#!">Careers</a>
          <a href="#!">About</a>
        </nav>
        <nav className="mobile_nav">
          <Menu width={25} height="18" />
        </nav>
      </div>
      <div className="login_register">
        <a href="#!" className="login">
          Login
        </a>
        <a href="#!" className="register">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
