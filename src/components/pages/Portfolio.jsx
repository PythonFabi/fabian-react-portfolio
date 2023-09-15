import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="portfolio pages">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap">
        <Project
          className="mode-de-vie single-project"
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
          className="my-tech-blog single-project"
          link="https://glacial-fortress-55574-019570e3c30e.herokuapp.com/"
          title="My Tech Blog"
          githublink="https://github.com/PythonFabi/my-tech-blog"
          description="MVC APP"
        />
        <Project
          className="social-network-api single-project"
          link="https://drive.google.com/file/d/1FfFFYJheWD2tk9HWz4Ra5fbUFJvjF424/view"
          title="Social Network API"
          githublink="https://github.com/PythonFabi/my-social-network-api"
          description="Back-end Express.js app with MongoDB"
        />
        <Project
          className="employee-tracker single-project"
          link="https://drive.google.com/file/d/1J8Eac3SRjXf4tKRDQbD1gBVwkK4TMqTl/view"
          title="Employee Tracker"
          githublink="https://github.com/PythonFabi/my-employee-tracker"
          description="Node.js App with SQL"
        />
        <Project
          className="my-weather-dashboard single-project"
          link="https://pythonfabi.github.io/my-weather-dashboard/"
          title="Weather dashboard"
          githublink="https://github.com/PythonFabi/my-weather-dashboard"
          description="Front-end app with server-side APIs"
        />
      </div>
    </div>
  );
}

export default Portfolio;
