import { useState }  from "react";

export default function Counter() {
  const [number, setNumber] = useState("zero");

  return (
    <section>
      <h2>{number}</h2>
      <button>+</button>
      <button>-</button>
      <button onClick={ () => {setNumber(number + 1)} }>+</button>
      <button onClick={ () => {setNumber(number - 1)} }>+</button>
      <button onClick={ () => {setNumber(0)} }>+</button>
    </section>

  )
}