import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="portfolio pages">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap">
        <Project
          className="fit-with-vids single-project"
          link="https://warm-caverns-23380-13159eb09b79.herokuapp.com/"
          title="Mode de Vie"
          githublink="https://github.com/PythonFabi/mode-de-vie"
          description="MVC APP"
        />
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
      </div>
    </div>
  );
}

export default Portfolio;
