import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
