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