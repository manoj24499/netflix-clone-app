import { Link } from "react-router-dom";
import "./footer.css";
import Navbar from "../navbar/Navbar";
const content = [
  { name: "FAQ", href: "" },
  { name: "Help Center", href: "" },
  { name: "Account", href: "" },
  { name: "Media Center", href: "" },
  { name: "Investor Relations", href: "" },
  { name: "Jobs", href: "" },
  { name: "Ways to Watch", href: "" },
  { name: "Terms Of Use", href: "" },
  { name: "Privacy", href: "" },
  { name: "Cookie Privacy", href: "" },
  { name: "Corporate Information", href: "" },
  { name: "Contact Us", href: "" },
  { name: "Speed Test", href: "" },
  { name: "Legal Notice", href: "" },
  { name: "Only on Netflix", href: "" },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="call">
          <p>Questions? Call</p>
          <a className="contact" href="">
            000-9030440--9994390
          </a>
        </div>
        <div className="foot-main">
          {content.map((data) => (
            <Link to={data.href}>{data.name}</Link>
          ))}
        </div>
        <section className="language">
          <select className="lang">
            <option lang="en" value="">
              English
            </option>
            <option lang="hindi" value="">
              हिन्दी
            </option>
          </select>
        </section>
        <p className="netflix-india">Netflix India</p>
      </div>
    </div>
  );
};
export default Footer;
