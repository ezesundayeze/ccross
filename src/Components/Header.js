import logo from "../img/logo.svg";
import SearcIcon from "../img/icons/Search.svg";
import StarIcon from "../img/icons/Star.svg";
import GraduatingIcon from "../img/icons/Graduating.svg";
import UserImg from "../img/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="btn-group grp-1">
          <input type="radio" name="mode" id="training" defaultChecked hidden />
          <label htmlFor="training">Training Mode</label>
          <input type="radio" name="mode" id="live" hidden />
          <label htmlFor="live">Live mode</label>
        </div>
        <div className="header__center">
          <div className="btn-group">
            <input type="radio" name="show-type" id="Show" hidden />
            <label htmlFor="Show">Show All</label>
            <input
              type="radio"
              name="show-type"
              id="Crypto"
              defaultChecked
              hidden
            />
            <label htmlFor="Crypto">Crypto</label>
            <input type="radio" name="show-type" id="Сommodities" hidden />
            <label htmlFor="Сommodities">Сommodities</label>
          </div>
          <div className="btn-group">
            <input
              type="radio"
              name="visibility-type"
              id="Stock"
              hidden
              defaultChecked
            />
            <label htmlFor="Stock">Stock</label>
            <input type="radio" name="visibility-type" id="Index" hidden />
            <label htmlFor="Index">Index</label>
            <input type="radio" name="visibility-type" id="Currency" hidden />
            <label htmlFor="Currency">Currency</label>
          </div>
        </div>
        <div className="header__right">
          <div className="header__cta">
            <a href="/" className="header__search">
              <img src={SearcIcon} alt="Search" />
            </a>
            <a href="/" className="header__star">
              <img src={StarIcon} alt="Star" />
            </a>
            <a href="/" className="header__degree">
              <img src={GraduatingIcon} alt="Graduating" />
            </a>
          </div>
          <div className="header__user">
            <img src={UserImg} alt="user" />
            <div className="notification">
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
