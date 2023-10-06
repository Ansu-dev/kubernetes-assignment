import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/web" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
