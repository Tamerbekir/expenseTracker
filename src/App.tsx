import { Routes, Route } from "react-router-dom";
import {Home, Navbar, Settings, Expenses }from "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
    </>
  );
}

export default App;
