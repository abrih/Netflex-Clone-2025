import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="Footerwraper">
      <div className="InnerFooterWraper">
        <div className="firstColumn">
          <div className="incons">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <IoLogoYoutube />
            </div>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
              <li className="serviceCode">Service Code</li>
            </ul>
          </div>
        </div>

        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div className="remvMobileview">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <FaRegCopyright />
        1997-2024 Netflex Inc.
      </div>
    </div>
  );
};

export default Footer;
