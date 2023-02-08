import { useState } from "react";

export const Exo2 = () => {
    const [count, setCount] = useState(0)

    const adjustCount = (amount: number) => {
      setCount(count + amount)
    }

    return (
      <div>
        <button onClick={() => adjustCount(-1)}>-</button>
        {count}
        <button onClick={() => adjustCount(1)}>+</button>
      </div>
    );
  }