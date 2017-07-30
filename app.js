document.addEventListener('DOMContentLoaded', function loader() {

  //  Function definitions
  const startBtn = document.getElementById('start-btn');
  const powerBtn = document.getElementById('power-btn');
  const strictBtn = document.getElementById('strict-btn');
  const first = document.getElementById('1');
  const second = document.getElementById('2');
  const third = document.getElementById('3');
  const fourth = document.getElementById('4');

  //  State setup:
  let originalState = {
    count: 0,
    sequence: [],
    playerSeq: [],
    strictMode: false,
    randomFill: function() {
      for (let i = 0; i < 20; i += 1) {
        this.sequence.push(randomInt());
      }
    }
  };
  //  randomizer between 1 and 4
  function randomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resetState() {
    strictBtn.classList.remove('btn-strict-on');
    originalState.strictMode = false;
    originalState.count = 0;
    originalState.sequence = [];
    originalState.playerSeq = [];
    originalState.strictMode = false;
    countDisplay[0].innerHTML = originalState.count;
  }

  function winState() {
    if (originalState.count === 20) {
      return true;
    } else {
      return false;
    }
  }

  function power() {
    //  power flip functionality
    const switcher = document.getElementById('power-btn');
    if (switcher.children[0].className === 'switch-on') {
      switcher.children[0].className = 'switch';
      startBtn.removeEventListener('click', start)
      resetState();
      countDisplay[0].innerHTML = 'OFF';
    } else {
      switcher.children[0].className = 'switch-on';
      startBtn.addEventListener('click', start)
      countDisplay[0].innerHTML = originalState.count;
      originalState.randomFill();
    }
  }

  function start() {
    originalState.count += 1;
    countDisplay[0].innerHTML = originalState.count;
    originalState.playerSeq = [];
    playSequence(originalState);
  }


  function playSequence() {
    originalState.playerSeq = [];
    let counter = 0;
    const iterator = setInterval(function() {
      initiate(counter);
      counter += 1;
      if (counter >= originalState.count) {
        clearInterval(iterator);
      }
    }, 1000);
  }

  function initiate(counter) {
    const button = document.getElementById(originalState.sequence[counter]);
    //  add class
    switch (originalState.sequence[counter]) {
      case 1:
        button.classList.add('tla');
        const audio = document.getElementById('one');
        audio.play();
        break;
      case 2:
        button.classList.add('tra');
        const audio2 = document.getElementById('two');
        audio2.play();
        break;
      case 3:
        button.classList.add('bla');
        const audio3 = document.getElementById('three');
        audio3.play();
        break;
      case 4:
        button.classList.add('bra');
        const audio4 = document.getElementById('four');
        audio4.play();
        break;
    }
    setTimeout(function() {
      button.classList.remove('tla');
      button.classList.remove('tra');
      button.classList.remove('bla');
      button.classList.remove('bra');
    }, 500);
  }

  function playerInput() {
    //  validity function, will need timeouts
    loop1: for (let i = 0; i < originalState.playerSeq.length; i++) {
      if (originalState.playerSeq[i] === originalState.sequence[i]) {
        if (i !== originalState.count - 1) {
          continue;
        } else {}
      } else { //  input error sequence
        const audio = document.getElementById('beep');
        audio.play();
        countDisplay[0].innerHTML = 'ERR';
        if (originalState.strictMode) { //  strict mode error behaviour
          setTimeout(function() {
            originalState.count = 1;
            originalState.sequence = [];
            originalState.randomFill();
            originalState.playerSeq = [];
            countDisplay[0].innerHTML = originalState.count;
            playSequence(originalState);
          }, 1100);
        } else {
          setTimeout(function() {
            countDisplay[0].innerHTML = originalState.count;
            playSequence(originalState);
          }, 1100);
        }
        //playSequence(originalState); //plays the sequence again
        break loop1; //termination of the validity check fun
      }
      if (!winState()) {
        setTimeout(function() {
          start(); //should only fire if sequence is correct
        }, 1000);
      } else {
        countDisplay[0].innerHTML = 'WIN';
      }
    }
  }

  function strict() {
    if (!strictBtn.classList.contains('btn-strict-on')) {
      strictBtn.classList.add('btn-strict-on');
      originalState.strictMode = true;
    } else {
      strictBtn.classList.remove('btn-strict-on');
      originalState.strictMode = false;
    }
  }

  function one() {
    const audio = document.getElementById('one');
    audio.play();
    originalState.playerSeq.push(1);
    playerInput();
  }

  function two() {
    const audio = document.getElementById('two');
    audio.play();
    originalState.playerSeq.push(2);
    playerInput();
  }

  function three() {
    const audio = document.getElementById('three');
    audio.play();
    originalState.playerSeq.push(3);
    playerInput();
  }

  function four() {
    const audio = document.getElementById('four');
    audio.play();
    originalState.playerSeq.push(4);
    playerInput();
  }
  //  Click handlers

  powerBtn.addEventListener('click', power);
  strictBtn.addEventListener('click', strict);
  first.addEventListener('click', one);
  second.addEventListener('click', two);
  third.addEventListener('click', three);
  fourth.addEventListener('click', four);

  const countDisplay = document.getElementsByClassName('c-display');
});