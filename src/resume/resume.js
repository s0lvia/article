import "./resume.scss";
import hng from "../img/hng.jpg";
import picture from "../img/picture.jpeg";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

function Resume() {
  const contact = [
    {
      title: "chinwenduonuoha00@gmail.com",
      icon: <AiIcons.AiFillMail />,
      className: "side-contact",
    },
    {
      title: "07064153602",
      icon: <AiIcons.AiFillPhone />,
      className: "side-contact",
    },
    {
      title: "https://github.com/s0lvia",
      icon: <AiIcons.AiFillGithub />,
      className: "side-contact",
    },
    {
      title: "Chinwendu Onuoha ",
      icon: <AiIcons.AiFillLinkedin />,
      className: "side-contact",
    },
  ];

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="styles.css" />
        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
      </head>
      <div>
        <div className="header">
          <img className="logo" src={hng} alt="hng" />
          <h1 className="header-text">
            {" "}
            HNG INTERNSHIP TASK 2
            <span className="link">
              <GiIcons.GiWireframeGlobe />
              &nbsp;
              <a
                style={{ color: "aliceblue" }}
                href="https://hng.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://www.hng.tech
              </a>
            </span>
          </h1>
        </div>

        <body>
          <div className="sub-header">
            <p> Application (Resume) Page. </p>
          </div>
          <section className="section">
            <div className="side-bar">
              <img className="picture" alt="me" src={picture} />
              <p className="content-header-text">
                Onuoha Chinwendu
                <span className="title"> Front-End Developer </span>
              </p>

              <p className="contact">
                <RiIcons.RiContactsFill /> Contact
                <span style={{ display: "block" }}>
                  <ul>
                    {contact.map((item, index) => {
                      return (
                        <li key={index} className={item.className}>
                          {item.icon}
                          <span style={{ marginLeft: "4px" }}>
                            {" "}
                            {item.title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </span>
              </p>

              <div>
                <p className="skill-header">
                  <GiIcons.GiSkills />
                  &nbsp; Professional Skills
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <p class="skill-title">Javascript</p>
                      <div class="progress-bar">
                        <div class="progress js-progress"></div>
                      </div>
                    </li>
                    <li>
                      <p class="skill-title">HTML</p>
                      <div class="progress-bar">
                        <div class="progress html-progress"></div>
                      </div>
                    </li>
                    <li>
                      <p class="skill-title">CSS</p>
                      <div class="progress-bar">
                        <div class="progress css-progress"></div>
                      </div>
                    </li>
                    <li>
                      <p class="skill-title">React</p>
                      <div class="progress-bar">
                        <div class="progress r-progress"></div>
                      </div>
                    </li>
                    <li>
                      <p class="skill-title">Sharepoint Dev</p>
                      <div class="progress-bar">
                        <div class="progress s-progress"></div>
                      </div>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="content">
              <div className="content-header">
                <p className="text"> Objective </p>
                <div className="wrapper">
                  <p className="content-header-description">
                    {" "}
                    I am a technology enthusiast who seeks to gain real world
                    experiences and to contribute to the progress of the
                    technological space in Nigeria, by leveraging on
                    technologies available to automate business processes.
                  </p>
                </div>

                <br />

                <div className="work-text">
                  <MdIcons.MdWork />
                  &nbsp;
                  <span>
                    <p className="bold">Work Experience</p>{" "}
                  </span>
                </div>
                <div className="resume_work">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <div className="date">2020 - till date</div>
                      <div className="info">
                        <p class="semi-bold">SGV Internship at PAU </p>
                        <p>
                          I created endpoints using Nest.js for the Merchant
                          Tenant Website we are developing.
                          <br />I was the team lead for the development of a
                          particular web page for the website.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="date">2021 - till date</div>
                      <div className="info">
                        <p class="semi-bold">INFINION Technologies</p>
                        <p>
                          I developed a website and hosted it as an intranet on
                          Microsoft teams.
                          <br />I developed a tab/mobile Power Apps Inventory
                          Management Application.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="work-text">
                  <FaIcons.FaGraduationCap />
                  &nbsp;
                  <span>
                    <p className="bold">Education</p>{" "}
                  </span>
                </div>
                <div className="resume_work">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <div className="date">October 2016 - October 2016</div>
                      <div className="info">
                        <p class="semi-bold">
                          {" "}
                          Pan-Atlantic University{" "}
                          <span className="school-desc">
                            {" "}
                            Bsc. Information Science and Media Studies (First
                            Class Honours){" "}
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="date">September 2008 - July 2020</div>
                      <div className="info">
                        <p class="semi-bold">
                          {" "}
                          Holy Child College
                          <span className="school-desc">
                            {" "}
                            Secondary School Education
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="work-text">
                  <BsIcons.BsPersonCheckFill />
                  &nbsp; Reference
                </p>
                <div style={{ marginLeft: "10px" }} className="info">
                  <p className="semi-bold">
                    {" "}
                    Pius Onobhayedo, PhD{" "}
                    <span className="school-desc">
                      {" "}
                      Head, Computer and Information Sciences Department at
                      Pan-Atlantic University (PAU){" "}
                    </span>
                  </p>
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <div className="social">
                          <AiIcons.AiFillLinkedin />
                          &nbsp;
                          <span>
                            <p>Pius Onobhayedo</p>{" "}
                          </span>
                        </div>
                        
                      </li>
                      <li>
                        <div className="social">
                        <AiIcons.AiFillMail />
                          &nbsp;
                          <span>
                            <p className>pponobhayedo@pau.edu.ng</p>
                          </span>
                        </div>
                        
                      
                      </li>
                      <li>
                        <div className="social">
                        <AiIcons.AiFillPhone />
                          &nbsp;
                          <span>
                            <p className="bold">08037284265</p>
                          </span>
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </div>
    </html>
  );
}

export default Resume;
