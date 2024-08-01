import { useRef, useState } from "react";
import "./styles.css";

// This is an example showcasing how useRef and useState can be used for their
// specific use cases.

export default function Index() {
  return (
    <div>
      <h1>useState vs useRef</h1>
      <hr />

      <BasicExample />
      <br />
      <hr />

      <DomReferenceExample />
      <br />
      <hr />

      <ScrollExample />
      <br />
      <hr />
    </div>
  );
}

function BasicExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("-- rendering --");
  logValues();

  function logValues() {
    console.log(`state: ${count}, ref: ${countRef.current}, var: ${countVar}`);
  }

  function handleStateIncrement() {
    setCount(count + 1);
    logValues();
  }

  function handleRefIncrement() {
    countRef.current += 1;
    logValues();
  }

  function handleVarIncrement() {
    countVar += 1;
    logValues();
  }

  return (
    <div>
      <h2>Basic example</h2>
      <p>State value: {count}</p>
      <p>Ref value: {countRef.current}</p>
      <p>Variable value: {countVar}</p>
      <button onClick={handleStateIncrement}>Increment state</button>{" "}
      <button onClick={handleRefIncrement}>Increment ref</button>{" "}
      <button onClick={handleVarIncrement}>Increment var</button>
    </div>
  );
}

function DomReferenceExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>DOM reference</h2>
      <p>Click the button to focus the input</p>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
}

const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
  vehicula, nunc nec ultricies condimentum, mi nunc ultricies elit, vel
  ultrices odio neque vitae elit. Nullam vehicula, nunc nec ultricies
  condimentum, mi nunc ultricies elit, vel ultrices odio neque vitae
  elit. Nullam vehicula, nunc nec ultricies condimentum, mi nunc
  ultricies elit, vel ultrices odio neque vitae elit. Nullam vehicula,
`;

function ScrollExample() {
  const [realScrollPosition, setRealScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const refFirst = useRef<HTMLDivElement>(null);
  const refSecond = useRef<HTMLDivElement>(null);
  const refThird = useRef<HTMLDivElement>(null);
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  function handleScrollAll() {
    if (refFirst.current) {
      const position = Math.floor(refFirst.current.scrollLeft / 100);
      setRealScrollPosition(refFirst.current.scrollLeft);
      setScrollPosition(position);
    }
  }

  function handleScroll100() {
    if (refSecond.current) {
      const position = Math.floor(refSecond.current.scrollLeft / 100);
      setScrollPosition(position);
    }
  }

  function handleScrollChange() {
    if (refThird.current) {
      const position = Math.floor(refThird.current.scrollLeft / 100);
      if (position !== scrollPosition) {
        setScrollPosition(position);
      }
    }
  }

  console.log("-- rendering --");

  return (
    <div>
      <h2>Scroll position</h2>
      <p>Real scroll position: {realScrollPosition}</p>
      <p>Scroll position: {scrollPosition}</p>

      <div className="bg-bar" style={{ backgroundColor: randomColor }} />

      <div ref={refFirst} onScroll={handleScrollAll} className="scrollable">
        <p className="scrollable-bar">{loremIpsum}</p>
      </div>
      <br />

      <div ref={refSecond} onScroll={handleScroll100} className="scrollable">
        <p className="scrollable-bar">{loremIpsum}</p>
      </div>
      <br />

      <div ref={refThird} onScroll={handleScrollChange} className="scrollable">
        <p className="scrollable-bar">{loremIpsum}</p>
      </div>
    </div>
  );
}
