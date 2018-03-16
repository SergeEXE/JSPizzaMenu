var basePrice = 0;
var truePrice = 0;
var addCheese = 0;
var addCrust = 0;
var saucePrice = 0;
var meatPrice = 0;
var veggiePrice = 0;

function setBasePrice(size) {
	if (size == 'Personal') {
		basePrice=6;
	}
	else if (size == 'Medium') {
		basePrice=10;
	}
	else if (size == 'Large') {
		basePrice=14;
	}
	else if (size == 'Extra Large') {
		basePrice=16;
	}
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+" ";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("rMeat").innerHTML=text1;
	document.getElementById("rMeatPrice").innerHTML = "</h3>$"+meatTotal+".00"+"</h3>";
	meatPrice=meatTotal;
};

function getVeggie(runningTotal,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByName("veggie");
	for (var u = 0; u < veggieArray.length; u++) {
		if (veggieArray[u].checked) {
			selectedVeggie.push(veggieArray[u].value);
			console.log("selected veggie item: ("+veggieArray[u].value+")");
			text2 = text2+veggieArray[u].value+" ";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text2: "+text2);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("rVeggies").innerHTML=text2;
	document.getElementById("rVeggiePrice").innerHTML = "</h3>$"+veggieTotal+".00"+"</h3>";
	veggiePrice=veggieTotal;
};

function setCheese(cheese) {
	if (cheese == 'Extra Cheese') {
		addCheese = 3;
	}
	else {
		addCheese=0;
	}
}

function setCrust(crust) {
	if (crust == 'Cheese Stuffed') {
		addCrust = 3;
	}
	else {
		addCrust=0;
	}
}

function calculateTotal() {
	var size=document.querySelector('input[name="size"]:checked').value;
	var cheese=document.querySelector('input[name="cheese"]:checked').value;
	var crust=document.querySelector('input[name="crust"]:checked').value;
	var sauce=document.querySelector('input[name="sauce"]:checked').value;
	var runningTotal=0;
	setBasePrice(size);
	setCheese(cheese);
	setCrust(crust);
	console.log("subtotal: $"+runningTotal+".00");
	document.getElementById("rSize").innerHTML = size;
	document.getElementById("rSizePrice").innerHTML = "</h3>$"+basePrice+".00"+"</h3>";
	document.getElementById("rCheese").innerHTML = cheese;
	document.getElementById("rCheesePrice").innerHTML = "</h3>$"+addCheese+".00"+"</h3>";
	document.getElementById("rCrust").innerHTML = crust;
	document.getElementById("rCrustPrice").innerHTML = "</h3>$"+addCrust+".00"+"</h3>";
	document.getElementById("rSauce").innerHTML = sauce;
	document.getElementById("rSaucePrice").innerHTML = "</h3>$"+saucePrice+".00"+"</h3>";
	getMeat(runningTotal,"Meats: ");
	getVeggie(runningTotal,"Veggies: ");
	runningTotal=basePrice+addCrust+addCheese+meatPrice+veggiePrice;
	document.getElementById("rTotalPrice").innerHTML = "</h3><strong>$"+runningTotal+".00"+"</h3></strong>";
}