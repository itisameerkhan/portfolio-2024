import Hero from "../components/Hero/Hero";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <AnimatedCursor
        color="#111111"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "3px solid white"
        }}
        innerStyle={{
          backgroundColor: "white"
        }}

      />
    </div>
  );
};

export default App;
