import logo from "./logo.svg";
import git from './img/git.jpg';
import figma from './img/figma.png';
import react from './img/react.jpg';
import hng from "./img/hng.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hng} className="Article-logo" alt="hng" />
        <h1 className="App-header-text"> Article on HNG Internship </h1>
      </header>

      <body>
        <div className="content">
          <h2 className = "pageTitle"> Introduction </h2>
          <p className = "paragraph">
            Hey there! I am Onuoha Olivia Chinwendu. A front-end HNG 8 internship
            developer. My goals for the 8 weeks internship is as follows:

            <ul>
              <li>
                To develop and grow my passion for interactive, attractive and user friendly weba and mobile applications.
              </li>
              <li>
                To learn rigorous front-end development in a face-paced environement.
              </li>
              <li>
                To learn to work with focus-driven team members and learn as much as I can working with them.
              </li>
              <li>
                To form valuable networks and bonds with other interns.
              </li>
              <li>
                To learn different techniques and technologies for development.
              </li>
              <li>
                To possibly give back as an HNG mentor after I pass the rounds.
              </li>
              <li>
                I want to be able to build useful mobile and web applications with confidence after this face-paced internship.
              </li>
            </ul>
          </p>
        
          <div className = "tutorials">
          <h2 className = "pageTitle"> Tutorials for Developers </h2>
            <p> Below are different tutorials for front-end developers. They include GitHub, Figma and React Framework. Continue reading and follow the links to the tutorial! </p>
            <h3> GitHub</h3>
            <img src={git} className="logos" alt="hng" />
              <p> GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and Pull Requests. Click here to {} 
              <a
              className="App-link"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn how to use GitHub.
            </a>  
            </p>

            <h3> Figma</h3>
            <img src={figma} className="logos" alt="hng" />
              <p> Figma is a web-based (with a companion desktop app enabled by Electron) UI design and prototyping tool. In this tutorial, I create a mobile layout while discovering many of its features. {}
              <a
              className="App-link"
              href="https://www.figma.com/resources/learn-design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn how to use Figma.
            </a>  
            </p>

          <h3> React </h3>
          <img src={react} className="logos" alt="hng" />
          <p>
            React is a JavaScript library for building user interfaces.{}
          <a
              className="App-link"
              href="https://www.tutorialspoint.com/react_native/index.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn what React and React Native are about here.
            </a> 
          </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
