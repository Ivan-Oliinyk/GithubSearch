import { Link } from "react-router-dom";
import config from "../config";

const {
  routing: { HOME, FAVORITES },
} = config;

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to={HOME} className="mr-2">
          Home
        </Link>
        <Link to={FAVORITES}>Favorites</Link>
      </span>
    </nav>
  );
};

export default NavBar;
