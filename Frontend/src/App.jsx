import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default App;
