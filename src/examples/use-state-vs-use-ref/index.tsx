import { useRef, useState } from "react";

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
    console.log(
      `count: ${count}, countRef: ${countRef.current}, countVar: ${countVar}`,
    );
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
