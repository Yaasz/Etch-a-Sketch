let container = document.querySelector("#container");
let body = document.querySelector("body");
function createGrid(side = 16) {
	for (let i = 0; i < side * side; i++) {
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		box.style.height = `calc(100%/${Number(side)})`;
		box.style.width = `calc(100%/${Number(side)})`;
		container.appendChild(box);
	}
}
container.addEventListener("mouseover", (e) => {
	if (e.target.classList.contains("box")) {
		e.target.style.backgroundColor = "black";
	}
});
createGrid();

let button = document.createElement("button");
button.innerText = "New";
button.setAttribute("style", "margin-bottom:12px");
body.prepend(button);

button.addEventListener("click", () => {
	let side_length = Number(prompt("what side length would you like"));
	if (side_length > 1 && side_length < 100) {
		container.innerHTML = "";
		createGrid(side_length);
	} else {
		alert("Number should be greater than 1 and less than 100");
	}
});
