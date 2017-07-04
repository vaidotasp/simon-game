document.addEventListener("DOMContentLoaded", function() {

  //Click handlers
  const powerBtn = document.getElementById('power-btn');
  powerBtn.addEventListener('click', power)

  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', start)

  const strictBtn = document.getElementById('strict-btn');
  strictBtn.addEventListener('click', strict)


  function power() {
    console.log("Power button clicked");
  }

  function start() {
    console.log("Start button clicked");
  }

  function strict() {
    console.log("Strict button clicked");
  }

  const first = document.getElementById('1');
  first.addEventListener('click', one)
  const second = document.getElementById('2');
  second.addEventListener('click', two)
  const third = document.getElementById('3');
  third.addEventListener('click', three)
  const fourth = document.getElementById('4');
  fourth.addEventListener('click', four)

  function one() {
    console.log("Clicked");
  }

  function two() {
    console.log("Clicked");
  }

  function three() {
    console.log("Clicked");
  }

  function four() {
    console.log("Clicked");
  }

});