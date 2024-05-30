import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);
