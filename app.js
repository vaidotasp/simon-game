document.addEventListener("DOMContentLoaded", function() {

  //Click handlers
  const powerBtn = document.getElementById('power-btn');
  powerBtn.addEventListener('click', power)

  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', start)

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

  function one() {
    console.log("Clicked");
    let audio = document.getElementById('one');
    audio.play();
  }

  function two() {
    console.log("Clicked");
    let audio = document.getElementById('two');
    audio.play();
  }

  function three() {
    console.log("Clicked");
    let audio = document.getElementById('three');
    audio.play();
  }

  function four() {
    console.log("Clicked");
    let audio = document.getElementById('four');
    audio.play();
  }

  function power() {
    console.log("Power button clicked");
    //power flip functionality
    let switcher = document.getElementById("power-btn");
    if (switcher.children[0].className === "switch-on") {
      switcher.children[0].className = "switch";
    } else {
      switcher.children[0].className = "switch-on";
    }
    //reset the game to original state
    if (originalState.count !== 0) {
      originalState.count = 0;
      originalState.sequence = [];
      originalState.strictMode = false;
      let countDisplay = document.getElementsByClassName("c-display");
      countDisplay[0].innerHTML = originalState.count;
    }
  }

  function start() {
    console.log("Start button clicked");
    originalState.randomFill();
    console.log(originalState)
    playSequence(originalState);
  }

  // for (var i = 1; i <= 5; ++i) {
  //     (function(n) {
  //         setTimeout(function(){
  //             console.log(n);
  //         }, 1000);
  //     }(i));
  // }

  function playSequence(originalState) {
    let counter = 0;
    iterator();

    function iterator() {
      setTimeout(function() {
        console.log(originalState.sequence[counter]);
        let button = document.getElementById(originalState.sequence[counter]);
        switch (originalState.sequence[counter]) {
          case 1:
            button.classList.add("tla");
            clearColor(button);
            break;
          case 2:
            button.classList.add("tra");
            break;
          case 3:
            button.classList.add("bla");
            break;
          case 4:
            button.classList.add("bra");
            break;
        }

        function clearColor(button) {
          setTimeout(toggle, 300);

          function toggle(button) {
            button.classList.remove("tla");
          }
        }
        // button.style = "background-color: #00ff00";
        console.log(button);
        counter++;
        if (counter < originalState.count) {
          iterator();
        }
      }, 1200)
    }
  }

  function strict() {
    console.log("Strict button clicked");
  }

  //Handler stuff done
  //State setup:
  let originalState = {
      count: 15,
      sequence: [],
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




});