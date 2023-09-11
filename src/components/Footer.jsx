import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin, faInstagram  } from "@fortawesome/free-brands-svg-icons";

function Footer () {
    return (
        <footer className="footer fixed-bottom text-center">
            <a className="icon-links" href="https://github.com/PythonFabi"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="icon-links" href="https://www.linkedin.com/in/fabian-wagner-70905a281/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="icon-links" href="https://instagram.com/fabi_wag_?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="icon-links" href="https://github.com/PythonFabi"><FontAwesomeIcon icon={faXTwitter} /></a>
        </footer>
    )
}

export default Footer;