import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {" "}
          Coronavirus disease 2019 (COVID-19) is an infectious disease caused by
          severe acute respiratory syndrome coronavirus 2. It was first
          identified in December 2019 in Wuhan, Hubei, China, and has resulted
          in an ongoing pandemic. The first confirmed case has been traced back
          to 17 November 2019 in Hubei. As of 26 July 2020, more than 16.1
          million cases have been reported across 188 countries and territories,
          resulting in more than 645,000 deaths. More than 9.28 million people
          have recovered. The virus is primarily spread between people during
          close contact, most often via small droplets produced by coughing,[b]
          sneezing, and talking. The droplets usually fall to the ground or onto
          surfaces rather than travelling through air over long distances.
          Transmission may also occur through smaller droplets that are able to
          stay suspended in the air for longer periods of time. Less commonly,
          people may become infected by touching a contaminated surface and then
          touching their face. It is most contagious during the first three days
          after the onset of symptoms, although spread is possible before
          symptoms appear, and from people who do not show symptoms. The
          standard method of diagnosis is by real-time reverse transcription
          polymerase chain reaction (rRT-PCR) from a nasopharyngeal swab. Chest
          CT imaging may also be helpful for diagnosis in individuals where
          there is a high suspicion of infection based on symptoms and risk
          factors; however, guidelines do not recommend using CT imaging for
          routine screening
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
