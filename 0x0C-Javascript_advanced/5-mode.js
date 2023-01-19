function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = size + "px";
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}
function main() {
	const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
	let paragraph = document.createElement('p');
	paragraph.innerHTML = "Welcome Holberton!";
	document.body.append(paragraph);

	let btn = document.createElement("button");
	btn.innerHTML = "Spooky";
	btn.addEventListener("click", spooky);
	document.body.append(btn);

	btn = document.createElement("button");
	btn.innerHTML = "Dark mode";
	btn.addEventListener("click", darkMode);
	document.body.append(btn);

	btn = document.createElement("button");
	btn.innerHTML = "Scream mode";
	btn.addEventListener("click", screamMode);
	document.body.append(btn);
}
main();
