import About from "layouts/About";
import Business from "layouts/Business";
import Companies from "layouts/Companies";
import Contact from "layouts/Contact";
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
      {/* <div className="mb-300px">
        <Companies />
      </div>
      <div className="mb-200px">
        <Security />
      </div>
      <div>
        <About />
      </div>
      <Business />
      <Contact /> */}
    </div>
  );
}

export default App;
