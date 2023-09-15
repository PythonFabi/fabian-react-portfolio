import React from "react";
import myResume from '../../docs/resume-canada.docx';

function Resume() {
  return (
    <div className="resume pages">
      <h2>Resume</h2>
      <p>Download my <a href={myResume} download="resume-canada.docx" className="resume-download">resume</a></p>

      <div className="proficiencies">
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Handlebars</li>
        <li>Bootstrap</li>
      </ul>
      </div>

    <div className="proficiencies">
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </div>
      
    <div className="proficiencies">
      <h3>Full Stack Proficiencies</h3>
      <ul>
        <li>MERN</li>
      </ul>
      </div>
    </div>
  );
}

export default Resume;