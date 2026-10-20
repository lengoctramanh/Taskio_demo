import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Board from "./pages/Board";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}