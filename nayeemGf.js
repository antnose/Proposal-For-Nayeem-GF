const loveBtn = document.getElementById("loveBtn");
const music = document.getElementById("romanticMusic");

loveBtn.addEventListener("click", () => {
  // Play music
  music.play();
  music.loop = true;

  // Change background
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";
  document.body.style.backgroundSize = "cover";

  // Generate flowers
  for (let i = 0; i < 50; i++) {
    createFlower();
  }
});

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Random flower image
  const flowers = ["🌹", "🌸", "🌼", "💐", "🌺"];

  const flowerImage = flowers[Math.floor(Math.random() * flowers.length)];

  flower.textContent = flowerImage;

  // Random position and animation duration
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 5 + "s";
  flower.style.fontSize = 20 + Math.random() * 30 + "px";

  document.body.appendChild(flower);

  // Remove after animation
  setTimeout(() => {
    flower.remove();
  }, 8000);
}
