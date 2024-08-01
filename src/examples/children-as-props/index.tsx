import { useState } from "react";
import Canvas from "../Canvas";

export default function Index() {
  return (
    <div>
      <h1>Elements as props, children</h1>

      <div className="examples">
        <div>
          <h2>Render JSX directly</h2>
          <p>Canvas is rendered directly along side the menu.</p>
          <RenderAlongSide />
        </div>

        <div>
          <h2>Pass as prop</h2>
          <p>Canvas is passed down as a prop to the MenuButton</p>
          <PassedDownAsProp />
        </div>

        <div>
          <h2>children is just another prop</h2>
          <p>JSX syntactic sugar for children</p>
          <PassedDownAsChildren />
        </div>
      </div>
    </div>
  );
}

function RenderAlongSide() {
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

function PassedDownAsProp() {
  const canvas = <Canvas />;

  return <MenuButtonWithProp canvas={canvas} />;
}

function MenuButtonWithProp({ canvas }: { canvas: React.ReactNode }) {
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

      {canvas}
    </div>
  );
}

function PassedDownAsChildren() {
  const canvas = <Canvas />;

  return <MenuButton>{canvas}</MenuButton>;
}

function MenuButton({ children }: { children: React.ReactNode }) {
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

      {children}
    </div>
  );
}
