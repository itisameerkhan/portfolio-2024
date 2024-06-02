import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Links from "./Pages/Links/Links.jsx";
import Internship from "./Pages/Internship/Internship.jsx";
import Footer from "./components/Footer/Footer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: [<About />, <Footer />],
  },
  {
    path: "/projects",
    element: [<Projects />, <Footer />],
  },
  {
    path: "/skills",
    element: [<Skills />, <Footer />],
  },
  {
    path: "/socials",
    element: [<Links />, <Footer />],
  },
  {
    path: "/internships",
    element: [<Internship />, <Footer />],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
