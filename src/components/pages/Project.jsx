import React from "react";
// import FontAwesomeIcon from fontawesome npm package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import github icon from fontawesome
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Project component that takes in the props from the Portfoliopage component
function Project (props) {
    return (
        // pass in className 
        <div className={props.className} >
         <div className="project-content">
            {/* get link and title from the props */}
            <a className="project-link"href={props.link}><h3>{props.title}</h3></a>
            {/* display github link as github icon */}
            <a className="project-icon" href={props.githublink}><FontAwesomeIcon icon={faGithub} /></a>
            {/* get project-description */}
            <p className="project-description">{props.description}</p>
         </div>
        </div>
    );
}

export default Project;