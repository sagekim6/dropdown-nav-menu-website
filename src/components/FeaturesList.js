import { ReactComponent as Calendar } from "../images/icon-calendar.svg";
import { ReactComponent as Planning } from "../images/icon-planning.svg";
import { ReactComponent as Reminders } from "../images/icon-reminders.svg";
import { ReactComponent as Todo } from "../images/icon-todo.svg";

const FeaturesList = () => {
  return (
    <ul className="FeaturesList dropdown">
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
  );
};

export default FeaturesList;
