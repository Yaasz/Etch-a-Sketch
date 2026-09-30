let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
	let div = document.createElement("div");
	div.setAttribute("class", "box");
	container.appendChild(div);
}
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
	box.addEventListener("mouseover", (e) => {
		e.target.setAttribute("style", "background-color:black");
	});
});
