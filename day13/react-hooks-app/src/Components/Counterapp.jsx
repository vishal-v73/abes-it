import React, { useState } from 'react';
import './counterapp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="disp">
      <h1 className="header">{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrement Count
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Clear
      </button>
    </div>
  );
};

export default CounterApp;
