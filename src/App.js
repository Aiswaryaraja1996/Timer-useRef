import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [state, setState] = useState(0);
  const timeRef = useRef(null);

  useEffect(() => {
    return pauseTimer;
  }, []);
  const startTimer = () => {
    if (timeRef.current === null) {
      timeRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
    }
  };
  const pauseTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };
  const ref = useRef(null);

  const handleMovetoTop = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };
  return (
    <div className="App">
      <div>{state}</div>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
      <br/>
      <br/>
      <div>
        <button onClick={handleMovetoTop}>Move to Top</button>
      <br/>
      <br/>
        <div
          ref={ref}
          style={{
            maxHeight: 200,
            overflow: "auto",
            border: "1px solid black",
            padding: 20,
            width: 200,
            margin:"auto"
          }}
        >
          <div style={{ height: "auto", border: "1px solid black" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
