// Auto background system: Random GIF or Time-Based Gradient
function openPopup() {
  document.getElementById('loginPopup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('loginPopup').style.display = 'none';
}

// ====== AUTO BACKGROUND SWITCH SYSTEM ======

// 1️⃣ Add your 5 GIF URLs here:
const gifList = [
  "gif1.gif",
  "gif2.gif",
  "gif3.gif",
  "gif4.gif",
  "gif5.gif"
];

// 2️⃣ Gradient sets based on time (morning, noon, evening, night)
const gradients = {
  morning: "linear-gradient(120deg, #FFDEE9, #B5FFFC)",
  noon: "linear-gradient(120deg, #f6d365, #fda085)",
  evening: "linear-gradient(120deg, #a18cd1, #fbc2eb)",
  night: "linear-gradient(120deg, #141E30, #243B55)"
};

// 3️⃣ Function to get time-based gradient
function getGradientByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 10) return gradients.morning;
  if (hour >= 10 && hour < 16) return gradients.noon;
  if (hour >= 16 && hour < 19) return gradients.evening;
  return gradients.night;
}

// 4️⃣ Randomly decide whether to show GIF or Gradient
const showGIF = Math.random() < 0.6; // 60% chance GIF, 40% gradient
const body = document.body;

if (showGIF) {
  // Random GIF selection
  const randomGIF = gifList[Math.floor(Math.random() * gifList.length)];
  body.style.background = `url('${randomGIF}') center center / cover no-repeat fixed`;
} else {
  // Gradient mode
  body.style.background = getGradientByTime();
  body.style.backgroundSize = "800% 800%";
  body.style.animation = "gradientMotion 18s ease infinite";
}
