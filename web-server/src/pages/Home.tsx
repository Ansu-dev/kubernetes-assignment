import { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    axios
      .get(process.env.BASE_URL ?? "http://localhost:8080/api")
      .then((res) => {
        setResponse(res.data);
      })
      .catch(() => {
        setResponse("Server API Request Failed");
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
