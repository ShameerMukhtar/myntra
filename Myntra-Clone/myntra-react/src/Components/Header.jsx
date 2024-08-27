import { AiFillProfile } from "react-icons/ai";
import { TbJewishStarFilled } from "react-icons/tb";
import { IoBag } from "react-icons/io5";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="action_name">
              <AiFillProfile />
            </span>
          </div>

          <div className="action_container">
            <span className="action_name">
              <TbJewishStarFilled />
            </span>
          </div>

          <a className="action_container" href="pages/bag.html">
            <span className="action_name">
              <IoBag />
            </span>
            <span className="bag-item-count">0</span>
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
