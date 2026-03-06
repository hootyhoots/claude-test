// === Shared Header & Footer for all sub-pages ===

function getNavHTML(activePage) {
  const links = [
    { name: "Home", href: "index.html", id: "home" },
    { name: "Trending", href: "trending.html", id: "trending" },
    { name: "Categories", href: "category.html", id: "categories" },
    { name: "Originals", href: "originals.html", id: "originals" },
    { name: "Pricing", href: "index.html#pricing", id: "pricing" },
  ];

  const navLinksHTML = links
    .map((l) => `<li><a href="${l.href}" class="${activePage === l.id ? "active" : ""}">${l.name}</a></li>`)
    .join("");

  return `
  <header class="header scrolled">
    <nav class="nav">
      <a href="index.html" class="logo" style="text-decoration:none;">
        <span class="logo-icon">&#9654;</span>
        <span class="logo-text">StreamVibe</span>
      </a>
      <ul class="nav-links">${navLinksHTML}</ul>
      <div class="nav-actions">
        <a href="signin.html" class="btn btn-outline">Sign In</a>
        <a href="signup.html" class="btn btn-primary">Start Free Trial</a>
      </div>
      <button class="mobile-menu-btn" onclick="document.querySelector('.nav-links').style.display=document.querySelector('.nav-links').style.display==='flex'?'none':'flex'" aria-label="Menu">&#9776;</button>
    </nav>
  </header>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-col">
        <a href="index.html" class="logo" style="text-decoration:none;">
          <span class="logo-icon">&#9654;</span>
          <span class="logo-text">StreamVibe</span>
        </a>
        <p class="footer-tagline">Your universe of entertainment. Stream thousands of movies, shows, and originals.</p>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="press.html">Press</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="help.html">Help Center</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="accessibility.html">Accessibility</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="terms.html">Terms of Service</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="cookies.html">Cookie Preferences</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 StreamVibe, Inc. All rights reserved. This is a fictional streaming service.</p>
    </div>
  </footer>`;
}

function renderSharedLayout(activePage) {
  const headerEl = document.getElementById("page-header");
  const footerEl = document.getElementById("page-footer");
  if (headerEl) headerEl.innerHTML = getNavHTML(activePage);
  if (footerEl) footerEl.innerHTML = getFooterHTML();
}

// === Shared Content Data ===
const sharedContent = [
  { title: "Midnight Protocol", year: 2026, rating: 8.7, genre: "Thriller", color: "#1b2838", duration: "2h 12m", maturity: "TV-MA", description: "A rogue hacker discovers a global surveillance network and must decide whether to expose it or exploit it." },
  { title: "Echoes of Mars", year: 2025, rating: 9.1, genre: "Sci-Fi", color: "#2d1b38", duration: "2h 28m", maturity: "PG-13", description: "The first colonists on Mars uncover ancient alien artifacts that change everything we know about the universe." },
  { title: "The Baker's Dozen", year: 2026, rating: 7.9, genre: "Comedy", color: "#38351b", duration: "1h 52m", maturity: "PG-13", description: "Thirteen amateur bakers compete in a chaotic reality show where sabotage is not just allowed - it's encouraged." },
  { title: "Ironclad", year: 2025, rating: 8.4, genre: "Action", color: "#381b1b", duration: "2h 05m", maturity: "R", description: "An ex-special forces operative is pulled back into action when a private military corporation threatens his hometown." },
  { title: "Whisper Valley", year: 2026, rating: 8.8, genre: "Horror", color: "#1b3828", duration: "1h 48m", maturity: "R", description: "A family moves to a remote valley only to discover the land holds dark secrets that have been buried for centuries." },
  { title: "Love in Transit", year: 2025, rating: 7.5, genre: "Romance", color: "#381b33", duration: "1h 56m", maturity: "PG-13", description: "Two strangers share a cross-country train ride that changes their lives forever in this heartfelt romance." },
  { title: "Zero Gravity", year: 2026, rating: 9.0, genre: "Sci-Fi", color: "#1b2838", duration: "2h 20m", maturity: "PG-13", description: "After a catastrophic space station failure, two astronauts must find a way home with dwindling resources." },
  { title: "Street Rules", year: 2025, rating: 8.2, genre: "Drama", color: "#2a2a1b", duration: "2h 01m", maturity: "R", description: "A gritty drama following three interconnected lives in the underbelly of a city on the brink of change." },
  { title: "Parallel Lives", year: 2026, rating: 8.6, genre: "Thriller", color: "#1b3838", duration: "1h 59m", maturity: "TV-MA", description: "A physicist discovers she can see into parallel universes - but each glimpse comes with a devastating cost." },
  { title: "Code Black", year: 2025, rating: 7.8, genre: "Action", color: "#381b27", duration: "1h 54m", maturity: "R", description: "When a hospital is taken hostage, one trauma surgeon must fight to save both patients and staff." },
  { title: "The Last Frontier", year: 2026, rating: 9.2, genre: "Sci-Fi", color: "#0f3460", duration: "2h 34m", maturity: "TV-MA", description: "In a world where reality bends, one explorer must journey beyond the edges of known space to save what remains of humanity.", original: true },
  { title: "Dynasty", year: 2025, rating: 8.9, genre: "Drama", color: "#3d0c11", duration: "2h 15m", maturity: "TV-MA", description: "The rise and fall of a powerful family empire told across three generations of ambition, betrayal, and revenge.", original: true },
  { title: "Neural Link", year: 2026, rating: 8.5, genre: "Thriller", color: "#1a1a3e", duration: "1h 50m", maturity: "TV-14", description: "A brain-computer interface startup's miracle product begins altering users' personalities in terrifying ways.", original: true },
  { title: "Wild Hearts", year: 2025, rating: 7.7, genre: "Romance", color: "#3e1a2e", duration: "1h 44m", maturity: "PG-13", description: "A wildlife photographer and a ranch owner clash and connect in the rugged landscapes of Montana.", original: true },
  { title: "The Recruit", year: 2026, rating: 8.3, genre: "Action", color: "#1a3e1a", duration: "2h 08m", maturity: "TV-MA", description: "A young CIA recruit is thrust into a web of international intrigue on her very first assignment.", original: true },
  { title: "Laughing Stock", year: 2025, rating: 7.6, genre: "Comedy", color: "#3e3a1a", duration: "1h 38m", maturity: "R", description: "A failing comedian gets one last shot at redemption when a viral video accidentally makes him famous.", original: true },
  { title: "Abyssal", year: 2026, rating: 9.0, genre: "Horror", color: "#0a1a2e", duration: "2h 02m", maturity: "R", description: "A deep-sea research team discovers something ancient and terrifying at the bottom of the Mariana Trench.", original: true },
  { title: "Crown & Country", year: 2025, rating: 8.8, genre: "Historical", color: "#2e1a0a", duration: "2h 22m", maturity: "TV-14", description: "A sweeping historical epic about a forgotten queen who shaped the destiny of a nation.", original: true },
];

function findContent(title) {
  return sharedContent.find((c) => c.title === title);
}

function titleToSlug(title) {
  return encodeURIComponent(title);
}
