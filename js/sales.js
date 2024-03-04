let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allStores = [];
let totalCookiesPerHour = new Array(hours.length).fill(0);
let totalDailyCookies = 0;

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
}

// Function to display a random number of customers
function randomNumberGenerator(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}

// Generate sales data for a store
CookieStore.prototype.generateEstimate = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.round(randomCustomers * this.avgSale);
    this.estimates.push({ hour: hours[i], cookiesSold: cookiesSold });
    this.totalCookies += cookiesSold;
    totalCookiesPerHour[i] += cookiesSold;
    totalDailyCookies += cookiesSold;
  }
};

// Render store infoon sales data page
CookieStore.prototype.renderSalesData = function () {
  let storeDisplayContainer = document.getElementById('salesTableBody');

  let storeRow = document.createElement("tr");

  let storeNameCell = document.createElement("td");
  storeNameCell.textContent = this.name;
  storeRow.appendChild(storeNameCell);

  for (let i = 0; i < hours.length; i++) {
    let cookiesSoldCell = document.createElement("td");
    cookiesSoldCell.textContent = this.estimates[i].cookiesSold;
    storeRow.appendChild(cookiesSoldCell);
  }

  let totalCookiesCell = document.createElement("td");
  totalCookiesCell.textContent = this.totalCookies;
  storeRow.appendChild(totalCookiesCell);

  storeDisplayContainer.appendChild(storeRow);
};

// Function render header row
function renderHeaderRow() {
  let headerRow = document.createElement("tr");
  let headerLocationCell = document.createElement("th");
  headerLocationCell.textContent = "Location";
  headerRow.appendChild(headerLocationCell);

  for (let i = 0; i < hours.length; i++) {
    let headerHourCell = document.createElement("th");
    headerHourCell.textContent = hours[i];
    headerRow.appendChild(headerHourCell);
  }

  let headerTotalCell = document.createElement("th");
  headerTotalCell.textContent = "Daily Location Total";
  headerRow.appendChild(headerTotalCell);

  return headerRow;
}

// Function to render footer row
function renderFooterRow() {
  let footerRow = document.createElement("tr");
  let footerTotalCell = document.createElement("td");
  footerTotalCell.textContent = "Totals";
  footerRow.appendChild(footerTotalCell);

  for (let i = 0; i < hours.length; i++) {
    let footerHourCell = document.createElement("td");
    footerHourCell.textContent = totalCookiesPerHour[i];
    footerRow.appendChild(footerHourCell);
  }

  let grandTotalCell = document.createElement("td");
  grandTotalCell.textContent = totalDailyCookies;
  footerRow.appendChild(grandTotalCell);

  return footerRow;
}

// Function to render sales data for all stores
function renderSalesData() {
  let salesTableHeader = document.getElementById("salesTableHeader");
  let salesTableFooter = document.getElementById("salesTableFooter");

  salesTableHeader.appendChild(renderHeaderRow());

  for (let i = 0; i < allStores.length; i++) {
    allStores[i].generateEstimate();
    allStores[i].renderSalesData();
  }

  salesTableFooter.appendChild(renderFooterRow());
}

// Create instances (created from "factory") of new stores
let seattle = new CookieStore("Seattle", "123-456-7890", "2901 3rd Ave #300, Seattle, WA 98121", 23, 65, 6.3);
let tokyo = new CookieStore("Tokyo", "222-222-2222", "1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8684", 3, 24, 1.2);
let dubai = new CookieStore("Dubai", "333-333-3333", "1 Sheikh Mohammed bin Rashid Blvd - Dubai", 11, 38, 3.7);
let paris = new CookieStore("Paris", "444-444-4444", "Champ de Mars, 5 Avenue Anatole France, 75007 Paris", 20, 38, 2.3);
let lima = new CookieStore("Lima", "555-555-5555", "Ca. Gral. Borgoño cuadra 8, Miraflores 15074", 2, 16, 4.6);

allStores.push(seattle, tokyo, dubai, paris, lima);

// Call 
renderSalesData();

// Work in Progress - 
//Events - Add a new store to the table

let addStoreButton = document.getElementById("storeForm");

addStoreButton.addEventListener("submit", function (event) {
  event.preventDefault();

  let location = event.target.locationForm.value;
  let minCustomers = parseInt(event.target.minCustomersForm.value);
  let maxCustomers = parseInt(event.target.maxCustomersForm.value);
  let avgSale = parseFloat(event.target.avgSaleForm.value);

  // cratenew instance of CookieStore
  let newStore = new CookieStore(location, "", "", minCustomers, maxCustomers, avgSale);
  allStores.push(newStore);

  // Clear the existing table and re-render with the new store
  clearTable();
  renderSalesData();
});

// clear the existing table
function clearTable() {
  let tableBody = document.getElementById("salesTableBody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  let tableFooter = document.getElementById("salesTableFooter");
  tableFooter.innerHTML = '';
}
