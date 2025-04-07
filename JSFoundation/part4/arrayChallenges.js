// 1. Declare an array named 'teaFlavors' that contains the strings '"green tea"'
// '"black tea"', and '"oolong tea"'
// Access the first element of the array and store it in a variable named 'firstTea'

let teas = ["green tea", "black tea", "oolong tea"];
const firstTea = teas[0];
console.log(firstTea);

// 2. Declare an array named 'Cities' containing
// '"London"', '"Tokyo"', '"Paris"'
//  and ""New York"',
// Access the third element in the array and store it in a variable named 'favoriteCity'

let cities = ["london", "tokyo", "paris", "new york"];
const favoriteCity = cities[2];
console.log(favoriteCity);

// 3. You have an array named "teaTypes' containing
// '"herbal tea"'
// '"white tea"', and '"masala chai"'.
// Change the second element of the array to '"jasmine tea"

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes[1]);

// 4. Declare an array named 'citiesVisited' containing
// '"Mumbai"' and '"Sydney"'
// Add '"Berlin"' to the array using the 'push' method.

let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin");
console.log(citiesVisited[2]);

// 5.You have an array named teaOrders with '"chai"'
// '"iced tea"'
// '"matcha"', and '"earl grey"' and
// Remove the last element of the array using the 'pop' method and store it in a variable named 'lastorder.

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
var lastOrder = teaOrders.pop();
console.log(lastOrder);

// 6. You have an array named 'popularTeas' containing
// '"green tea"', '"oolong tea"' , and '"chai"'
// Create a soft copy of this array named
// 'softCopyTeas

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

// 7.You have an array named 'topCities' containing
// '"Berlin"', '"Singapore"' , and '"New York"•
// Create a hard copy of this array named
// 'hardCopyCities'

let topCities = ["berlin", "singapore", "new york"];
let hardCopyCities = [...topCities];
console.log(topCities);

// 8. You have two arrays: 'europeanCities' containing"Paris"' and '"Rome" •
// , and 'asianCities' containing "Tokyo"' and '"Bangkok"•
// Merge these two arrays into a new array named
// 'worldCities',

let europeanCities = ["paris" , "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

// 9. You have an array named "teaMenu containing'"masala chai"' "oolong tea"',"green tea"'
// , and'"earl grey"',
// Find the length of the array and store it in a variable named 'menulength.

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl tea"];
var menulength = teaMenu.length;
console.log(menulength);

// 10. You have an array named 'cityBucketList' containing'"Kyoto"'
// , '"London"', '"Cape Town"', and'"Vancouver"'
// Check if '"London"' is in the array and store the result in a variable named 'isLondonInList'

let cityBucketList = ["Kyoto" ,"London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
