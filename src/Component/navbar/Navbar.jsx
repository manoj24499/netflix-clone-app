import Button from "../button/Button";
import "./navbar.css";
import logo from "../../Assets/images/Netflix_2015_logo.svg.png";
const Navbar = ({ langsvg }) => {
  return (
    <div className="navbar">
      <div className="logo-contain">
        <img className="netflix-logo" src={logo} alt="" />
      </div>
      <div className="nav-container">
        <section className="language">
          {langsvg}
          <select className="lang">
            <option lang="en" value="">
              English
            </option>
            <option lang="hindi" value="">
              हिन्दी
            </option>
          </select>
          <Button button="size" content="Sign In" />
        </section>
      </div>
    </div>
  );
};
export default Navbar;
