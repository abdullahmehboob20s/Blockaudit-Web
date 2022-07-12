import About from "layouts/About";
import Companies from "layouts/Companies";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Security from "layouts/Security";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-200px">
        <Hero />
      </div>
      <div className="mb-300px">
        <Companies />
      </div>
      <div className="mb-200px">
        <Security />
      </div>
      <div className="mb-200px">
        <About />
      </div>
    </div>
  );
}

export default App;
