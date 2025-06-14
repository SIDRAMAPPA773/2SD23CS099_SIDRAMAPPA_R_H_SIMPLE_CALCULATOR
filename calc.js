function addExpression(value){
document.getElementById("inp").value+=value;
}
function reset() {
  document.getElementById("inp").value = "";
}

function result() {
  try {
    const result = eval(document.getElementById("inp").value);
    document.getElementById("inp").value = result;
  } catch {
    document.getElementById("inp").value ="Math Error";
    // alert("Invalid Expression!");
    setTimeout(reset, 1500);
    // reset();
  }
}
