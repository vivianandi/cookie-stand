let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let seattle = {
  name: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  estimates: []
}

let tokyo = {
  name: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  estimates: []
}

let dubai = {
  name: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  estimates: []
}

let paris = {
  name: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  estimates: []
}

let lima = {
  name: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  estimates: []
}

//function to display random number
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}

//Use randomNumberGenerator to create function for estimates with sales data for each hour based on min and max
function generateEstimate(city) {
  city.estimates = [];
  for (let i = 0; i < hours.length; i++) {
    let hour = hours[i];
    let randomCustomers = randomNumberGenerator(city.minCustomers, city.maxCustomers);
    let cookiesSold = Math.round(randomCustomers * city.avgSale);
    city.estimates.push({ hour, cookiesSold });
  }
}

