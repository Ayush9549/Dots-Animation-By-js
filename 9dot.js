let container = document.getElementsByClassName('container')[0];
let icon = document.getElementsByClassName('icon');
let pic = document.getElementsByTagName('img');

var isOpened = false;

function dots()
{
	if (isOpened==false)
	{
		setTimeout(function(){

		for (var i = 0; i < pic.length; i++)
		{
		    pic[i].style.display = "block";

		}
		},300);

		container.style.width = "200px";
		container.style.height = "200px";
		container.style.transitionDelay = "0s";
		setTimeout(function(){
			icon[0].style.marginTop = "-160px";
		},100);
		setTimeout(function(){
			icon[1].style.marginTop = "-160px";
			icon[1].style.marginLeft = "160px";
		},200);
		setTimeout(function(){
			icon[2].style.marginLeft = "160px";
		},400);
		setTimeout(function(){
			icon[3].style.marginTop = "160px";
			icon[3].style.marginLeft = "160px";
		},600);
		setTimeout(function(){
			icon[4].style.marginTop = "160px";
			icon[4].style.marginLeft = "0px";
		},800);
		setTimeout(function(){
			icon[5].style.marginTop = "160px";
			icon[5].style.marginLeft = "-160px";
		},1000);
		setTimeout(function(){
			icon[6].style.marginTop = "0px";
			icon[6].style.marginLeft = "-160px";
		},1200);
		setTimeout(function(){
			icon[7].style.marginTop = "-160px";
			icon[7].style.marginLeft = "-160px";
		},1400);	
		icon[8].style.width = "0px";
		icon[8].style.height ="0px"
		setTimeout(function(){
		for (var i = 0; i < icon.length; i++)
		{
			icon[i].style.width = "45px";
			icon[i].style.height = "45px";
			icon[i].style.background = "#333849";
			icon[i].style.transitionDelay = "0s";

		}
		},300);
		isOpened=true;

	}
	else
	{
		setTimeout(function()
		{
			for (var i = 0; i < pic.length; i++)
			{
			    pic[i].style.display = "none";
			}
			},300);

			setTimeout(function(){
			container.style.width = "70px";
			container.style.height = "70px";
			},1200);

			// container.style.transitionDelay = "0s";
			setTimeout(function(){
			icon[0].style.marginTop = "-50px";
			},100);

			setTimeout(function(){
			icon[1].style.marginTop = "-40px";
			icon[1].style.marginLeft = "40px";
			},200);

			setTimeout(function(){
			icon[2].style.marginLeft = "50px";
			},400);

			setTimeout(function(){
			icon[3].style.marginTop = "40px";
			icon[3].style.marginLeft = "40px";
			},600);

			setTimeout(function(){
			icon[4].style.marginTop = "50px";
			},800);

			setTimeout(function(){
			icon[5].style.marginTop = "40px";
			icon[5].style.marginLeft = "-40px";
			},1000);

			setTimeout(function(){
			icon[6].style.marginLeft = "-50px";
			},1200);

			setTimeout(function(){
			icon[7].style.marginTop = "-40px";
			icon[7].style.marginLeft = "-40px";
			},1400);

			setTimeout(function(){
			for (var i = 0; i < icon.length; i++)
			{
				icon[i].style.width = "7px";
				icon[i].style.height = "7px";
				icon[i].style.background = "#fff";
				icon[i].style.transitionDelay = "0s";

			}
			},300);
			
		isOpened=false;
	}
}

