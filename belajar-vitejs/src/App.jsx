/* eslint-disable react/prop-types */
import { useState } from "react";
import DaftarSiswa from "./components/DaftarSiswa";

function Welcome() {
  return <h1>Hello, React!</h1>;
}

function Goodbye({ name }) {
  return <h1>Goodbye {name ? name : "Heyy"}, React!</h1>;
}

function Likes() {
  const [liked, setLiked] = useState(0);

  function handleClick() {
    setLiked(liked + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Like ({liked})</button>
      <br></br>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleClickMinus() {
    setCount(count - 1);
  }

  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickReset() {
    setCount(0);
  }

  return (
    <>
      <button onClick={handleClickMinus}>-</button>
      <span>{count}</span>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickReset}>Reset</button>
      <br></br>
    </>
  );
}

function CounterPlus() {
  const [count, setCount] = useState(0);

  function handleClickMinus() {
    setCount(count - 1);
  }

  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickReset() {
    setCount(0);
  }

  return (
    <>
      <button
        disabled={count < 0 || count > 9}
        onClick={handleClickMinus}
      >
        -
      </button>
      <span>{count < 0 || count > 9 ? "Done!" : count}</span>
      <button disabled={count < 0 || count > 9} onClick={handleClickPlus}>
        +
      </button>
      <button
        disabled={count < 0 || count > 9 ? false : true}
        onClick={handleClickReset}
      >
        Reset
      </button>
      <br></br>
    </>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Goodbye name="Sara" />
      <Goodbye />
      <DaftarSiswa />
      <Likes />
      <Counter />
      <CounterPlus />
    </div>
  );
}

export default App;
