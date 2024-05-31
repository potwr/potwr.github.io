function expCashAnimation()
{
	for(var x=0; x<=4; x=x+0.16)
	{
		var y = x*(x-4);
		var x2 = (-1)*x;
		$(".exp-animation").animate({top: 250+y*25+"px", left: 250+x2*30+"px"}, 5);
		$(".cash-animation").animate({top: 250+y*25+"px", left: 250+x*30+"px"}, 5);
	}
	
	setTimeout(function(){
		$(".exp-animation").animate({opacity: 0}, 500);
		$(".cash-animation").animate({opacity: 0}, 500);
	}, 1500);
	
	setTimeout(function(){
		$(".exp-animation").remove();
		$(".cash-animation").remove();
		}, 1860);
}