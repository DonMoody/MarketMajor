/* 
Author: Donald Moody
File Name: styles.css
Date: 11/16/2025
*/


//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu
function menu() {
   var navlinks = document.getElementById("nav-links");
   var menuicon = document.getElementById("icon");
   if (navlinks.style.display === "block") {
       navlinks.style.display = "none";
       menuicon.style.color = "#2a1f14";
   } else {
       navlinks.style.display = "block";
       menuicon.style.color = "#f6eee4";
   }
}

function ans1() {
 var answer = document.getElementById("answer1");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg1;
   answer.style.display = "block";
 }
}

function ans2() {
 var answer = document.getElementById("answer2");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg2;
   answer.style.display = "block";
 }
}

function ans3() {
 var answer = document.getElementById("answer3");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg3;
   answer.style.display = "block";
 }
}

function ans4() {
 var answer = document.getElementById("answer4");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg4;
   answer.style.display = "block";
 }
}



// ======================
// Location Map Script
// ======================

// List of locations
const locations = [
  {
    name: "Hilo Farmers Market",
    address: "Mamo St, Hilo, HI 96720",
    lat: 19.7235,
    lng: -155.0848
  },
  {
    name: "Kona Farmers Market",
    address: "Ali‘i Dr, Kailua-Kona, HI",
    lat: 19.6403,
    lng: -155.9956
  },
  {
    name: "Waimea Town Market",
    address: "Parker School, Waimea, HI",
    lat: 20.0200,
    lng: -155.6710
  }
];

let index = 0;

// **Only run map code if #map exists on this page**
document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("map");
  if (!mapElement) return; // prevents errors on pages without maps

  // Create map
  const map = L.map("map").setView([locations[0].lat, locations[0].lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let marker = L.marker([locations[0].lat, locations[0].lng]).addTo(map);

  // Update map + UI
  function updateLocation() {
    const loc = locations[index];

    document.getElementById("locationName").textContent = loc.name;
    document.getElementById("address").textContent = loc.address;

    map.setView([loc.lat, loc.lng], 13);
    marker.setLatLng([loc.lat, loc.lng]);

    document.getElementById("prevBtn").disabled = index === 0;
    document.getElementById("nextBtn").disabled = index === locations.length - 1;
  }

  updateLocation();

  // Buttons
  document.getElementById("nextBtn").onclick = () => {
    if (index < locations.length - 1) index++;
    updateLocation();
  };

  document.getElementById("prevBtn").onclick = () => {
    if (index > 0) index--;
    updateLocation();
  };
});
