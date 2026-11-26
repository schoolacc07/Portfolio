/* Samira's Portfolio: detailpagina van een project (project.html#slug) */

const slug = location.hash.slice(1) || new URLSearchParams(location.search).get("p");
const index = Math.max(0, PROJECTEN.findIndex(p => p.slug === slug));
const p = PROJECTEN[index];
const el = document.getElementById("detail");
const naam = p.kaartNaam || p.naam;

document.title = `${naam} · Samira's Portfolio`;

const zoom = (src, alt) =>
  `<button type="button" class="zoom" data-lb="${src}" aria-label="Vergroot${alt ? ": " + alt : ""}"><img src="${src}" alt="${alt || naam}" loading="lazy"></button>`;
const fig = g => `<figure>${zoom(g.src, g.bijschrift)}${g.bijschrift ? `<figcaption>${g.bijschrift}</figcaption>` : ""}</figure>`;

function galerij(s) {
  if (!s.galerij) return "";
  const k = s.posts ? "posts" : s.stories ? "stories" : s.masonry ? "masonry" : s.drieKol ? "drie" : s.vier ? "vier" : s.tweeKol ? "twee" : s.galerij.length === 1 ? "een" : "";
  return `<div class="galerij ${k}">${s.galerij.map(fig).join("")}</div>`;
}

// De eerste sectie ("Wat was de opdracht?" / "Over dit project") staat bovenaan bij de info
const [opdracht, ...rest] = p.secties;

function blok(s, i) {
  const kleur = i % 2 ? "roze" : "lime";
  return `
  <section class="spread ${kleur} blok reveal">
    <div class="blok__kop">
      <h2>${s.titel}</h2>
      ${s.mascotte ? `<img class="blok__mascotte" src="${s.mascotte}" alt="ROOTS-mascotte" loading="lazy">` : ""}
    </div>
    <div class="blok__inhoud">
      ${(s.tekst || []).map(t => `<p>${t}</p>`).join("")}
      ${s.quote ? `<blockquote>${s.quote}</blockquote>` : ""}
      ${s.lijst ? `<ul class="lijst">${s.lijst.map(l => `<li>${l}</li>`).join("")}</ul>` : ""}
      ${s.beeld ? `<div class="beeld">${fig({ src: s.beeld, bijschrift: s.bijschrift })}</div>` : ""}
      ${s.video ? `<div class="video-rij">${s.naastVideo ? `<div>${s.naastVideo.map(t => `<p>${t}</p>`).join("")}</div>` : ""}<video src="${s.video.src}" ${s.video.poster ? `poster="${s.video.poster}"` : ""} controls muted loop playsinline preload="metadata"></video></div>` : ""}
      ${s.figmaVideo ? `<div class="figma-video"><a class="figma-video__start" href="${s.figmaVideo.link}" target="_blank" rel="noopener" aria-label="Bekijk de video van de website in Figma (opent in een nieuw tabblad)"><img src="${s.figmaVideo.poster}" alt="De website van Unhoused Festival op een laptop" loading="lazy"><span class="figma-video__play">▶ bekijk de video ↗</span></a></div>` : ""}
      ${s.groot ? `<div class="groot">${s.groot.map(fig).join("")}</div>` : ""}
      ${s.rij ? galerij({ galerij: s.rij, drieKol: true }) : ""}
      ${s.naRij ? `<div class="groot">${s.naRij.map(fig).join("")}</div>` : ""}
      ${galerij(s)}
      ${s.schets ? `<div class="schets">${fig(s.schets)}</div>` : ""}
      ${s.naGalerij ? `${(s.naGalerij.tekst || []).map(t => `<p>${t}</p>`).join("")}${galerij(s.naGalerij)}` : ""}
    </div>
  </section>`;
}

const vorige = PROJECTEN[(index - 1 + PROJECTEN.length) % PROJECTEN.length];
const volgende = PROJECTEN[(index + 1) % PROJECTEN.length];
const nr = n => String(n).padStart(2, "0");

