console.log(items)

$(document).ready(function(){

	for(i=0; i< items.length; i++)
	{

		

		$("#container").append("<div id = 'itemBg"+[i]+"' class = 'item'><img src= '"+items[i].image+"' ><p class = 'itemName'>"+items[i].name.toUpperCase()+"</p><p class = 'itemDescription'>"+items[i].desc+"</p><button class ='shoppingbutton'>Add to Cart</button></div>")


		if(items[i].available === true)
		{
			$("#itemBg"+[i]+"").css("background-color","green")

			
		}
		else if(items[i].available === false)
		{
			$("#itemBg"+[i]+"").css("background-color","indianred")
		}
	}


	//prevent propagation <---

	// $("#cart").on("click",function()
	// {
	// 	$("#dropdowncart").toggle(function()
	// 	{
	// 		$(this).animate({height:0},200)
	// 	}, function(){$(this).animate({height:100}, 200)})
		
	// })




	 //slide down is closed 
	 var counter = false
	$("#cart").on("click", function()
	{
		console.log("hello")
		
		if(counter === false)
		{
			$("#dropdowncart").slideDown("slow",function(){})

			console.log(counter)
			counter = true
		}
		else if (counter === true)
		{
			$("#dropdowncart").slideUp("slow",function(){})

			counter = false;
		}
	})













});



