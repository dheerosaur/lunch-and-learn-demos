import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ChildrenAsProps from "./examples/children-as-props";
import MoveStateDown from "./examples/move-state-down";
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
    path: "/move-state-down",
    element: <MoveStateDown />,
  },
  {
    path: "/use-state-vs-use-ref",
    element: <UseStateVsUseRef />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
