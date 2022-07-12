import Companies from "layouts/Companies";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";

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
    </div>
  );
}

export default App;
