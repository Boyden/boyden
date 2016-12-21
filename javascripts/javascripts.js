var a = 33;
var b = 10;
var c = "Test";
var linebreak = "<br/>";

document.write("<h1>the javascripts' codes:<br></h1>");

document.write("(a&b) => ");
result = a&b;
document.write(result);
document.write(linebreak);

document.write("(a|b) => ");
result = a|b;
document.write(result);
document.write(linebreak);

document.write("(a^b) => ");
result = a^b;
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = ~b;
document.write(result);
document.write(linebreak);

document.write("(a>>>b) => ");
result = a>>>b;
document.write(result);
document.write(linebreak);

result = (typeof c == "string"?"C is a string!" : "C is other's type");
document.write("Result => "+result+linebreak);

var age = [10, 20, 75];
for (var i = 0 ; i < 3; i++) {
	if (age[i]>18&&age[i]<60) 
	{
		document.write("Age:"+age[i]+" "+"<b>Qualifies for driving</b><br>");
	}
	else if (age[i]<=18)
		document.write("Age:"+age[i]+" "+"<b>Too young</b><br>");
	else
		document.write("Age:"+age[i]+" "+"<b>Too old</b><br>");
}

var grade = 'A';
switch(grade)
{
	case 'A': document.write("Pretty Good!<br>"); break;
	default: document.write("Unknown!<br>")
}

var fibonacci = [1, 1];
i = 2;
while(i<18)
{
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	i++;
}

i = 2;
var fib;
for (fib in fibonacci) {
	document.write("fibonacci["+i+"]"+"="+fib+linebreak);
	i++;
}

var pai = 0;
for (i = 1; i<10000000; i++) {
	pai += 1/(i*i)
}
document.write("Pai: "+Math.sqrt(pai*6)+linebreak);

var property;
for (property in navigator) {
	document.write(property+linebreak);
}

outloop://this is the label name!
for (var i = 0; i < 5; i++) {
	document.write("outloop:" + i + linebreak);
	innerloop:
	for (var j = 0; j < 5; j++) {
		if (j>3) break;
		if (i==2)
		{
			break innerloop;
		}
		if (i == 4) 
		{
			break outloop;
		}
		document.write("innerloop:"+j+linebreak);
	}
}

var time = setInterval(change, 1);
p =document.getElementById('codes');
t = 150;
flag = 0;
function change() {
	if(t == 800)
		flag = 1;
	if (t==150) 
	{
		flag = 0;
	}
	if (flag==0) t++;
	else t--;
	p.style.width = t+"px";
	//p.style.height = t+"px";
}

var func = new Function("x", "y", "return x*y");//Function Uppercase
var name = func(10, 20);
document.write(name+linebreak);

var func = function(x,y){return x+y};
document.write(func(10,20)+linebreak);

function password() {
	var word = document.getElementById("password");
	var load = document.getElementById("display");
	if(word.type=="password"){
		word.type = "text";
		load.value = "hidden"
	}
	else{
		word.type = "password";
		load.value = "display";
	}
}

function over()
{
	var word = document.getElementById("password");
	var load = document.getElementById("display");
	if(word.type=="password"){
		word.type = "text";
		load.value = "hidden"
	}
	else{
		word.type = "password";
		load.value = "display";
	}
}
function WriteCookie() {
	if (document.myform.customer.value=="") {
		alert("Enter some value!");
		return;
	}
	cookievalue = escape(document.myform.customer.value)+";";
	document.cookie = "name"+cookievalue;
	document.write("seting cookies: name="+cookievalue);
}
function AutoRefresh(t)
{
	setTimeout("location.reload(true);",t);
}
function Redirect()
{
	window.location="https://www.zhihu.com/";
}
function warn()
{
	var retval = confirm("continue?");
	if (retval==true) 
		{
			alert("This is a warning message!");
			return true;
		} 
	else 
	{
			return false;
	}
}
function getvalue()
{
	var retval = prompt("Enter your name:","your name here");
	alert("you have entered:"+retval);
}
function addprice(amount)
{
	this.price = amount;
}
function addprice01(amount)
{
	with(this)
	{
		price = amount;
	}
}
function book(title,author)
{
	this.title = title;
	this.author = author;
	this.addprice = addprice;
}
function book01(title,author)
{
	this.title = title;
	this.author = author;
	this.price = 0;
	this.addprice = addprice;
}
function book02(title,author)
{
	this.title = title;
	this.author = author;
}
var val = Number.MAX_VALUE;
document.write("Value of Number.MAX_VALUE:"+val+linebreak);
document.write("Value of Number.MIN_VALUE:"+Number.MIN_VALUE+linebreak);
document.write("Value of Number.NaN:"+Number.NaN+linebreak);
document.write("Value of Number.NEGATIVE_INFINITY:"+Number.NEGATIVE_INFINITY+linebreak);
document.write("Value of Number.POSITIVE_INFINITY:"+Number.POSITIVE_INFINITY+linebreak);
