// import React, { useState } from "react";

import { useState } from "react";

// function Inter() {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrement = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <h1>welcome to my counter</h1>
//       <h1>The counter is : {counter}</h1>
//       <button onClick={increment} className="btn btn-danger">
//         +
//       </button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// export default Inter;

const Inter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>counter setup increment and decrement</h1>
      <h1>
        counter value <h1>🛒</h1> {count}
      </h1>
      <button onClick={increment}>➕</button>

      <button onClick={decrement}>➖</button>
    </>
  );
};
export default Inter;
