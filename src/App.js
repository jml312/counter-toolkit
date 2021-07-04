import React, { useEffect, useState } from "react";
import Counter from "./features/counter/Counter";
import { useSelector } from "react-redux";

function App() {
  const [countChanged, setCountChanged] = useState(false);
  const [text, setText] = useState("✅");
  const count = useSelector((state) => state.counter.count);

  useEffect(() => {
    if (countChanged) {
      setText("👋");
      setTimeout(() => {
        setText("✅");
      }, 200);
    }
    setCountChanged(true);
  }, [count]);

  return (
    <div>
      <Counter />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
