/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let accion = ['ate', 'peed', 'crushed', 'broke'];
  let que = ['my homework', 'my phone', 'the car'];
  let cuando = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let indQuien = Math.floor(Math.random()*quien.length);
  let indAccion = Math.floor(Math.random()*accion.length);
  let indQue = Math.floor(Math.random()*que.length);
  let indCuando = Math.floor(Math.random()*cuando.length);

  let excusa = indQuien + " " + indAccion + " " + indQue + " " + indCuando;

  document.getElementById("excusa").textContent = excusa;
  console.log(excusa);
};
