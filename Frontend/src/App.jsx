import "./App.scss";
import Context from "./components/Context/Context";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Context />
    </div>
  );
};

export default App;
