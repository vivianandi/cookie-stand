let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

let seattle = {
  name: "Seattle",
  contact: "123-456-7890",
  location: "2901 3rd Ave #300, Seattle, WA 98121",
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  estimates: []
};

let tokyo = {
  name: "Tokyo",
  contact: "222-222-2222",
  location: "1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8684",
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  estimates: []
};

let dubai = {
  name: "Dubai",
  contact: "333-333-3333",
  location: "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  estimates: []
};
let paris = {
  name: "Paris",
  contact: "444-444-4444",
  location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  estimates: []
};

let lima = {
  name: "Lima",
  contact: "555-555-5555",
  location: "Ca. Gral. Borgoño cuadra 8, Miraflores 15074",
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  estimates: []
};

//Create constructor function that creates instances
function cookieStore(name, contact, location, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.contact = contact;
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.totalCookies = 0;
}

//Create instance (created from "factory") of new stores
let seattle = new cookieStore("Seattle", "123-456-7890", "2901 3rd Ave #300, Seattle, WA 98121", 23, 65, 6.3);
let tokyo = new cookieStore("Tokyo", "222-222-2222", "1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8684", 3, 24, 1.2);
let dubai = new cookieStore("Dubai", "333-333-3333", "1 Sheikh Mohammed bin Rashid Blvd - Dubai", 11, 38, 3.7);
let paris = new cookieStore("Paris", "444-444-4444", "Champ de Mars, 5 Avenue Anatole France, 75007 Paris", 20, 38, 2.3)
let lima = new cookieStore("Lima", "555-555-5555", "Ca. Gral. Borgoño cuadra 8, Miraflores 15074", 2, 16, 4.6);

let allStores = [seattle, toyo, dubai, paris, lima];

//function to display random number of customers 
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}

//Function to simulate cookies purchases
//function to store the simulated amounts of cookies purchased/hour/location using avg cookies purchased and random number of customers generated
function generateEstimate(city) {
  for (let i = 0; i < hours.length; i++) {
    let hour = hours[i];
    let randomCustomers = randomNumberGenerator(city.minCustomers, city.maxCustomers);
    let cookiesSold = Math.round(randomCustomers * city.avgSale);
    city.estimates.push({ hour, cookiesSold });
    city.totalCookies += cookiesSold;
  }
}

//
function renderStores(store) {
  let storeDisplayContainer = document.getElementById('storeDisplay');

  //add section
  let section = document.createElement("section");
  section.id = store.name;

  //add h2
  let title = document.createElement("h2");
  title.textContent = store.name;

  let details = document.createElement("ul");
  let hoursItem = document.createElement("li");
  hoursItem.textContent = `Hours Open: 6am-7pm`;
  details.appendChild(hoursItem);

  let contact = document.createElement("li");
  contact.textContent = `Contact Info: ${store.contact}`;
  details.appendChild(contact);

  let location = document.createElement("li");
  location.textContent = `Location: ${store.location}`;
  details.appendChild(location);

  //section, not details
  section.appendChild(title);
  section.appendChild(details);

  storeDisplayContainer.appendChild(section);
}

// Call function for each store in a loop
for (let i = 0; i < allStores.length; i++) {
  renderStores(allStores[i]);
}

//Render to Sales Data below


//Function to simulate cookies purchases

//Function to generate a random number

//call function for simulated cookie purchases per hour

//call function to display results for each section