document.addEventListener("DOMContentLoaded", function () {
  
  console.log("loaded");



  function baz() {
    console.log ("baz");
    bar();
  }

  function bar() {
    console.log("bar");
    foo();
  }

  function foo() {
    debugger;
    console.log("foo");

  }

  baz();










});
