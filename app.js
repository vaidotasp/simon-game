'use strict';
document.addEventListener("DOMContentLoaded", function() {

  //Click handlers
  const powerBtn = document.getElementById('power-btn');
  powerBtn.addEventListener('click', power)
  const startBtn = document.getElementById('start-btn');

  const strictBtn = document.getElementById('strict-btn');
  strictBtn.addEventListener('click', strict)
  const first = document.getElementById('1');
  first.addEventListener('click', one)
  const second = document.getElementById('2');
  second.addEventListener('click', two)
  const third = document.getElementById('3');
  third.addEventListener('click', three)
  const fourth = document.getElementById('4');
  fourth.addEventListener('click', four)

  let countDisplay = document.getElementsByClassName("c-display");

  function one() {
    console.log("Clicked");
    let audio = document.getElementById('one');
    audio.play();
    originalState.playerSeq.push(1);
    playerInput();
  }

  function two() {
    console.log("Clicked");
    let audio = document.getElementById('two');
    audio.play();
    originalState.playerSeq.push(2);
    playerInput();
  }

  function three() {
    console.log("Clicked");
    let audio = document.getElementById('three');
    audio.play();
    originalState.playerSeq.push(3);
    playerInput();
  }

  function four() {
    console.log("Clicked");
    let audio = document.getElementById('four');
    audio.play();
    originalState.playerSeq.push(4);
    playerInput();
  }

  function power() {
    console.log("Power button clicked");
    //power flip functionality

    let switcher = document.getElementById("power-btn");
    if (switcher.children[0].className === "switch-on") {
      switcher.children[0].className = "switch";
      startBtn.removeEventListener('click', start)
      resetState();
      countDisplay[0].innerHTML = 'OFF';
    } else {
      switcher.children[0].className = "switch-on";
      startBtn.addEventListener('click', start)
      countDisplay[0].innerHTML = originalState.count;
      originalState.randomFill();

    }
  }

  function start() {
    console.log("Start button clicked");
    console.log(originalState)
    originalState.count += 1;
    countDisplay[0].innerHTML = originalState.count;
    originalState.playerSeq = [];
    playSequence(originalState);
  }


  function playSequence(originalState) {
    originalState.playerSeq = [];
    let counter = 0;
    let iterator = setInterval(function() {
      initiate(counter);
      counter++;
      if (counter >= originalState.count) {
        clearInterval(iterator);
      }
    }, 1000)
  }

  function initiate(counter) {
    let button = document.getElementById(originalState.sequence[counter]);
    //add class
    switch (originalState.sequence[counter]) {
      case 1:
        button.classList.add("tla");
        let audio = document.getElementById('one');
        audio.play();
        break;
      case 2:
        button.classList.add("tra");
        let audio2 = document.getElementById('two');
        audio2.play();
        break;
      case 3:
        button.classList.add("bla");
        let audio3 = document.getElementById('three');
        audio3.play();
        break;
      case 4:
        button.classList.add("bra");
        let audio4 = document.getElementById('four');
        audio4.play();
        break;
    }
    setTimeout(function() {
      button.classList.remove("tla");
      button.classList.remove("tra");
      button.classList.remove("bla");
      button.classList.remove("bra");
    }, 500);
  }

  function playerInput() {
    console.log(originalState)
    console.log('initialize the validity check');
  //v2 validity function, will need timeouts
 
  loop1:
  for (let i=0; i<originalState.playerSeq.length; i++) {
    if (originalState.playerSeq[i] === originalState.sequence[i]) {
      console.log("Sequence is match...continue");
      if (i !== originalState.playerSeq.length - 1) {
        console.log('testing for the length of sequence...');
        continue;
      } else {
      }
    } else {
      console.log('input err');
      countDisplay[0].innerHTML = "ERR";
      playSequence(originalState); //plays the sequence again
      break loop1; //termination of the validity check fun
    }
    start(); //should only fire if sequence is correct
  }
  
  
  
  
  
  
    //perform the click check validity here
    // loop1:
    //   if (originalState.playerSeq.length === originalState.count) {
    //     //test the sequence here
    //     for (let i = 0; i < originalState.playerSeq.length; i++) {
    //       if (originalState.playerSeq[i] === originalState.sequence[i]) {
    //         console.log("Good, continue");
    //       } else {
    //         console.log("Mistake made");
    //         countDisplay[0].innerHTML = "ERR";
    //         originalState.playerSeq = []; //posibly need to delay these
    //         playSequence(originalState);
    //         break loop1;
    //       }
    //     }
    //     console.log("WHOLE SEQUENCE IS GOOD");
    //     start();
    //   } else {

    //   }

  }

  function strict() {
    console.log("Strict button clicked");
    if (!strictBtn.classList.contains("btn-strict-on")) {
      strictBtn.classList.add("btn-strict-on");
      originalState.strictMode = true;
    } else {
      strictBtn.classList.remove("btn-strict-on");
      originalState.strictMode = false;
    }
  }

  //Handler stuff done
  //State setup:
  let originalState = {
      count: 0,
      sequence: [],
      playerSeq: [],
      strictMode: false,
      randomFill: function() {
        for (let i = 0; i < 20; i++) {
          this.sequence.push(randomInt());
        }
      }
    }
    //randomizer between 1 and 4
  function randomInt() {
    let min = Math.ceil(1);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resetState() {
    strictBtn.classList.remove("btn-strict-on");
    originalState.strictMode = false;
    originalState.count = 0;
    originalState.sequence = [];
    originalState.playerSeq = [];
    originalState.strictMode = false;
    countDisplay[0].innerHTML = originalState.count;
  }


});