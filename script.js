// Select Element by ID
const heading = document.getElementById("heading");
heading.textContent = "DOM Element Selected By ID";

// Select Elements by Tag Name
const para = document.getElementsByTagName("p");
para[0].textContent = "First Paragraph was updated!";

// Select Elements by Class Name
const btn = document.getElementsByClassName("btn");
btn[1].textContent = "Click Me";

// Use querySelector
let item = document.querySelectorAll("li");

item.forEach(function (item) {
  item.style.color = "green";
});

// Change Style Using Selected Element
let p = document.querySelector(".p");

// change the fontSize of paragraph
p.style.fontSize = "20px";

// change the text color of paragraph
p.style.backgroundColor = "red";

//change the backgroundColor too paragraph
p.style.color = "white";
