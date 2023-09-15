import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project (props) {
    return (
        <div className={props.className} >
         <div className="project-content">
            <a href={props.link}><h3>{props.title}</h3></a>
            <a className="project-icon" href={props.githublink}><FontAwesomeIcon icon={faGithub} /></a>
            <p>{props.description}</p>
         </div>
        </div>
    );
}

export default Project;