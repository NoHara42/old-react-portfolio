import React from 'react';
import './App.css';

function App() {
  return (
    <div class="App">
      <div class="container">
        <section id="LandingPage">
          <div class="landing-flex-grid">
            <img class="profile-picture" src={require("./assets/resizedprofilepicture.jpg")}></img>
            <h1 class="name">Ned O'Hara</h1>
            <h1 class="occupation">Developer / Visual Artist</h1>
          </div>
        </section>
        <section id="GreetingPage">
          <div class="animation-container">
            <div class="light"/>
            <div class="dawn"/>
            <div class="sea"/>
            <div class="greeting-container">
              <div class="greeting">Good morning</div>
            </div>
            <div class="sun-container">
              <div class="sun"/>
            </div>
            <div class="sky"/>
          </div>
        </section>

        <section id="ContentsPage">
          <div class="contents-flex-grid">
            <h1 class="contents-title">Portfolio Contents</h1>
            <a href="#AboutMePage" class="contents-icon"><img class="contents-image" src={require("./assets/aboutme.svg")}></img></a>
            <a class="contents-links" href="#AboutMePage"><h1 class="contents-text">About Me</h1></a>
            <a class="contents-icon" href="#EducationPage"><img class="contents-image" src={require("./assets/education.svg")}></img></a>
            <a class="contents-links" href="#EducationPage"><h1 class="contents-text">Education</h1></a>
            <a class="contents-icon" href="#WorkExperiencePage"><img class="contents-image" src={require("./assets/workexperience.svg")}></img></a>
            <a class="contents-links" href="#WorkExperiencePage"><h1 class="contents-text">Work Experience</h1></a>
            <a class="contents-icon" href="#ShowCasePage1"><img class="contents-image" src={require("./assets/showcase.svg")}></img></a>
            <a class="contents-links" href="#ShowCasePage1"><h1 class="contents-text">Show Case</h1></a>
          </div>
        </section>
        <section id="AboutMePage">
          <h1>About Me Page</h1>
        </section>
        <section id="EducationPage">
          <h1>Education Page</h1>
        </section>
        <section id="WorkExperiencePage">
          <h1>Work Experience Page</h1>
        </section>
        <section id="ShowCasePage1">
          <h1>Show Case 1</h1>
        </section>
        <section id="ShowCasePage2">
          <h1>Show Case 2</h1>
          <a href="#LandingPage"><p>Back to top.</p></a>
        </section>
                        
      </div>
    </div>
  );
}

export default App;
