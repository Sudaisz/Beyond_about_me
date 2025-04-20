window.onload = () => {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const locationInfo = `Your IP: ${data.ip} | City: ${data.city} | Time: ${new Date().toLocaleTimeString()}`;
      document.getElementById('location-info').innerText = locationInfo;
    })
    .catch(() => {
      document.getElementById('location-info').innerText = "Couldn't fetch location.";
    });

  document.getElementById('continue-btn').onclick = () => {
    document.getElementById('ip-box').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
  };

  document.getElementById('enter-sales-btn').onclick = () => {
    document.getElementById('sales-options').style.display = 'block';
  };
};

function searchWeb() {
  const query = document.getElementById("searchInput").value;
  if (query.trim()) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
}
