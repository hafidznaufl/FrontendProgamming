import { Link } from "react-router-dom";
import NavbarStyle from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyle>
      <nav >
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movie/create">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/movie/popular">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movie/now">
                Now PLaying
              </Link>
            </li>
            <li>
              <Link to="/movie/top">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
