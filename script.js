const url = "https://api.wheretheiss.at/v1/satellites/25544";
const myIcon = L.icon({
  iconUrl: "iss.png",
  iconSize: [50, 32],
  iconAnchor: [22, 16]
});
const mymap = L.map("mapid").setView([0, 0], 1);
const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);
const attribution =
  "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

setInterval(getIss, 1000);

async function getIss() {
  const res = await fetch(url);

  const data = await res.json();
  const { latitude, longitude, velocity } = data;
  const lat = document.querySelector(".lat");
  const log = document.querySelector(".log");
  const vel = document.querySelector(".vel");
  marker.setLatLng([latitude, longitude]);
  lat.innerHTML = latitude;
  log.innerHTML = longitude;
  vel.innerHTML = velocity;
  console.log(latitude, longitude);
}
