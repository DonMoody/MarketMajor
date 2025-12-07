// --- Presented by: Donald moody //---

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
    day: "Wednesday - Sunday",
    time: "7:00 AM - 4:00 PM"
  },
  {
    name: "Waimea Town Market",
    address: "Parker School, Waimea, HI",
    lat: 20.0200,
    lng: -155.6710,
    day: "Saturday",
    time: "7:30 AM - 12:00 PM"
  },
  {
    name: "Keaau Cougar Market",
    address: "Keaau High School",
    lat: 19.6125, // Coordinates found via search
    lng: -155.0317,
    day: "Wednesday",
    time: "3:00 PM - 8:00 PM"
  },
  {
    name: "The Barn Market",
    address: "16-1772 Keaau Pahoa Hwy, Hawaii",
    lat: 19.62132, // Coordinates found via search
    lng: -155.03941,
    day: "Second Saturday of the Month",
    time: "10:00am - 5:00pm" 
  }
];

let index = 0;

// Run only after the page loads
document.addEventListener("DOMContentLoaded", () => {

  const mapElement = document.getElementById("map");

  
  if (!mapElement) return;

  const map = L.map("map").setView([locations[0].lat, locations[0].lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let marker = L.marker([locations[0].lat, locations[0].lng]).addTo(map);

  
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  
  function updateLocation() {
    const loc = locations[index];

    
    const nameEl = document.getElementById("locationName");
    const addrEl = document.getElementById("address");
    
    
    const dayEl = document.getElementById("day");
    const timeEl = document.getElementById("time");

    if (nameEl) nameEl.textContent = loc.name;
    if (addrEl) addrEl.textContent = loc.address;
    
    
    if (dayEl) dayEl.textContent = "Day: " + loc.day;
    if (timeEl) timeEl.textContent = "Time: " + loc.time;

    map.setView([loc.lat, loc.lng], 13);
    marker.setLatLng([loc.lat, loc.lng]);

    
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === locations.length - 1;
  }

  updateLocation();


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
