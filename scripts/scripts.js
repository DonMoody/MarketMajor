/* 
Author: Donald Moody
File Name: styles.css
Date: 11/16/2025
*/


// -------------------------
// Hamburger Menu
// -------------------------
function menu() {
   const navlinks = document.getElementById("nav-links");
   const menuicon = document.getElementById("icon");

   if (!navlinks || !menuicon) return;

   if (navlinks.style.display === "block") {
       navlinks.style.display = "none";
       menuicon.style.color = "#2a1f14";
   } else {
       navlinks.style.display = "block";
       menuicon.style.color = "#f6eee4";
   }
}

// -------------------------
// Map + Locations
// -------------------------

// List of locations - UPDATED WITH DAY AND TIME
const locations = [
  {
    name: "Hilo Farmers Market",
    address: "Mamo St, Hilo, HI 96720",
    lat: 19.7235,
    lng: -155.0848,
    day: "Friday",
    time: "5:00 PM - 9:00 PM"
  },
  {
    name: "Kona Farmers Market",
    address: "Ali‘i Dr, Kailua-Kona, HI",
    lat: 19.6403,
    lng: -155.9956,
    day: "Wednesday - Sunday", // Kept from previous suggestion
    time: "7:00 AM - 4:00 PM"  // Kept from previous suggestion
  },
  {
    name: "Waimea Town Market",
    address: "Parker School, Waimea, HI",
    lat: 20.0200,
    lng: -155.6710,
    day: "Saturday", // Kept from previous suggestion
    time: "7:30 AM - 12:00 PM" // Kept from previous suggestion
  }
];

let index = 0;

// Run only after the page loads
document.addEventListener("DOMContentLoaded", () => {

  const mapElement = document.getElementById("map");

  // If this page does not contain a map, STOP here.
  if (!mapElement) return;

  // Create map
  // Note: Leaflet is available globally because it's linked in locations.html <head>
  const map = L.map("map").setView([locations[0].lat, locations[0].lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let marker = L.marker([locations[0].lat, locations[0].lng]).addTo(map);

  // Get button elements
  // CHANGED IDs to match locations.html: prev-btn and next-btn
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  // Update location on screen + map
  function updateLocation() {
    const loc = locations[index];

    // Get location info elements
    const nameEl = document.getElementById("locationName");
    const addrEl = document.getElementById("address");
    
    // NEW: Get day and time elements
    const dayEl = document.getElementById("day");
    const timeEl = document.getElementById("time");

    if (nameEl) nameEl.textContent = loc.name;
    if (addrEl) addrEl.textContent = loc.address;
    
    // NEW: Update day and time content
    if (dayEl) dayEl.textContent = "Day: " + loc.day;
    if (timeEl) timeEl.textContent = "Time: " + loc.time;

    map.setView([loc.lat, loc.lng], 13);
    marker.setLatLng([loc.lat, loc.lng]);

    // Update button states
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === locations.length - 1;
  }

  updateLocation();

  // Next / Previous buttons listeners
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (index < locations.length - 1) {
        index++;
        updateLocation();
      }
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (index > 0) {
        index--;
        updateLocation();
      }
    };
  }
  
  setTimeout(function () {
      map.invalidateSize();
  }, 100);
});
