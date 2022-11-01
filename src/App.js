import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [message, setmessage] = useState("Fetching..");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => setmessage(data.msg));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="App">
      <h1>React here!</h1>
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
