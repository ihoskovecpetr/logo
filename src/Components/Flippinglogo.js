import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import charlie from './charlie.png';


function Logo() {

let count = 0
function rotate(){
console.log(count)
if(count < 4){
    if(document.getElementById("main_logo").classList.value.includes("flipped")){
    document.getElementById("main_logo").classList.remove("flipped");
  }else{
    document.getElementById("main_logo").classList.add("flipped");
  }
}else{
  clearInterval(interV)
}
  count++
}

const interV = setInterval(() => {
  rotate()
  setTimeout(() => {
    rotate()
  },600)
},3000)

  return (
    <>
      <div className="flip-card">
      <div className="flip-card-inner" id="main_logo">
      <div className="flip-card-front">
        <img src={charlie} />
      </div>
      <div className="flip-card-back">
      <img src={charlie} />
      </div>
      </div>
      </div>
    </>
  );
}

export default Logo;

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));