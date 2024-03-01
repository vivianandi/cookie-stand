let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// Create constructor function that creates instances
function CookieStore(name, contact, location, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.contact = contact;
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.estimates = [];
  this.totalCookies = 0;
  this.hourlySale = [];
}

// Simulate cookie purchases
CookieStore.prototype.generateEstimate = function () {
  for (let i = 0; i < hours.length; i++) {
    let hour = hours[i];
    let randomCustomers = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.round(randomCustomers * this.avgSale);
    this.estimates.push({ hour, cookiesSold });
    this.totalCookies += cookiesSold;
  }
};

// Render store information
CookieStore.prototype.render = function () {
  let storeDisplayContainer = document.getElementById('storeDisplay');

  // Add section
  let section = document.createElement("section");
  section.id = this.name;

  // Add h2
  let title = document.createElement("h2");
  title.textContent = this.name;

  let details = document.createElement("ul");
  let hoursItem = document.createElement("li");
  hoursItem.textContent = `Hours Open: 6am-7pm`;
  details.appendChild(hoursItem);

  let contact = document.createElement("li");
  contact.textContent = `Contact Info: ${this.contact}`;
  details.appendChild(contact);

  let location = document.createElement("li");
  location.textContent = `Location: ${this.location}`;
  details.appendChild(location);

  // Section, not details
  section.appendChild(title);
  section.appendChild(details);

  storeDisplayContainer.appendChild(section);
};

// Create instances (created from "factory") of new stores
let seattle = new CookieStore("Seattle", "123-456-7890", "2901 3rd Ave #300, Seattle, WA 98121", 23, 65, 6.3);
let tokyo = new CookieStore("Tokyo", "222-222-2222", "1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8684", 3, 24, 1.2);
let dubai = new CookieStore("Dubai", "333-333-3333", "1 Sheikh Mohammed bin Rashid Blvd - Dubai", 11, 38, 3.7);
let paris = new CookieStore("Paris", "444-444-4444", "Champ de Mars, 5 Avenue Anatole France, 75007 Paris", 20, 38, 2.3);
let lima = new CookieStore("Lima", "555-555-5555", "Ca. Gral. Borgoño cuadra 8, Miraflores 15074", 2, 16, 4.6);

let allStores = [seattle, tokyo, dubai, paris, lima];

// Function to display a random number of customers
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}

// Call function for each store in a loop
for (let i = 0; i < allStores.length; i++) {
  allStores[i].generateEstimate();
  allStores[i].render();
}