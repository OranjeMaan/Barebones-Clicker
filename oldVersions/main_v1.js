/*
Created by Oranje Maan
24 November 2017
*/
var currency = 0
const incrementCurrency = (number) =>{
	currency = currency + number;
	document.getElementById("currency").innerHTML = currency;
};
