import { FaUserLarge, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_logo"
            src="src/assets/images/logo-myntra-41466.png"
            alt="Myntra-logo"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/">Men</Link>

        <Link to="/">Women</Link>

        <Link to="/">Kids</Link>

        <Link to="/">home & living</Link>

        <Link to="/">beauty</Link>
        <Link to="/">
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <CiSearch className="search_icon" />
        <input
          type="search"
          className="search_input"
          placeholder="Search for Product..."
        />
      </div>

      <div className="action_bar">
        <div className="action_container">
          <a href="/#">
            <FaUserLarge className="action_icon" />
            Profile
          </a>
        </div>
        <div className="action_container">
          <Link to="/bag" className="position-relative">
            <FaCartShopping className="action_icon" />
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success cart_pill">
              {bag.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
