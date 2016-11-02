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

for(var i = 0; i < groceryList.length; i++) {
	console.log(groceryList[i].name, "$"+groceryList[i].price);
};

groceryList.totalAmount = function(){
	var total = 0;
		for (var i = 0; i < groceryList.length; i++) {
			total += groceryList[i].price;
		}
	return total;
};
console.log("$"+groceryList.totalAmount());