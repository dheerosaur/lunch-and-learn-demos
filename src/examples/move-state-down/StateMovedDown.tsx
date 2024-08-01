import { useState } from "react";
import Canvas from "../Canvas";

export default function StateMovedDown() {
  return (
    <div className="menu-circle">
      <MenuButton />
      <Canvas />
    </div>
  );
}

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
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
  );
}
