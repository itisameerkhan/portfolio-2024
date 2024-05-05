import ReactDOM from "react-dom/client";
import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Tools from "../Pages/Tools/Tools.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Hero />
            <About />
            <Skills />
          </div>
        ),
      },
    ],
  },
  {
    path: "/tools",
    element: <Tools />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
