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

// Run only after the page loads
document.addEventListener("DOMContentLoaded", () => {

  const mapElement = document.getElementById("map");

  // If this page does not contain a map, STOP here.
  if (!mapElement) return;

  // Create map
  const map = L.map("map").setView([locations[0].lat, locations[0].lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let marker = L.marker([locations[0].lat, locations[0].lng]).addTo(map);

  // Update location on screen + map
  function updateLocation() {
    const loc = locations[index];

    const nameEl = document.getElementById("locationName");
    const addrEl = document.getElementById("address");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (nameEl) nameEl.textContent = loc.name;
    if (addrEl) addrEl.textContent = loc.address;

    map.setView([loc.lat, loc.lng], 13);
    marker.setLatLng([loc.lat, loc.lng]);

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === locations.length - 1;
  }

  updateLocation();

  // Next / Previous buttons (only if present)
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

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

});