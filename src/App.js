import React from 'react';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import deflag from './assets/deflag.png';
import ukflag from './assets/ukflag.png';

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
            <div class="light" />
            <div class="dawn" />
            <div class="sea" />
            <div class="greeting-container">
              <div class="greeting">Good morning</div>
            </div>
            <div class="sun-container">
              <div class="sun" />
            </div>
            <div class="sky" />
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
            <a class="contents-icon" href="#ShowCasePage2"><img class="contents-image" src={require("./assets/showcase.svg")}></img></a>
            <a class="contents-links" href="#ShowCasePage2"><h1 class="contents-text">Show Case</h1></a>
          </div>
        </section>
        <section id="AboutMePage">
          <h2>About Me Page</h2>
        </section>
        <section id="EducationPage">
          <h2>Education</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#013535', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #013535' }}
              date="2014 - 2016"
              iconStyle={{ background: '#013535', color: '#fff' }}
              icon={<img class="flag-size" src={ukflag}></img>}
            >
              <h3 className="vertical-timeline-element-title">Completed A-Levels at Esher College</h3>
              <h4 className="vertical-timeline-element-subtitle">Surrey, England</h4>
              <p>
                A-Levels in:
                <p />
                ~ Mathematics, Physics, Chemistry (A-Levels)
                <p />
                ~ Geology (AS)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#00564b', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #00564b' }}
              date="2017 - Current"
              iconStyle={{ background: '#00564b', color: '#fff' }}
              icon={<img class="flag-size" src={deflag}></img>}
            >
              <h3 className="vertical-timeline-element-title">Studying Digital Humanities (B.Sc)</h3>
              <h4 className="vertical-timeline-element-subtitle">Leipzig, Germany</h4>
              <p>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with social sciences.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
        <section id="WorkExperiencePage">
          <h2>Work Experience</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#00564b', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #00564b' }}
              date="2017 - Current"
              iconStyle={{ background: '#00564b', color: '#fff' }}
              icon={<img class="flag-size" src={deflag}></img>}
            >
              <h3 className="vertical-timeline-element-title">Studying Digital Humanities (B.Sc)</h3>
              <h4 className="vertical-timeline-element-subtitle">Leipzig, Germany</h4>
              <p>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with social sciences.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#00564b', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #00564b' }}
              date="2017 - Current"
              iconStyle={{ background: '#00564b', color: '#fff' }}
              icon={<img class="flag-size" src={deflag}></img>}
            >
              <h3 className="vertical-timeline-element-title">Studying Digital Humanities (B.Sc)</h3>
              <h4 className="vertical-timeline-element-subtitle">Leipzig, Germany</h4>
              <p>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with social sciences.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#00564b', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #00564b' }}
              date="2017 - Current"
              iconStyle={{ background: '#00564b', color: '#fff' }}
              icon={<img class="flag-size" src={deflag}></img>}
            >
              <h3 className="vertical-timeline-element-title">Studying Digital Humanities (B.Sc)</h3>
              <h4 className="vertical-timeline-element-subtitle">Leipzig, Germany</h4>
              <p>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with social sciences.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
        <section id="ShowCasePage1">
          <h2>Show Case 1</h2>
        </section>
        <section id="ShowCasePage2">
          <h2>Show Case 2</h2>
          <a href="#LandingPage"><p>Back to top.</p></a>
        </section>

      </div>
    </div>
  );
}

export default App;
