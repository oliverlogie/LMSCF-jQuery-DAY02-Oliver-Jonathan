console.log(items)

$(document).ready(function(){

//gets content in page

	for(i=0; i< items.length; i++)
	{

		

		$("#container").append("<div id = 'itemBg"+[i]+"' class = 'item'><img src= '"+items[i].image+"' ><p class = 'itemName'>"+items[i].name.toUpperCase()+"</p><p class = 'itemDescription'>"+items[i].desc+"</p><button id = 'button"+[i]+"' class ='shoppingbutton'>Add to Cart</button></div>")


		if(items[i].available === true)
		{
			$("#itemBg"+[i]+"").css("background-color","green")

			
		}
		else if(items[i].available === false)
		{
			$("#itemBg"+[i]+"").css("background-color","indianred")
		}
	}

//gets content in dropdown menu

	for(i=0; i<items.length; i++)
	{
		$("#cartlist").append("<li><img src='"+items[i].image+"'><p class = 'itempreis'>"+items[i].price+" €"+"</p><p class ='itemanzahl' id = 'stueckzahl"+[i]+"''>"+0+"</p></li><hr>")
	}



//adds items to id itemcount

	$(".shoppingbutton").on("click",function()
	{
		var a = $("#itemcount").html();
		a++;
		$("#itemcount").html(a);
	})

//for adding items to dropdown menu on button push

	var total = 0



	$(".shoppingbutton").on("click", function()
	{

		var pushed = $(this).attr("id")

		switch(pushed)
		{	

			case "button0":

				var b0 = $("#stueckzahl0").html();
				b0++;
				$("#stueckzahl0").html(b0);

				console.log("button0")


				// adds to total price
				total += Number(items[0].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)

				break;

			case "button1":

				var b1 = $("#stueckzahl1").html();
				b1++;
				$("#stueckzahl1").html(b1);

				console.log("button1")

				total += Number(items[1].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)

				break;

			case "button2":

				var b2 = $("#stueckzahl2").html();
				b2++;
				$("#stueckzahl2").html(b2);

				console.log("button2")

				total += Number(items[2].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)
				break;

			case "button3":

				var b3 = $("#stueckzahl3").html();
				b3++;
				$("#stueckzahl3").html(b3);

				console.log("button3")

				total += Number(items[3].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)
				break;

			case "button4":

				var b4 = $("#stueckzahl4").html();
				b4++;
				$("#stueckzahl4").html(b4);

				console.log("button4")

				total += Number(items[4].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)
				break;

			case "button5":

				var b5 = $("#stueckzahl5").html();
				b5++;
				$("#stueckzahl5").html(b5);

				console.log("button5")

				total += Number(items[5].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)
				break;

			case "button6":

				var b6 = $("#stueckzahl6").html();
				b6++;
				$("#stueckzahl6").html(b6);

				console.log("button6")

				total += Number(items[6].price)
				
				console.log("total:"+ total)

				$("#totalprice").html(total)
				break;	

			default:

				console.log("error")







			//for creating more buttons

			// case "button---":

			// 	var b--- = $("#stueckzahl---").html();
			// 	b---++;
			// 	$("#stueckzahl---").html(b---);

			// 	console.log("button---")
			// 	break;

			// for more totals

			// total += Number(items[---].price)
			
			// console.log("total:"+ total)

			// $("#totalprice").html(total)
			
		}


	})











	//prevent propagation <3

	// $("#cart").on("click",function()
	// {
	// 	$("#dropdowncart").toggle(function()
	// 	{
	// 		$(this).animate({height:0},200)
	// 	}, function(){$(this).animate({height:100}, 200)})
		
	// })




	 //slide down menu 
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



