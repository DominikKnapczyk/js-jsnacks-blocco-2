// ESERCIZIO JSnack1 -------------------------------------------------------------------------------------------------------

function snack1Function() {

  var input1 = document.getElementById("input1").value;
  var output1 = document.getElementById("output1");

  if (input1 % 2 == 0) {
    output1.innerHTML = input1;
  } else {
    input1++;
    output1.innerHTML = input1 ;
  }
}





// ESERCIZIO JSnack2 -------------------------------------------------------------------------------------------------------

let snack2_array = [45, 3, 2, 88, 131, 412, 632, 43, 9, 224, 86, 45];
var output2red = document.getElementById("div_red");
var output2green = document.getElementById("div_green");

for (let i = 0; i < snack2_array.length; i++) {

  if (snack2_array[i] % 2 == 0) {
    output2green.innerHTML +=  snack2_array[i] + "/" ;
  } else {
    output2red.innerHTML += snack2_array[i] + "/";
  }
}




// ESERCIZIO JSnack3 -------------------------------------------------------------------------------------------------------


let snack3_array = [66, 78, 32, 1, 4, 56, 373, 24, 98, 124, 153, 33, 79];
var output3= document.getElementById("output3");
let somma = 0;

for (let i = 0; i < snack2_array.length; i++) {
  
  if (i % 2 !== 0) {
    somma += snack3_array[i];
  }
}

output3.innerHTML += somma;