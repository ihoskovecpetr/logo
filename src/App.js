import React, {useState} from 'react';
import logo from './logo.svg';
import charlie from './charlie.png';
import './App.css';
import Button from "./Components/Button"
import FlippingLogo from "./Components/Flippinglogo"

function App() {

  const [dis, setDis] = useState(false)
  const [count, setCount] = useState(1)



const toys = (kids, hracek, start) => {

let kidIndex = start

if(hracek >= kids){
  let rest =hracek%kids
  console.log("ROUNDS rest: ", rest + start);
  if((rest + start) > kids){
    console.log("dite: ",(rest + start)%kids );
  }else{
    console.log("dite: ",(rest + start) );
  }
}else if((start + hracek) >= kids){
  let rest =(start + hracek)%kids
  console.log("one ROUND rest: ", rest);
}else{
  let rest =(start + hracek)
  console.log("less than ROUND rest: ", rest);
}
}


let counting = 0

// function rotate(){
//   //document.getElementsById("flip-card-inner").classList.add("flipped");

// console.log(counting)
// if(counting < 4){
//     if(document.getElementById("main_logo").classList.value.includes("flipped")){
//     console.log("obsahuuje:");
//     document.getElementById("main_logo").classList.remove("flipped");
//   }else{
//     console.log("Neobsahuje:");
//     document.getElementById("main_logo").classList.add("flipped");
//   }
// }else{
//   clearInterval(interV)
// }

//   counting++

// }


// const interV = setInterval(() => {
//   rotate()
//   setTimeout(() => {
//     rotate()
//   },600)
// },3000)



  return (
    <div className="App">

      
      <FlippingLogo />

    </div>
  );
}

export default App;
