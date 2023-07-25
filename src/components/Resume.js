import ReactResume from "../assets/react-resume.pdf";
import React, { useState } from "react";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);
  const handleClick = () => setShowPdf(!showPdf);

  return (
    <>
      <div className="resume">
        <h2>Resume</h2>
        <p>
          Click{" "}
          <a href="#" onClick={handleClick}>
            here
          </a>{" "}
          to view Brian's resume
        </p>
        {showPdf ? (
          <div>
            <object
              width="100%"
              height="800"
              data={ReactResume}
              type="application/pdf"
            />
          </div>
        ) : (
          <>
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
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
          </>
        )}
      </div>
    </>
  );
}
