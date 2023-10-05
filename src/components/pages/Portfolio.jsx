import React from "react";
// import Project components
import Project from "./Project";

// Portfolio component that uses the Project component with the same structure but different values for each Project
function Portfolio() {
  return (
    <div className="portfolio pages">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap">
        {/* ClotheStation */}
      <Project
          className="clothestation single-project"
          link="https://urban-sk8-ef054e6c42c1.herokuapp.com/"
          title="Clothestation"
          githublink="https://github.com/cdelacruzzin/ClotheStation"
          description="MERN Stack APP"
        />
        {/* Mode de Vie */}
        <Project
        // pass in classes for individual project to handle different backgrounds and single project class
          className="mode-de-vie single-project"
          // pass link for the deployed app
          link="https://warm-caverns-23380-13159eb09b79.herokuapp.com/"
          // pass in title of app
          title="Mode de Vie"
          // pass in corresponding github link
          githublink="https://github.com/PythonFabi/mode-de-vie"
          // technical description for corresponding app
          description="MVC APP"
        />
     
        {/* Fit with Vids */}
        <Project
          className="fit-with-vids single-project"
          link="https://pythonfabi.github.io/Fit-with-Vids/"
          title="Fit with Vids"
          githublink="https://github.com/PythonFabi/Fit-with-Vids"
          description="Front-end app with server-side APIs"
        />
        {/* Tech Blog */}
        <Project
          className="my-tech-blog single-project"
          link="https://glacial-fortress-55574-019570e3c30e.herokuapp.com/"
          title="My Tech Blog"
          githublink="https://github.com/PythonFabi/my-tech-blog"
          description="MVC APP"
        />
        {/* Social Network API */}
        <Project
          className="social-network-api single-project"
          link="https://drive.google.com/file/d/1FfFFYJheWD2tk9HWz4Ra5fbUFJvjF424/view"
          title="Social Network API"
          githublink="https://github.com/PythonFabi/my-social-network-api"
          description="Back-end Express.js app with MongoDB"
        />
        {/* Employee-Tracker
        <Project
          className="employee-tracker single-project"
          link="https://drive.google.com/file/d/1J8Eac3SRjXf4tKRDQbD1gBVwkK4TMqTl/view"
          title="Employee Tracker"
          githublink="https://github.com/PythonFabi/my-employee-tracker"
          description="Node.js App with SQL"
        /> */}
        {/* Weather Dashboard */}
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
