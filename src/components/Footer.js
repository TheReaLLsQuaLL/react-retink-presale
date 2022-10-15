import "./Footer.css";
import logo from "../img/Logo.svg";
import facebook from "../img/Vector.svg";
import twitter from "../img/Vector-1.svg";
import linkedin from "../img/Vector-2.svg";
import youtube from "../img/Vector-3.svg";
import pinterest from "../img/Vector-4.svg";
import instagram from "../img/Vector-5.svg";

function Footer() {
  return (
    <div class="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-logo">
            <img src={logo} alt="logo-footer" />
          </div>
          <div className="footer-top-left-list">
            <table>
              <tr>
                <td>Product by Retink Media UG</td>
                <td>Get Early Access</td>
              </tr>
              <tr>
                <td>Bonn, Germany</td>
                <td>Provide Feedback</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-contact">
            <div className="footer-top-right-contact-title">
              Connect with Us
            </div>
            <div className="footer-top-right-contact-social-logos">
              <img src={facebook} id="facebook" alt="facebook-footer" />
              <img src={twitter} alt="twitter-footer" />
              <img src={instagram} id="instagram" alt="instagram-footer" />
              <img src={linkedin} alt="linkedin-footer" />
              <img src={youtube} id="youtube" alt="youtube-footer" />
              <img src={pinterest} alt="pinterest-footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="footer-copyright-left">
          <p>Copyright © 2021 Retink</p>
        </div>
        <div className="footer-copyright-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
