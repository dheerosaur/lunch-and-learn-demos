import { Link } from "react-router-dom";
import "./App.css";

const routes = [
  {
    path: "/move-state-down",
    name: "Move State down",
  },
  {
    path: "/children-as-props",
    name: "Children as Props",
  },
  {
    path: "/use-state-vs-use-ref",
    name: "useState vs useRef",
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Examples</h1>
      <nav>
        <ol>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default App;
