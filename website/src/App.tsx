import "@mantine/core/styles.css";
import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      { index: true, Component: Home },
      { path: "/services", Component: Services },
      { path: "/portfolio", Component: Portfolio },
      { path: "/contact", Component: Contact },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
