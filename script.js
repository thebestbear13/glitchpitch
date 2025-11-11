// Glitch spots generator
const container = document.getElementById('glitch-container');

function createGlitchSpot() {
  const spot = document.createElement('div');
  spot.className = 'glitch-spot';
  const size = Math.random() * 15 + 5; // 5-20px
  spot.style.width = size + 'px';
  spot.style.height = size + 'px';
  spot.style.top = Math.random() * 100 + '%';
  spot.style.left = Math.random() * 100 + '%';
  spot.style.transform = `rotate(${Math.random()*40-20}deg)`;
  container.appendChild(spot);
  setTimeout(() => {
    if (spot.parentNode) spot.parentNode.removeChild(spot);
  }, 500);
}

// spawn spots at random intervals
setInterval(() => {
  createGlitchSpot();
}, Math.random() * 400 + 200);

// small additional flicker for lines (subtle)
const lines = document.querySelectorAll('.line');
setInterval(() => {
  lines.forEach(l => {
    l.style.opacity = 0.6 + Math.random() * 0.4;
  });
}, 300);
