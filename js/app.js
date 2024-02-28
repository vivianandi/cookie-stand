let hours = "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm"

let seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  estimates: []
}

let tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  estimates: []
}

let dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  estimates: []
}

let paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  estimates: []
}

let lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  estimates: []
}


//funtion to display city info
//call function to display info

//functions -
//function generateEstimate(min, max, avg) {
// loop over the hours
// random number
// push to an array
// return the array
//}

//random number
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(
    Math.random() * (maxCustomers - minCustomers + 1) + minCustomers
  );
}

// let allCities = [seattle, tokyo, dubai, paris, lima]
let allCities = [];
allCities.push(seattle);
allCities.push(tokyo);
allCities.push(dubai);
allCities.push(paris);
allCities.push(lima);