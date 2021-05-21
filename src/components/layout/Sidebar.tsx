// static imports
import {
  FaChevronDown,
  FaRegCalendarAlt,
  FaInbox,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => {
  const x = 1;
  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__generic">
        <ul>
          <li>
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </li>
          <li>
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </li>
          <li>
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next-7 days</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here!</ul>
      Project component will be here
    </div>
  );
};
