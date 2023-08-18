import { useState } from "react";

const UseStateHook = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () =>{
    setValue(value -1)
  } 
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p> { value}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook