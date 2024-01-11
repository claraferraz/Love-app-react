import logo from "./heart.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    state === 0 ? setState(1) : setState(0);
  };

  const onHoverHandler = (e) => {
    e.target.style.left = `${Math.ceil(Math.random() * 90)}% `;
    e.target.style.top = `${Math.ceil(Math.random() * 90)}% `;
    e.target.style.transition = "50ms";
  };

  const sentence = ["Do you love me?", "I love you too!"];

  return (
    <div className="App">
      <header className="App-header">
        <div className="btn-scape-area">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{sentence[state]}</h3>
          <div className="btn-wrapper">
            <button className="btn yes" onClick={handleClick}>
              Yes
            </button>
            <button onMouseEnter={onHoverHandler} className="btn no">
              No
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
