import React, { Component } from 'react';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import deflag from './assets/deflag.png';
import ukflag from './assets/ukflag.png';
import { edu } from './assets/education.svg';
import { work } from './assets/workexperience.svg';
import BubbleChart from '@weknow/react-bubble-chart-d3';

class App extends Component {
  render() {
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
                <div class="greeting">Hello</div>
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
              <a class="contents-icon" href="#ShowCasePage1"><img class="contents-image" src={require("./assets/showcase.svg")}></img></a>
              <a class="contents-links" href="#ShowCasePage1"><h1 class="contents-text">Show Case</h1></a>
            </div>
          </section>
          <section id="AboutMePage">
            <h2>My hobbies:</h2>
            <BubbleChart
              width={700}
              height={700}
              fontFamily="Maven Pro"
              overflow={true}
              legendFont={{
                family: "Maven Pro",
                size: 14,
                color: '#013535',
                weight: 'bold'
              }}
              valueFont={{
                family: "Maven Pro",
                size: 14,
                color: 'transparent',
                weight: 'bold',
              }}
              labelFont={{
                family: "Maven Pro",
                size: 16,
                color: "white",
                weight: 'bold'
              }}
              data={[
                { label: 'Guitar', value: 20 },
                { label: 'Design', value: 35 },
                { label: 'Esperanto', value: 7 },
                { label: 'Croatian', value: 4 },
                { label: 'Basketball', value: 25 },
                { label: 'Cooking', value: 13 }                   
              ]}
            />
          </section>
          <section id="AboutMePage2">
            <h2>Professional hobbies:</h2>
            <BubbleChart
              width={800}
              height={800}
              fontFamily="Maven Pro"
              overflow={true}
              legendFont={{
                family: "Maven Pro",
                size: 14,
                color: '#013535',
                weight: 'bold'
              }}
              valueFont={{
                family: "Maven Pro",
                size: 16,
                color: 'transparent',
                weight: 'bold',
              }}
              labelFont={{
                family: "Maven Pro",
                size: 18,
                color: "white",
                weight: 'bold'
              }}
              data={[
                { label: 'Back-End', value: 40 },
                { label: 'Front-End', value: 25 },
                { label: 'Java', value: 10 },
                { label: 'C#', value: 8 },
                { label: 'MySQL', value: 5 },
                { label: 'CSS', value: 5 },
                { label: 'HTML', value: 5 },
                { label: 'React', value: 2 },
                { label: 'JavaScript', value: 5 },
                { label: 'Python', value: 5 }
        
              ]}
            />
          </section>
          <section id="EducationPage">
            <h2>Education</h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#013535', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #013535' }}
                date={<div class="date-text">2014 - 2016</div>}
                iconStyle={{ background: '#013535', color: '#fff' }}
              >
                <img class="flag-size" src={ukflag}></img>
                <h3 className="vertical-timeline-element-title">Completed A-Levels at Esher College</h3>
                <h4 className="vertical-timeline-element-subtitle">Surrey, England</h4>
                <p />
                <div>A-Levels in:</div>
                <p />
                <div>~ Mathematics, Physics, Chemistry (A-Levels)</div>
                <div>~ Geology (AS)</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#013535', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #013535' }}
                date={<div class="date-text">2017 - Current</div>}
                iconStyle={{ background: '#013535', color: '#fff' }}
              // icon={<svg class="flag-size" src={edu}></svg>}
              >
                <img class="flag-size" src={deflag}></img>
                <h3 className="vertical-timeline-element-title">Studying Digital Humanities (B.Sc)</h3>
                <h4 className="vertical-timeline-element-subtitle">Leipzig, Germany</h4>
                <p />
                <div>What is DH?</div>
                <p />
                <div>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with social sciences.</div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
          <section id="WorkExperiencePage">
            <h2>Work Experience</h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#013535', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #013535' }}
                date={<div class="date-text">2016 - 2017</div>}
                iconStyle={{ background: '#013535', color: '#fff' }}
              >

                <h3 className="vertical-timeline-element-title">Coworking Community Manager</h3>
                <h4 className="vertical-timeline-element-subtitle">Basislager Coworking, Leipzig</h4>
                <p/>
                <div>~ Event management</div>
                <div>~ Community management. (Offline and Online.)</div>
                <div>~ Organisation of event formats.</div>
                <div>~ Facilitation of creative culture principles and values.</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#013535', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #013535' }}
                date={<div class="date-text">2016 - 2017</div>}
                iconStyle={{ background: '#013535', color: '#fff' }}
              >

                <h3 className="vertical-timeline-element-title">Student Researcher</h3>
                <h4 className="vertical-timeline-element-subtitle">Digital City Department, City of Leipzig</h4>
                <p/>
                <div>~ Automation programming and the digitalisation of bureaucratic processes.</div>
                <div>~ Project management and organisation of citizen-participation initiatives.</div>
                <div>~ 'Smart City'-based research.</div>

              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#013535', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #013535' }}
                date={<div class="date-text">2016 - 2017</div>}
                iconStyle={{ background: '#013535', color: '#fff' }}
              >

                <h3 className="vertical-timeline-element-title">Back-End Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">eCommeleon</h4>
                <p/>
                <div>~ Integrated Walmart marketplace, facilitating large transaction inserts to MySQL databases.</div>
                <div>~ Built Windows Desktop Applications to facilitate this.</div>
                <div>~ Responsible for writing technical documentation.</div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
          <section id="ShowCasePage1">
            <h2>Show Case 1</h2>
          </section>
          <section id="ShowCasePage2">
            <h2>Show Case 2</h2>
          </section>
          <section id="ContactPage">
          <a href="#LandingPage"><p>Back to top.</p></a>

          </section>
        </div>
      </div>
    );
  }
}

export default App;
