/*
Created by Oranje Maan
30 November 2017
*/
var currency = 0;
var G1Cost = 10;
var G1Quantity = 0;
var G2Cost = 100;
var G2Quantity = 0;
var G3Cost = 1000;
var G3Quantity = 0;

//Game saving
const save = () =>{
	var gameSave = {
		currency: currency,
		G1Quantity: G1Quantity,
		G2Quantity: G2Quantity,
		G3Quantity: G3Quantity
	}
	localStorage.setItem("save",JSON.stringify(gameSave));
}

//Game loading
const load = () =>{
	var save = JSON.parse(localStorage.getItem("save"));
	
	if (typeof save.currency !== "undefined") currency = save.currency;
	if (typeof save.G1Quantity !== "undefined") G1Quantity = save.G1Quantity;
	if (typeof save.G2Quantity !== "undefined") G2Quantity = save.G2Quantity;
	if (typeof save.G3Quantity !== "undefined") G3Quantity = save.G3Quantity;
	
	document.getElementById('G1Quantity').innerHTML = G1Quantity;
	document.getElementById('G2Quantity').innerHTML = G2Quantity;
	document.getElementById('G3Quantity').innerHTML = G3Quantity;
}



//incrementing
const incrementCurrency = (number) =>{
	currency = currency + number;
	document.getElementById("currency").innerHTML = currency;
};

const buyG1 = () =>{
	var G1Cost = Math.floor(10 * Math.pow(1.15, G1Quantity)); //Cost Growth Equation
	if(currency >= G1Cost){ //determining if player has enough currency to buy generator
		G1Quantity = G1Quantity + 1;
		currency = currency - G1Cost;
		document.getElementById('G1Quantity').innerHTML = G1Quantity;
		document.getElementById('currency').innerHTML = currency;
		document.getElementById('G1InvalidBuy').innerHTML = " ";
	} else {
		document.getElementById('G1InvalidBuy').innerHTML = "You can't afford that.";
		setTimeout(function(){document.getElementById("G1InvalidBuy").innerHTML="";},3000);
	}
	var G1NextCost = Math.floor(10 * Math.pow(1.1,G1Quantity)); 
    document.getElementById('G1Cost').innerHTML = G1NextCost;
};

const buyG2 = () =>{
	var G2Cost = Math.floor(100 * Math.pow(1.15, G2Quantity)); //Cost Growth Equation
	if(currency >= G2Cost){ //determining if player has enough currency to buy generator
		G2Quantity = G2Quantity + 1;
		currency = currency - G2Cost;
		document.getElementById('G2Quantity').innerHTML = G2Quantity;
		document.getElementById('currency').innerHTML = currency;
		document.getElementById('G2InvalidBuy').innerHTML = " ";
	} else {
		document.getElementById('G2InvalidBuy').innerHTML = "You can't afford that.";
		setTimeout(function(){document.getElementById("G2InvalidBuy").innerHTML="";},3000);
	}
	var G2NextCost = Math.floor(100 * Math.pow(1.1,G2Quantity)); 
    document.getElementById('G2Cost').innerHTML = G2NextCost;
};

const buyG3 = () =>{
	var G3Cost = Math.floor(1000 * Math.pow(1.15, G3Quantity)); //Cost Growth Equation
	if(currency >= G3Cost){ //determining if player has enough currency to buy generator
		G3Quantity = G3Quantity + 1;
		currency = currency - G3Cost;
		document.getElementById('G3Quantity').innerHTML = G3Quantity;
		document.getElementById('currency').innerHTML = currency;
		document.getElementById('G3InvalidBuy').innerHTML = " ";
	} else {
		document.getElementById('G3InvalidBuy').innerHTML = "You can't afford that.";
		setTimeout(function(){document.getElementById("G3InvalidBuy").innerHTML="";},3000);
	}
	var G3NextCost = Math.floor(1000 * Math.pow(1.1,G3Quantity)); 
    document.getElementById('G3Cost').innerHTML = G3NextCost;
};
window.setInterval(function(){
	incrementCurrency(G1Quantity);
	incrementCurrency(G2Quantity * 4);
	incrementCurrency(G3Quantity * 8);
}, 1000);