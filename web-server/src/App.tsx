import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App(this: any) {
  const [time, setTime] = useState("");
  useEffect(() => {
    axios
      .get(process.env.BASE_URL ?? "http://localhost:8080")
      .then((res) => {
        setTime(String(res.data));
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SERVER TIME : {time}</p>
      </header>
    </div>
  );
}

export default App;
