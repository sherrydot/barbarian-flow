document.getElementById('hp-submit').addEventListener('click', function() {
  const hpInput = document.getElementById('hp-count');
  try {
      // Evaluate the expression in the input field
      const newHp = eval(hpInput.value);
      // Update the input field with the result
      hpInput.value = newHp;
  } catch (e) {
      // If there's an error (e.g., invalid input), alert the user
      alert('Invalid expression. Please enter a valid calculation.');
  }
});


var arr = [1,2,3,4, "Ali", "Ahmed"]

// arr.forEach(function(val){
//   console.log(val + " hello")
// })

// var ans = arr.map(function(val){
//   return val*val;
// })

// var ans = arr.filter(function(val){
//   if(val >=2) {return true}
//   else return false
// })

// var ans = arr.find(function(val){
//   if (val === 2) return val;
// })


// console.log(arr.indexOf("Ahmed"));

function abcd(){
  return 10;
}

var hello = abcd()*3;