// static imports
import { FaPizzaSlice } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";

// relative imports
import imagesrc from "../../assets/fireworks.png";

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={imagesrc} alt="fireworks-logo" width="50px" height="50px" />
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
