//Variables

//let admin = "email";
//let name = "John";
//admin = name;
//alert(admin);

//let ourPlanet = "Earth";
//let userName = "visitor";

//Yes
//No
//No

//Functions

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    // ...
//    return confirm('Did parents allow you?');
//  }
//}
//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  }
//    return confirm('Did parents allow you?');
//  }
//No difference
//function checkAge(age) {
//  return (age > 18) ? true : confirm('Did parents allow you?');
//}
//function checkAge(age) {
//  return (age > 18) || confirm('Did parents allow you?');
//}
//function findLeast(a,b){
//    if (a > b) {
//        return confirm(b);
//    } else {
//        return confirm(a);
//    }
//}
//function pow(x, n) {
//  let result = x;
//
//  for (let i = 1; i < n; i++) {
//    result *= x;
//  }
//
//  return result;
//}
//
//let x = prompt("x?", '');
//let n = prompt("n?", '');
//
//if (n < 1) {
//  alert(`Power ${n} is not supported, use a positive integer`);
//} else {
//  alert( pow(x, n) );
//}
//function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
//}
//
//ask(
//  "Do you agree?",
//  function() { alert("You agreed."); },
//  function() { alert("You canceled the execution."); }
//);

//My answer
let ask = prompt(a1,a2)=> {
    let result = ask
    return result;
}
result("You agreed", "You canceled the execution")

//The correct answer
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);