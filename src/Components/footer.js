import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contact information</h5>
                <p></p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><FontAwesomeIcon icon={faFacebook} className="fa-xl" />/a></li>
                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} className="fa-xl" </a></li>
           
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><FontAwesomeIcon icon={faFacebook} className="fa-xl" </a></li>
                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} className="fa-xl" </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
      A.E
    </div>

</footer>

export default Footer;
