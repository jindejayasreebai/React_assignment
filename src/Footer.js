import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <table style={{ marginLeft: "120px" }}>
          <tr>
            <td style={{ paddingLeft: "40px" }}>
              <div className="footer-left">
                <p>Be the first to know</p>
                <p>Signup for updates from Metta Muse</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </td>
            <td style={{ paddingLeft: "180px" }}>
              <div className="footer-right">
                <p>Contact Us</p>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="footer-column">
                <p>Metta Muse</p>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances</p>
              </div>
            </td>
            <td>
              <div className="footer-column">
                <p>Quick Links</p>
                <p>Join/Login as Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </td>
            <td>
              <div className="footer-column">
                <p>Follow Us</p>
                <div className="social-icons">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </footer>
  );
}

export default Footer;
