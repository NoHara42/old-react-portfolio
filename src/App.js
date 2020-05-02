import React, { Component } from 'react';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import deflag from './assets/deflag.png';
import ukflag from './assets/ukflag.png';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import eCommeleonLogo from './assets/eCommeleonCentered.png';
import basislagerLogo from './assets/basislagerCentered.png';
import leipzigLogo from './assets/leipzigCentered.png';
import page1 from './assets/idhPage1.png';
import page8 from './assets/idhPage8.png';
import lineChart from './assets/newspaper_sentiments_linechart.png';
import pieChart from './assets/bias_newspaper_user_piechart.png';
import brexitcrawlerpdf from './assets/BrexitTwitterCrawler_DigitalHumanitiesProject.pdf';
import OnVisible from 'react-on-visible';
import pieChart2 from './assets/bias_hashtags_count_piechart.png';
class App extends Component {

  constructor() {
    super();
    var temp1 = (window.innerWidth < 812) ? 10 : 14;
    var temp2 = (window.innerHeight < window.innerWidth) ? window.innerHeight : window.innerWidth;
  
    this.state = {
      estimatedFont: temp1,
      smallestAxisLength : temp2,
    }
  }

  render() {    
    
    console.log("Height: "+window.innerHeight+" - Width: "+window.innerWidth+" - SmallestAxisLength: "+this.state.smallestAxisLength);
    return (
      <div class="App">
        <div class="container">
          <section id="LandingPage">
            <div class="landing-flex-grid">
              <img class="profile-picture" src={require("./assets/resizedprofilepicture.jpg")}></img>
              <h1 class="name">Ned O'Hara</h1>
              <h1 class="occupation">Developer / Designer</h1>
            </div>
          </section>
          
          <section id="GreetingPage">
              <div class="animation-container">
                  <div class="light" />
                  <div class="dawn" />
                  <div class="sea" />
                  <div class="greeting-container">
                    {/* <div class="greeting">Hello</div> */}
                  </div>
                      <OnVisible
                        percent={10}
                        className="sun-container-active"
                      >
                        <div class="sun-container" >
                            <div class="sun"/>
                        </div>
                      </OnVisible>
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
              <a class="contents-icon" href="#ContactPage"><img class="contents-image" src={require("./assets/mail-outline.svg")}></img></a>
              <a class="contents-links" href="#ContactPage"><h1 class="contents-text">Contact</h1></a>
            </div>
          </section>
          <section id="AboutMePage">
            <h2>My hobbies:</h2>
            <BubbleChart
              height={this.state.smallestAxisLength * 0.9}
              width={this.state.smallestAxisLength * 0.9}
              fontFamily="Maven Pro"
              overflow={true}
              legendFont={{
                family: "Maven Pro",
                // size: this.state.estimatedFont,
                color: '#013535',
                weight: 'regular',
                size: 25*(this.state.smallestAxisLength/1080)

              }}
              valueFont={{
                family: "Maven Pro",
                // size: this.state.estimatedFont,
                color: 'transparent',
                weight: 'regular',
                size: 25*(this.state.smallestAxisLength/1080)
              }}
              labelFont={{
                family: "Maven Pro",
                // size: this.state.estimatedFont,
                color: "white",
                weight: 'regular',
                size: 25*(this.state.smallestAxisLength/1080),
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
            <h2>My professional hobbies:</h2>
            <BubbleChart
              height={this.state.smallestAxisLength * 0.9}
              width={this.state.smallestAxisLength * 0.9}
              fontFamily="Maven Pro"
              overflow={true}
              legendFont={{
                family: "Maven Pro",
                size: Number(25*(this.state.smallestAxisLength/1080)),
                // size: this.state.estimatedFont,
                color: '#013535',
                weight: 'regular'
              }}
              valueFont={{
                family: "Maven Pro",
                size: Number(25*(this.state.smallestAxisLength/1080)),
                // size: this.state.estimatedFont,
                color: 'transparent',
                weight: 'regular',
              }}
              labelFont={{
                family: "Maven Pro",
                size: Number(25*(this.state.smallestAxisLength/1080)),
                // size: this.state.estimatedFont,
                color: "white",
                weight: 'regular'
              }}
              data={[
                { label: 'Back-End', value: 40 },
                { label: 'Front-End', value: 25 },
                { label: 'Java', value: 10 },
                { label: 'C#', value: 8 },
                { label: 'MySQL', value: 5 },
                { label: 'CSS', value: 5 },
                { label: 'HTML', value: 5 },
                { label: 'JS', value: 5 },
                { label: 'Python', value: 5 },
                { label: 'React', value: 5 }
        
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
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img class="flag-size" src={ukflag}></img>}
              >
                {/* <img class="flag-size" src={ukflag}></img> */}
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
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img class="flag-size" src={deflag}></img>}
              >
                {/* <img class="flag-size" src={deflag}></img> */}
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
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img class="logo-size" src={basislagerLogo}></img>}
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
                date={<div class="date-text">2018-2019</div>}
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img class="logo-size leipzig-logo" src={leipzigLogo}></img>}            
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
                date={<div class="date-text">2019-2020</div>}
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img class="logo-size" src={eCommeleonLogo}></img>}
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
            <div className="showcase-container">
              <div className="showcase-gallery">
                <img className="showcase-page" src={page1} ></img>
                <div className="showcase-graphs">
                  <img className="showcase-linechart" src={lineChart}></img>
                  <div className="showcase-whitespace"></div>
                  <img className="showcase-piechart2" src={pieChart2}></img>
                  <div className="showcase-whitespace"></div>
                  <img className="showcase-piechart" src={pieChart}></img>
                </div>
              </div>
              <div className="showcase-text">
                <h2 className="showcase-title">Brexit Twitter Crawler</h2>
                <div className="showcase-description">We built a Twitter crawler, (a program that collects data from an API) to analyse the sentiment (reaction) of tweets of various UK newspaper publisher's followers - throughout the Brexit saga. 
                  
                  <div className="showcase-link">
                    <a href="https://github.com/NoHara42/nohara42.github.io/blob/dev/src/assets/BrexitTwitterCrawler_DigitalHumanitiesProject.pdf">
                        See the paper here.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section id="ShowCasePage2">
            <h2>// Showcase 2 // Under construction //</h2>
          </section> */}
          <section id="ContactPage">
           <div class="contact-flex-grid">
              <h1 class="contents-title">Contact me!</h1>
              <a class="contents-icon" href="https://www.facebook.com/ned.ohara"><img class="contents-image" src={require("./assets/logo-facebook.svg")}></img></a>
              <a class="contents-links" href="https://www.facebook.com/ned.ohara"><h1 class="contents-text">Facebook</h1></a>
              <a class="contents-icon" href="https://www.linkedin.com/in/ned-o-hara-b5840b127/"><img class="contents-image" src={require("./assets/logo-linkedin.svg")}></img></a>
              <a class="contents-links" href="https://www.linkedin.com/in/ned-o-hara-b5840b127/"><h1 class="contents-text">LinkedIn</h1></a>
              <a class="contents-icon" ><img class="contents-image" src={require("./assets/call-outline.svg")}></img></a>
              <a class="contents-links" ><h1 class="contents-text">+&#052;&#057;&#049;&#053;&#050;&#053;&#055;&#048;&#049;&#051;&#054;&#056;&#048;</h1></a>
              <a class="contents-icon" href="mailto:&#109;&#097;&#105;&#108;&#110;&#101;&#100;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"><img class="contents-image" src={require("./assets/mail-outline.svg")}></img></a>
              <a class="contents-links" href="mailto:&#109;&#097;&#105;&#108;&#110;&#101;&#100;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"><h1 class="contents-text"> &#109;&#097;&#105;&#108;&#110;&#101;&#100;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</h1></a>
            </div>
          </section>
          <div>
            <a className="back-to-top" href="#LandingPage">Back to top.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
