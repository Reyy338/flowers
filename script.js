// 🌸 Petal Animation
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  document.querySelector(".petal-container").appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}
setInterval(createPetal, 300);

// 🔈 Music Toggle
const music = document.getElementById("bg-music");
const toggleMusic = document.getElementById("toggle-music");

toggleMusic.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleMusic.textContent = "🔊 Music";
  } else {
    music.pause();
    toggleMusic.textContent = "🔈 Music";
  }
});

// 🌼 Click Button Reveal + Auto Music
document.getElementById("start-button").addEventListener("click", () => {
  document.querySelector(".start-screen").style.display = "none";
  
  const mainContent = document.getElementById("main-content");
  mainContent.classList.remove("hidden");
  mainContent.classList.add("reveal");

  // Auto-play music
  music.play().then(() => {
    toggleMusic.textContent = "🔊 Music";
  }).catch((err) => {
    console.log("Auto-play blocked by browser:", err);
  });
});

