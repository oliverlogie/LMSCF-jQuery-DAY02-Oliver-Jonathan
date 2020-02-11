console.log(items)


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