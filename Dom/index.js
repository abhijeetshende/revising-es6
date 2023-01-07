//document object modal aka dom

//get the element ref
console.log(document.body.children[0]);
console.log(document.body.children[1]);
console.log(document.body.children[2]);

//changing css of element
document.body.children[0].style.background = "lightgrey";
document.body.children[1].style.background = "lightblue";
document.body.children[2].style.background = "lightgreen";

// using element child
printToScreen(document.body.firstElementChild.textContent);
// next slibling
printToScreen(document.body.firstElementChild.nextElementSibling.textContent);
//body
console.log(document.body.firstElementChild.previousElementSibling);

//dyanmic adding elements

let p = document.createElement("p");
p.innerText = "hello I am generated element";
p.style.background = "lightpink";
p.style.border = "1px solid red";
//adding the element to in body
document.body.append(p);

// inserting after child element
document.body.firstElementChild.append(p);
// document.body.firstElementChild.ap(p,a)

//query selector
console.log(document.getElementById("id1"));
