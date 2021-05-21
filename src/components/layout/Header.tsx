// static imports
import { FaPizzaSlice } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="../../assets/fireworks.png" alt="fireworks-logo" />
        </div>

        <div className="settings">
          <ul>
            <li>
              <CgAddR />
            </li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
