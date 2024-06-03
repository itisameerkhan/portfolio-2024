import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Links from "./Pages/Links/Links.jsx";
import Internship from "./Pages/Internship/Internship.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <App />],
  },
  {
    path: "/about",
    element: [<Navbar />, <About />, <Footer />],
  },
  {
    path: "/projects",
    element: [<Navbar />, <Projects />, <Footer />],
  },
  {
    path: "/skills",
    element: [<Navbar />, <Skills />, <Footer />],
  },
  {
    path: "/socials",
    element: [<Navbar />, <Links />, <Footer />],
  },
  {
    path: "/internships",
    element: [<Navbar />, <Internship />, <Footer />],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
