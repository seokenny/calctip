var totalBill = 0;
var numberOfPeople = 0;
var tipPercentage = 0;
var totalPerson = 0;
var ObserveInputValue = 0;

document.querySelector(".pkey_3").addEventListener("click",function(){
    numberOfPeople = 3;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_4").addEventListener("click",function(){
    numberOfPeople = 4;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_5").addEventListener("click",function(){
    numberOfPeople = 5;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_6").addEventListener("click",function(){
    numberOfPeople = 6;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_7").addEventListener("click",function(){
    numberOfPeople = 7;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_8").addEventListener("click",function(){
    numberOfPeople = 8;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_9").addEventListener("click",function(){
    numberOfPeople = 9;
    addSelectKey();
    this.classList.add("selected_key");
});

document.querySelector(".pkey_10").addEventListener("click",function(){
    numberOfPeople = 10;
    addSelectKey();
    this.classList.add("selected_key");
});

function addSelectKey() {
    for(var i = 3; i < 11; i++){
        document.querySelector(".pkey_" + i).classList.remove("selected_key");
    }
}

document.querySelector(".tip_0").addEventListener("click",function(){
    tipPercentage = .15;
    addTipKey()
    this.classList.add("selected_key");
});

document.querySelector(".tip_1").addEventListener("click",function(){
    tipPercentage = .18;
    addTipKey()
    this.classList.add("selected_key");
});

document.querySelector(".tip_2").addEventListener("click",function(){
    tipPercentage = .20;
    addTipKey()
    this.classList.add("selected_key");
});

function addTipKey(){
    for(var i = 0; i < 3; i++){
        document.querySelector(".tip_" + i).classList.remove("selected_key");
    }
}

document.querySelector(".calculate_button").addEventListener("click",function(){
    console.log(tipCalculate());
});

function tipCalculate(){
    var finalPrice = (totalBill / numberOfPeople * tipPercentage) + (totalBill / numberOfPeople);
    document.querySelector(".perperson").innerHTML = "$" + finalPrice + " per person";
}

//Polyfill for requestAnimationFrame
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  //Get a reference to the input and output
  var input = document.querySelector(".bill_input_box");
//   var output = document.querySelector("#output");
  
  //Set up a requestAnimationFrame loop
  function update () {
    requestAnimationFrame(update);
    
    //Change the output to match the input
    totalBill = input.value;
  }
  update();