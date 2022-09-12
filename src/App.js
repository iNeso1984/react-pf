import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
