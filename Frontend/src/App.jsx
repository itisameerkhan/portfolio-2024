import "./App.scss";
import Context from "./components/Context/Context";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Overview2 from "./components/Overview2/Overview2";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Context />
      <Overview />
      <Overview2 />
      <Footer />
    </div>
  );
};

export default App;
