import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-white" style={{ position:"fixed",bottom:"0",left:"0%",backgroundColor:"#a59cca",color:"white",fontWeight:"bold"}}>
        <footer className="footer text-white">
          <p className="mb-0 text-white">
            Copyright 2023 &copy; <Link to="/" className="text-white">DevCRUD</Link>
          </p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-facebook"></i>
            </a>
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-twitter-alt"></i>
            </a>
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-google"></i>
            </a>
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-pinterest-alt"></i>
            </a>
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-instagram"></i>
            </a>
            <a href="#" className="link ml-1 mr-1 bg-light">
              <i className="ti-rss"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
