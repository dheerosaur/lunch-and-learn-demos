import { useState } from 'react';
import './App.css';

function App() {
  return (
    <nav>
      <ul>
        <li>
          <a href={`/example-1`}>Your Name</a>
        </li>
        <li>
          <a href={`/example-2`}>Your Friend</a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
