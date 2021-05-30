
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli (organic)",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: false,
		price: 2.35
	},
	{
		name: "tofu",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: false,
		price: 3.50
	},
	{
		name: "peanut (organic)",
		lactoseIntolerant: true,
		nutAllergies: false,
		organic: true,
		price: 4.00
	},
	{
		name: "milk",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: false,
		price: 5.25
	},
	{
		name: "cheese",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: false,
		price: 5.50
	},
	{
		name: "greenBean (organic)",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: true,
		price: 6.00
	},
	{
		name: "salmon (organic)",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: true,
		price: 10.00
	},
	{
		name: "almond (organic)",
		lactoseIntolerant: true,
		nutAllergies: false,
		organic: true,
		price: 11.00
	},
	{
		name: "cake",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: false,
		price: 12.00
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((organic == "Yes") && (prods[i].organic == true)){
			if ((restriction == "lactoseIntolerant") && (prods[i].lactoseIntolerant == true)) {
				product_names.push(prods[i].name);
			}
			else if ((restriction == "nutAllergies") && (prods[i].nutAllergies == true)) {
				product_names.push(prods[i].name);
			}
			else if ((restriction == "lactoseIntolerantANDnutAllergies") && (prods[i].lactoseIntolerant == true) && (prods[i].nutAllergies == true)) {
				product_names.push(prods[i].name);
			}
			else if (restriction == "None") {
				product_names.push(prods[i].name);
			}
		}
		if (organic == "No"){
			if ((restriction == "lactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "nutAllergies") && (prods[i].nutAllergies == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "lactoseIntolerantANDnutAllergies") && (prods[i].lactoseIntolerant == true) && (prods[i].nutAllergies == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

function restrictListPrice(prods, restriction, organic){
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((organic == "Yes") && (prods[i].organic == true)){
			if ((restriction == "lactoseIntolerant") && (prods[i].lactoseIntolerant == true)) {
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "nutAllergies") && (prods[i].nutAllergies == true)) {
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "lactoseIntolerantANDnutAllergies") && (prods[i].lactoseIntolerant == true) && (prods[i].nutAllergies == true)) {
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None") {
				product_prices.push(prods[i].price);
			}
		}
		if (organic == "No"){
			if ((restriction == "lactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "nutAllergies") && (prods[i].nutAllergies == true)){
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "lactoseIntolerantANDnutAllergies") && (prods[i].lactoseIntolerant == true) && (prods[i].nutAllergies == true)){
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				product_prices.push(prods[i].price);
			}
		}
	}
	return product_prices;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
