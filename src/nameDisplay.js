import "./App.css";
import hng from "./img/hng.jpg";

function Display (){
    return (
        <div className="display">
            <img src={hng} className="logos" alt="hng" />
            <h1 className="display-text"> HNG Internship Task 2</h1>
                <span className ="display-text"> Click <a
              className="App-link"
              href="https://hng.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>  to learn more about HNG Internship </span>
        <p className = "display-text display-text-paragraph"> I am Onuoha Olivia Chinwendu </p>
      </div>
    )
}

export default Display;