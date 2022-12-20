import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsEnvelope } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="d-flex flex-column gap-3 flex-md-row justify-content-between">
          <div md="4">
            <img style={{ width: "70px" }} src={logo} alt="" />
            <p className="mt-2">
              Get Snappy is an individual <br /> photography service provider.
            </p>
          </div>
          <div md="4">
            <h5>Quick Links</h5>
            <ul className="p-0 list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none text-dark">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-decoration-none text-dark">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div md="4">
            <h5>Contact</h5>
            <ul className="p-0 list-unstyled">
              <li>
                <HiOutlineDeviceMobile></HiOutlineDeviceMobile> +1 123-456-0606
              </li>
              <li>
                <BsEnvelope></BsEnvelope> get@snappy.com
              </li>
              <li>
                <SlLocationPin></SlLocationPin> 120 King St, Charleston SC
                29401, USA
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center m-0">Copyright &copy; 2022 Get Snappy</p>
      </Container>
    </div>
  );
};

export default Footer;
