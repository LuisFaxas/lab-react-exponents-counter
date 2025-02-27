import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";



function App () {

  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>


      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} factor={2} />
        <Exponent count={count} factor={3} />
        <Exponent count={count} factor={4} />
        <Exponent count={count} factor={5} />
        <Exponent count={count} factor={6} />


        {/* <ExponentTwo count={count} factor={2} />
        <ExponentThree count={count} factor={3}/>
        <ExponentFour count={count} factor={4}/>
        <ExponentFive count={count} factor={5}/>
        <ExponentSix count={count} factor={6}/> */}
      </div>
    </div>
  );
}

export default App;
