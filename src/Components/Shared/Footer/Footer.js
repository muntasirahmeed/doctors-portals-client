import React from "react";
import footerbg from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{ background: `url(${footerbg})`, backgroundSize: "contain" }}
      className="  pt-10 px-10 pb-5 bg-no-repeat container mx-auto"
    >
      <div className="footer  text-xl md:text-[16px]  place-items-start md:place-items-center">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center  text-sm pt-10 text-accent">
        <div>
          <p>Copyright © 2022 - All right reserved by Doctors-portal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
