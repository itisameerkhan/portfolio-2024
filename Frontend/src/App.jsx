import { useEffect, useState } from "react";
import "./App.scss";
import Context from "./components/Context/Context";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import { helloArray } from "./utils/constants";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayHello, setdisplayHello] = useState("Hello");

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const handleBeforeUnload = () => setIsLoading(true);

    window.addEventListener("load", handleLoad);
    window.addEventListener("<beforeunload", handleBeforeUnload);

    const handleHello = () => {
      setInterval(() => {
        setdisplayHello(
          helloArray[Math.floor(Math.random() * helloArray.length)]
        );
      }, 300);
    };

    handleHello();

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="hello">
          <p>• {displayHello}</p>
        </div>
      ) : (
        <div className="app">
          <Hero />
          <Context />
          <Overview />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
