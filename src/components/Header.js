import Button from "./Button";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";
import { ReactComponent as Menu } from "../images/icon-menu.svg";

import { ReactComponent as Calendar } from "../images/icon-calendar.svg";
import { ReactComponent as Planning } from "../images/icon-planning.svg";
import { ReactComponent as Reminders } from "../images/icon-reminders.svg";
import { ReactComponent as Todo } from "../images/icon-todo.svg";

const Header = ({
  featuresClicked,
  companyClicked,
  handleFeaturesClicked,
  handleCompanyClicked,
}) => {
  return (
    <header>
      <div className="title_nav">
        <h1>snap</h1>
        <nav className="destTop_nav">
          <div>
            <Button
              text="Features"
              className={["features_btn"]}
              handleFeaturesClicked={handleFeaturesClicked}
            />
            {featuresClicked ? (
              <>
                <ArrowUp />
                <ul className="features_info collaps_menu">
                  <li>
                    <Todo />
                    <span>Todo List</span>
                  </li>
                  <li>
                    <Calendar />
                    <span>Calendar</span>
                  </li>
                  <li>
                    <Reminders />
                    <span>Reminders</span>
                  </li>
                  <li>
                    <Planning />
                    <span>Planning</span>
                  </li>
                </ul>
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
              className={["company_btn"]}
              handleCompanyClicked={handleCompanyClicked}
            />
            {companyClicked ? (
              <>
                <ArrowUp />
                <div className="company_info collaps_menu">
                  <span>History</span>
                  <span>Our team</span>
                  <span>Blog</span>
                </div>
              </>
            ) : (
              <>
                <ArrowDown />
              </>
            )}
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
