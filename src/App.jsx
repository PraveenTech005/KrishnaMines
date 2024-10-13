import About from "./pages/About";
import Awards from "./pages/Awards";
import Care from "./pages/Care";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="absolute flex flex-col w-full h-full">
      <Home />
      <About />
      <Product />
      <Care />
      <Awards />
      <Contact />
    </div>
  );
};

export default App;
