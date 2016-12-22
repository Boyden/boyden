function color() {
	var color_change = document.getElementById("color");
	var red = document.getElementById('red_button');
	var green = document.getElementById('green_button');
	var blue = document.getElementById('blue_button');
	var color = "#"+red.value+green.value+blue.value;
	color_change.style.background = color;
}