const heldBeeld = p.germsSpel
  ? `<div><div class="germ-veld" aria-label="Klik op een germ om hem weg te spatten">${[1,2,3,4,5,6,7,8].map(i => `<button type="button" class="germ" style="--d:${i}" aria-label="Spat germ ${i} weg"><img class="germ__heel" src="assets/img/germs/germ-${i}.webp" alt=""><img class="germ__splash" src="assets/img/germs/splash-${i}.webp" alt=""></button>`).join("")}</div><p class="germ-tip">Klik op een germ om hem weg te spatten!</p></div>`
  : `<figure>${zoom(p.hero, naam)}</figure>`;

el.innerHTML = `
  <a class="terug" href="cases.html">← alle cases</a>

  <section class="spread lime scheef p-held">
    <div>
      <span class="label">(${nr(index + 1)} / ${nr(PROJECTEN.length)})</span>
      <h1>${naam.replace(" · ", "<br>")}</h1>
      <span class="onder">${p.wat || p.type}${p.titelScript ? ` · ${p.titelScript}` : ""}</span>
      <p class="kort">${p.kort}</p>
    </div>
    ${heldBeeld}
  </section>

  <section class="spread roze p-info reveal">
    <div>
      <h2>De opdracht</h2>
      ${(opdracht.tekst || []).map(t => `<p>${t}</p>`).join("")}
    </div>
    <div>
      <h2>Mijn rol</h2>
      <p>${p.rol || ""}</p>
    </div>
    <div>
      <h2>Programma's</h2>
      <ul class="chips">${p.tools.map(t => `<li>${t}</li>`).join("")}</ul>
      <h2 style="margin-top:18px">Skills</h2>
      <ul class="chips">${p.skills.map(t => `<li>${t}</li>`).join("")}</ul>
      ${p.link ? `<a class="knop" href="${p.link.url}" target="_blank" rel="noopener">${p.link.label} ↗</a>` : ""}
    </div>
  </section>

  ${rest.map(blok).join("")}

  ${p.geleerd ? `
  <section class="spread pruim geleerd reveal">
    <h2>Wat ik leerde</h2>
    <p>${p.geleerd.split(" ").map((w, i) => `<span class="w" style="--w:${i}">${w}</span>`).join(" ")}</p>
  </section>` : ""}

  <p class="disclaimer">${p.disclaimer}</p>

  <nav class="volgende" aria-label="Andere projecten">
    <a href="project.html#${vorige.slug}"><small>← vorig project</small><strong>${vorige.kaartNaam || vorige.naam}</strong></a>
    <a href="project.html#${volgende.slug}" style="text-align:right"><small>volgend project →</small><strong>${volgende.kaartNaam || volgende.naam}</strong></a>
  </nav>`;

// ---------- Germs wegspatten ----------
el.querySelectorAll(".germ").forEach(g => g.addEventListener("click", () => g.classList.toggle("gespat")));

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
const beelden = [...el.querySelectorAll("[data-lb]")];
let huidig = 0;
let laatsteFocus = null;

function open(i) {
  huidig = (i + beelden.length) % beelden.length;
  const b = beelden[huidig];
  lbImg.src = b.dataset.lb;
  lbImg.alt = b.querySelector("img")?.alt || "";
  laatsteFocus = document.activeElement;
  lb.classList.add("open");
  lb.querySelector(".lb-sluit").focus();
}
function sluit() { lb.classList.remove("open"); laatsteFocus?.focus(); }

beelden.forEach((b, i) => b.addEventListener("click", () => open(i)));
lb.querySelector(".lb-sluit").addEventListener("click", sluit);
lb.addEventListener("click", e => { if (e.target === lb) sluit(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") sluit();
  if (e.key === "ArrowLeft") open(huidig - 1);
  if (e.key === "ArrowRight") open(huidig + 1);
});

// ---------- Inschuiven ----------
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: 0, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach(r => io.observe(r));

// Ander project gekozen via de link onderaan: pagina opnieuw opbouwen
window.addEventListener("hashchange", () => { location.reload(); window.scrollTo(0, 0); });
