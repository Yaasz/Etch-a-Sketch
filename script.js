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
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	if (e.target.style.backgroundColor == "") {
		if (e.target.classList.contains("box")) {
			e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
			e.target.style.opacity = 0.1;
		}
	} else {
		if (e.target.style.opacity <= 1) {
			e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
		}
	}
});
createGrid();

let button = document.createElement("button");
button.innerText = "New";
button.setAttribute("style", "margin-bottom:12px");
body.prepend(button);

button.addEventListener("click", () => {
	let side_length = Number(prompt("Enter the number of squares per side"));
	if (side_length > 1 && side_length < 100) {
		container.innerHTML = "";
		createGrid(side_length);
	} else {
		alert("Number should be greater than 1 and less than 100");
	}
});
