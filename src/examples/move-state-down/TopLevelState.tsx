import { useState } from "react";
import Canvas from "../Canvas";

export default function TopLevelState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="menu-circle">
      <div>
        <button onClick={toggleMenu}>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
        {isMenuOpen && (
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        )}
      </div>

      <Canvas />
    </div>
  );
}
