import { useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const lazyWithDelay = (factory, delayMs = 2000) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise(resolve => setTimeout(resolve, delayMs))
    ]).then(([module]) => module)
  )

const Home = lazyWithDelay(() => import('./Components/Home'))
const Services = lazy(() => import("./Components/Services"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
