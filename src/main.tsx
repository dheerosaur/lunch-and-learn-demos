import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ChildrenAsProps from "./examples/children-as-props";
import ContainState from "./examples/contain-state";
import UseStateVsUseRef from "./examples/use-state-vs-use-ref";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/children-as-props",
    element: <ChildrenAsProps />,
  },
  {
    path: "/contain-state",
    element: <ContainState />,
  },
  {
    path: "/use-state-vs-use-ref",
    element: <UseStateVsUseRef />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
