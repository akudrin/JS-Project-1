//import { $ } from "../node_modules/jquery/dist/jquery.js";
//import $ from "../node_modules/jquery/dist/jquery.js";
//jQuery
$.get("https://api.github.com/users/akudrin", (data) => console.log(data));
var ResultContainer = document.getElementById("ResultContainer");
ResultContainer.innerHTML = "Setting up the environment!";

var header = document.getElementsByTagName("h1");
var body = document.getElementById("ResultContainer");
var footer = document.getElementsByClassName("Footer");

header[0].textContent = "Header Text from JS";
header[0].setAttribute("isHeader", "True");
header[0].style.border = "2px solid black";
console.log(header[0]);
console.log(header);
console.log(body);
console.log(footer);

//error handling
try {
  var fruit = new Fruit();
} catch (e) {
  console.log("ERROR: " + e.message);
}
console.log("rest of the code!");
//custom error
try {
  throw new Error("Custom Developer Error!");
} catch (e) {
  console.log("ERROR: " + e.message);
}

//HTTP request
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    console.log(request.response);
  }
};
request.open("GET", "https://api.github.com/users/akudrin");
request.send();

//fetch API
fetch("https://api.github.com/users/akudrin")
  .then((response) => response.json())
  .then((data) => console.log(data));
//promise
let promise = $.get("https://api.github.com/users/msthakkar100");
promise.then(
  (data) => console.log(data),
  (error) => console.log(error)
);
