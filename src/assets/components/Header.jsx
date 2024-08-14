import { FaUserLarge } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <a href="/#">
          <img
            className="myntra_logo"
            src="src/assets/images/logo-myntra-41466.png"
            alt="Myntra-logo"
          />
        </a>
      </div>
      <nav className="nav_bar">
        <a href="/#">Men</a>

        <a href="/#">Women</a>

        <a href="/#">Kids</a>

        <a href="/#">home & living</a>

        <a href="/#">Beauty</a>
        <a href="/#">
          Studio <sup>New</sup>
        </a>
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
          <a href="/#">
            <FaRegHeart className="action_icon" />
            Wishlist
          </a>
        </div>
        <div className="action_container">
          <a href="/#">
            <FaCartShopping className="action_icon" />
            Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
