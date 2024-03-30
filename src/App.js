import React, { useEffect, useState } from 'react';
import './App.css';
import Temopapp from './components/Tempapp';
import Anim from './components/Animation';

function App() {
  const [up,setup]=useState(false);
  const [main,setMain]=useState(false);
  useEffect(()=>{

    let d1=document.querySelector(".d1")
  setTimeout(() => {
    d1.style=` top:40%;
    left:25%;`
  }, 1000);

  let d2=document.querySelector(".d2")
  setTimeout(() => {
    d2.style=` top:35%;
    left:32%;`
  }, 1000);
  let d3=document.querySelector(".d3")
  setTimeout(() => {
    d3.style=` top:30%;
    left:40%;`
  }, 1000);
  let d4=document.querySelector(".d4")
  setTimeout(() => {
    d4.style=`  top:32%;
    left:47%;`
  }, 1000);
  let d5=document.querySelector(".d5")
  setTimeout(() => {
    d5.style=` top:35%;
    left:54%;`
  }, 1000);
  let d6=document.querySelector(".d6")
  setTimeout(() => {
    d6.style=`    top:35%;
    left:60%;`
  }, 1000);let d7=document.querySelector(".d7")
  setTimeout(() => {
    d7.style=`  top:45%;
    left:32%;`
  }, 1000);let d8=document.querySelector(".d8")
  setTimeout(() => {
    d8.style=`  top:43%;
    left:40%;`
  }, 1000);let d9=document.querySelector(".d9")
  setTimeout(() => {
    d9.style=` top:43%;
    left:48%;`
  }, 1000);let d10=document.querySelector(".d10")
  setTimeout(() => {
    d10.style=`top:40%;
    left:55%;`
  }, 1000);
  setup(true);
  },[])

  useEffect(()=>{
    let d1=document.querySelector(".d1")
    setTimeout(() => {
      d1.style=` width:10%;top:60%;
      left:50%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);
  
    let d2=document.querySelector(".d2")
    setTimeout(() => {
      d2.style=` width:10%;top:55%;
      left:55%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);
    let d3=document.querySelector(".d3")
    setTimeout(() => {
      d3.style=` width:10%;top:50%;
      left:60%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);
    let d4=document.querySelector(".d4")
    setTimeout(() => {
      d4.style=` width:10%; top:55%;
      left:65%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);
    let d5=document.querySelector(".d5")
    setTimeout(() => {
      d5.style=` width:10%;top:60%;
      left:70%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);
    let d6=document.querySelector(".d6")
    setTimeout(() => {
      d6.style=`  width:10%;  top:65%;
      left:55%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);let d7=document.querySelector(".d7")
    setTimeout(() => {
      d7.style=` width:10%; top:63%;
      left:60%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);let d8=document.querySelector(".d8")
    setTimeout(() => {
      d8.style=` width:10%; top:65%;
      left:65%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);let d9=document.querySelector(".d9")
    setTimeout(() => {
      d9.style=`width:10%; top:70%;
      left:48%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000);let d10=document.querySelector(".d10")
    setTimeout(() => {
      d10.style=`width:10%;top:65%;
      left:45%;animation: bigcloud;
      animation-delay: 1s;
     animation-duration: 1s;
     animation-iteration-count: 1;`
    }, 3000); 
    setTimeout(() => {
      let body=document.getElementById("body")
      body.style="background-color:gray"
    }, 4500);
  setMain(true)
  },[up]);
  useEffect(()=>{
    setTimeout(() => {
      let main=document.querySelector(".Mainbox")
      main.style="display:flex;"
    }, 5000);
  },[main])
  return (
    <>
    <h1 id="h">Fortcase Now</h1>
  <Anim/>
   <Temopapp/>
   </>
  );
}

export default App;
