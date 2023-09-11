import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer () {
    return (
        <footer className="footer fixed-bottom">
            <a className="icon-links" href="https://github.com/PythonFabi"><FontAwesomeIcon icon={faGithub} /></a>
        </footer>
    )
}

export default Footer;