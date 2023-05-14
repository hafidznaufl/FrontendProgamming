import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div>
          <h1 className={style.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={style.navbar__list}>
            <li className={style.navbar__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/movie/now">Now PLaying</Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
