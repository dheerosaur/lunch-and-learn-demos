import "./App.css";

const routes = [
  {
    path: "/children-as-props",
    name: "Children as Props",
  },
  {
    path: "/contain-state",
    name: "Contain State",
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
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default App;
