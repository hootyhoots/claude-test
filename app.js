// === Fake Content Data ===
const trendingContent = [
  { title: "Midnight Protocol", year: 2026, rating: 8.7, genre: "Thriller", color: "#1b2838" },
  { title: "Echoes of Mars", year: 2025, rating: 9.1, genre: "Sci-Fi", color: "#2d1b38" },
  { title: "The Baker's Dozen", year: 2026, rating: 7.9, genre: "Comedy", color: "#38351b" },
  { title: "Ironclad", year: 2025, rating: 8.4, genre: "Action", color: "#381b1b" },
  { title: "Whisper Valley", year: 2026, rating: 8.8, genre: "Horror", color: "#1b3828" },
  { title: "Love in Transit", year: 2025, rating: 7.5, genre: "Romance", color: "#381b33" },
  { title: "Zero Gravity", year: 2026, rating: 9.0, genre: "Sci-Fi", color: "#1b2838" },
  { title: "Street Rules", year: 2025, rating: 8.2, genre: "Drama", color: "#2a2a1b" },
  { title: "Parallel Lives", year: 2026, rating: 8.6, genre: "Thriller", color: "#1b3838" },
  { title: "Code Black", year: 2025, rating: 7.8, genre: "Action", color: "#381b27" },
];

const originalsContent = [
  { title: "The Last Frontier", year: 2026, rating: 9.2, genre: "Sci-Fi", color: "#0f3460" },
  { title: "Dynasty", year: 2025, rating: 8.9, genre: "Drama", color: "#3d0c11" },
  { title: "Neural Link", year: 2026, rating: 8.5, genre: "Thriller", color: "#1a1a3e" },
  { title: "Wild Hearts", year: 2025, rating: 7.7, genre: "Romance", color: "#3e1a2e" },
  { title: "The Recruit", year: 2026, rating: 8.3, genre: "Action", color: "#1a3e1a" },
  { title: "Laughing Stock", year: 2025, rating: 7.6, genre: "Comedy", color: "#3e3a1a" },
  { title: "Abyssal", year: 2026, rating: 9.0, genre: "Horror", color: "#0a1a2e" },
  { title: "Crown & Country", year: 2025, rating: 8.8, genre: "Historical", color: "#2e1a0a" },
];

const continueWatching = [
  { title: "Midnight Protocol", year: 2026, rating: 8.7, genre: "Thriller", color: "#1b2838", progress: 65 },
  { title: "Dynasty", year: 2025, rating: 8.9, genre: "Drama", color: "#3d0c11", progress: 30 },
  { title: "Neural Link", year: 2026, rating: 8.5, genre: "Thriller", color: "#1a1a3e", progress: 80 },
  { title: "The Baker's Dozen", year: 2026, rating: 7.9, genre: "Comedy", color: "#38351b", progress: 45 },
  { title: "Echoes of Mars", year: 2025, rating: 9.1, genre: "Sci-Fi", color: "#2d1b38", progress: 15 },
];

const allContent = [...trendingContent, ...originalsContent];

// === Render Content Cards ===
function createCard(item, showProgress) {
  const card = document.createElement("div");
  card.className = "content-card";
  card.innerHTML = `
    <div class="card-image">
      <div class="card-poster" style="background: linear-gradient(135deg, ${item.color}, ${item.color}dd);">
        ${item.title.charAt(0)}
      </div>
      <div class="card-overlay">
        <button class="card-play">&#9654;</button>
      </div>
    </div>
    <div class="card-info">
      <h3>${item.title}</h3>
      <div class="card-meta">
        <span class="card-rating">&#9733; ${item.rating}</span>
        <span>${item.year}</span>
        <span>${item.genre}</span>
      </div>
      ${showProgress ? `<div class="progress-bar"><div class="progress-fill" style="width: ${item.progress}%"></div></div>` : ""}
    </div>
  `;
  return card;
}

function populateRow(rowId, items, showProgress = false) {
  const row = document.getElementById(rowId);
  if (!row) return;
  items.forEach((item) => {
    row.appendChild(createCard(item, showProgress));
  });
}

populateRow("trending-row", trendingContent);
populateRow("originals-row", originalsContent);
populateRow("continue-row", continueWatching, true);

// === Carousel Scrolling ===
function scrollCarousel(rowId, direction) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const scrollAmount = 600;
  row.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

// === Header Scroll Effect ===
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// === Search Functionality ===
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchBtn.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  searchInput.focus();
});

searchClose.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
  searchInput.value = "";
  searchResults.innerHTML = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchOverlay.classList.remove("active");
  }
});

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (!query) return;

  const matches = allContent.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query)
  );

  matches.forEach((item) => {
    const resultEl = document.createElement("div");
    resultEl.className = "search-result-item";
    resultEl.innerHTML = `
      <div class="search-result-thumb" style="background: ${item.color}; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.3); font-weight: bold;">${item.title.charAt(0)}</div>
      <div class="search-result-info">
        <h4>${item.title}</h4>
        <p>${item.year} &middot; ${item.genre} &middot; &#9733; ${item.rating}</p>
      </div>
    `;
    searchResults.appendChild(resultEl);
  });

  if (matches.length === 0) {
    searchResults.innerHTML = `<p style="color: var(--text-secondary); padding: 16px 0;">No results found for "${e.target.value}"</p>`;
  }
});

// === Mobile Menu Toggle ===
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
mobileMenuBtn.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navActions.style.display = navActions.style.display === "flex" ? "none" : "flex";
});
