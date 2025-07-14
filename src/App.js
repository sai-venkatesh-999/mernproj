<<<<<<< HEAD
import React from "react";
import Data from "./Cart/data";

// import API from "./components/API"; 

function App() {
  return (
    <div>
      {/* <API /> */}
      {/* <Products /> */}
      <Data />
    </div>
  );
}

export default App;
=======
// import React, { useState } from 'react';
// import GameBoard from './components/ameBoard';

// const App = () => {
//   const [startGame, setStartGame] = useState(false);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '30px' }}>
//       <h1>React Snake Game 🐍</h1>
//       {startGame ? (
//         <GameBoard />
//       ) : (
//         <button onClick={() => setStartGame(true)}>Start Game</button>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'

const App = () => {
  const[count,setcount]=useState(0)

  const handleinc=()=>{setcount(count+1)}
  const handledec=()=>{
    if(count>0)
    setcount(count-1)}

  


  return (
    <div className='text-center p-4 mt-6'>
         <h1>count : {count}</h1>
         <button onClick={handleinc}>+</button>
         <button onClick={handledec}>-</button>
    </div>
  )
}

export default App
>>>>>>> d9dfa40 (Initial commit)
