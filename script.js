const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const page = document.body.dataset.page;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const pageMap = {
  home: "index.html",
  intro: "intro.html",
  season1: "season1.html",
  season2: "season2.html",
  season3: "season3.html",
  season4: "season4.html",
  season5: "season5.html",
  season6: "season6.html",
  characters: "characters.html",
  relationship: "relationship.html",
  articles: "articles.html",
  movie: "movie.html"
};

if (nav && pageMap[page]) {
  const current = Array.from(nav.querySelectorAll("a")).find((link) => link.getAttribute("href") === pageMap[page]);
  if (current) {
    current.classList.add("is-current");
    current.setAttribute("aria-current", "page");
  }
}

const spoilerButtons = document.querySelectorAll("[data-spoiler-toggle]");

spoilerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) {
      return;
    }

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
    button.textContent = isOpen ? "ネタバレありあらすじを表示" : "ネタバレありあらすじを閉じる";
  });
});
