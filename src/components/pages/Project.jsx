import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project (props) {
    return (
        <div className={props.className} >
            <a href={props.link}><h3>{props.title}</h3></a>
            <a className="icon-links" href={props.githublink}><FontAwesomeIcon icon={faGithub} /></a>
            <p>{props.description}</p>
        </div>
    );
}

export default Project;