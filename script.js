var groceryList = [
	{
		name: "eggs",
		price: 2
	},
	{
		name: "milk",
		price: 2
	},
	{
		name: "bread",
		price: 3
	},
	{
		name: "sponges",
		price: 5
	}
];

// groceryList.makeList = function() {
// 	var total = 0;
// 	for(var i = 0; i < groceryList.length; i++) {
// 		console.log(groceryList[i].name, "$"+groceryList[i].price.toFixed(2));
// 		total += groceryList[i].price;
// 	}
// 	return total;
// };
// console.log("Total: $"+groceryList.makeList().toFixed(2));

var total = 0;
for(var i = 0; i < groceryList.length; i++) {
	console.log(groceryList[i].name, "$"+groceryList[i].price.toFixed(2));
	total += groceryList[i].price;
}
console.log("Total: $"+total.toFixed(2));