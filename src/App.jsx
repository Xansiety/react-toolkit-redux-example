import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter";
import { useState } from "react";

function App() {
  const [incrementAmount, setIncrementAmount] = useState(10);

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrementar
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          Incrementar en 2
        </button>

        <div className="row">
          <p>
            <input
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <button
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Incrementar en {incrementAmount}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
