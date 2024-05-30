import "./App.scss";
import Context from "./components/Context/Context";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Context />
      <Overview />
    </div>
  );
};

export default App;
