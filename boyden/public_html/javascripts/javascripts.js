var timerid = 0;
var images = new Array(	"images/cinque-terre-279013_1920.jpg",
			"images/cinque-terre-340348_1920.jpg",
			"images/cinque-terre-401542_1920.jpg",
			"images/beach-51956_1920.jpg",
			"images/beach-72900.jpg");
var countimages = 0;
function startTime()
{
	if(timerid)
	{
		timerid = 0;
	}
	var tDate = new Date();
	
	if(countimages == images.length)
	{
		countimages = 0;
	}
	if(tDate.getSeconds() % 2 == 0)
	{
		document.getElementById("images_list").src = images[countimages];
	}
	countimages++;
	
	timerid = setTimeout("startTime()", 1000);
}