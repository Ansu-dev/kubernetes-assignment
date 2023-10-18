import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res);
        setResponse(res.data);
      })
      .catch(() => {
        setResponse("Server Response Fail");
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SERVER RESPONSE : {response}</p>
      </header>
    </div>
  );
};

export default Home;
