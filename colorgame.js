var count = 3;
var lcount = 3;
var colors = generateColorArr(count);
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var message = document.querySelector("#message");
var life = document.querySelector("#life");
var h1 = document.querySelector("h1");
var btn = document.querySelector("#btn");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var extremeBtn = document.querySelector("#extreme"); //pro
var ultraBtn = document.querySelector("#ultra"); //veteran

var pickedColor = pickColor();

life.textContent = "life " +lcount;

displayColor.textContent = pickedColor;

easyBtn.classList.add("selected");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	extremeBtn.classList.remove("selected");
	ultraBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	count = 3;
	lcount = 3;
	life.textContent = "life " +lcount;
	colors = generateColorArr(count);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	message.textContent = " "
	for(var i=0;i<squares.length;i++){
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	extremeBtn.classList.remove("selected");
	ultraBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	count = 6;
	lcount = 3;
	life.textContent = "life " +lcount;
	colors = generateColorArr(count);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	message.textContent = " "	
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";				
		}		
	}
});

extremeBtn.addEventListener("click",function(){
	extremeBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	ultraBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	count = 9;
	lcount = 3;
	life.textContent = "life " +lcount;
	colors = generateColorArr(count);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	message.textContent = " "	
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";				
		}		
	}
});

ultraBtn.addEventListener("click",function(){
	ultraBtn.classList.add("selected");
	extremeBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	count = 12;
	lcount =3;
	life.textContent = "life " +lcount;
	colors = generateColorArr(count);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	message.textContent = " "	
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";		
	}
});

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor === pickedColor && lcount!= 0) {
			message.textContent = "Correct!"
			setColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			btn.textContent = "Play Again?"
		}

		else if( lcount === 0)
		{
			life.textContent = "life " +lcount;
			message.textContent = "No more lives, try new game"
			btn.textContent = "Play Again?"		
		}
		else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!"
			lcount--;
			life.textContent = "life " +lcount;
		}
	})
}

function setColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColorArr(num){
	var arr = new Array();

	for(var i=0;i<num;i++)
	{
		arr.push(generateColor());
	}

	return arr;
}

function generateColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	var y = ("rgb(" + r + ", " + g + ", " + b + ")");
	return y;
	Console.log(y);
}

btn.addEventListener("click", function(){
	colors = generateColorArr(count);
	lcount =3;
	life.textContent = "life " +lcount;
	pickedColor = pickColor();
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	displayColor.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	btn.textContent = "New Colors";
	message.textContent = " "
})

