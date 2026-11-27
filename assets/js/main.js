/* Samira's Portfolio: cases, about en contact */

// ---------- Cases-raster ----------
function bouwCases() {
  const raster = document.getElementById("cases-raster");
  if (!raster || typeof PROJECTEN === "undefined") return;
  const vrij = ["germs", "mascotte"]; // tekeningen zonder achtergrond: niet bijsnijden
  raster.innerHTML = PROJECTEN.map((p, i) => `
    <a class="kaart reveal" style="--i:${i % 4}" href="project.html#${p.slug}">
      <div class="kaart__beeld ${vrij.includes(p.slug) ? "vrij" : ""}">
        <img src="${p.kaartBeeld || p.hero}" alt="" loading="lazy">
      </div>
      <span class="kaart__nr">(${String(i + 1).padStart(2, "0")})${p.wip ? ' <em class="kaart__wip">work in progress</em>' : ""}</span>
      <h2>${p.kaartNaam || p.naam}</h2>
      <p>${p.wat || p.type}</p>
    </a>`).join("");
}

// ---------- Stress-o-meter ----------
const STRESS = [
  { app: "Figma", img: 1, niveau: 8, tekst: "Hier word ik nooit gestresseerd. Auto-layout = innerlijke rust." },
  { app: "Illustrator", img: 1, niveau: 12, tekst: "Nooit stress. Ankerpuntjes verschuiven is mijn meditatie." },
  { app: "Photoshop", img: 2, niveau: 42, tekst: "Medium. Nog één aanpassingslaag… en nog één." },
  { app: "Lightroom", img: 2, niveau: 48, tekst: "Medium. Nog één preset proberen. Of twaalf." },
  { app: "Premiere Pro", img: 3, niveau: 58, tekst: "Exporteren: 3%… 3%… nog altijd 3%." },
  { app: "Excel", img: 3, niveau: 70, tekst: "Net over medium. Waarom geeft die formule #VERW!?" },
  { app: "InDesign", img: 4, niveau: 90, tekst: "Waarom staat dat ene tekstkader opeens op pagina 34?!" },
  { app: "After Effects", img: 5, niveau: 100, tekst: "De keyframes doen wat ze willen. Ik neem even pauze." }
];

// Plek van elk label rond de tekening: links (x%), boven (y%), draaiing
const PLEK = [[16,10,-7],[10,38,5],[14,66,-4],[26,86,6],[64,6,5],[72,34,-6],[70,62,4],[58,86,-5]];

function bouwStress() {
  const knoppen = document.getElementById("stress-knoppen");
  if (!knoppen) return;
  const img = document.getElementById("stress-img");
  const ballon = document.getElementById("stress-tekst");
  const meter = document.getElementById("stress-meter");

  knoppen.innerHTML = STRESS.map((s, i) => {
    const [x, y, r] = PLEK[i % PLEK.length];
    return `<button type="button" data-i="${i}" aria-pressed="false" style="--x:${x}%;--y:${y}%;--r:${r}deg">${s.app}</button>`;
  }).join("");

  function kies(i) {
    const s = STRESS[i];
    knoppen.querySelectorAll("button").forEach(b => {
      const aan = b.dataset.i == i;
      b.setAttribute("aria-pressed", aan);
      b.classList.toggle("wiebel", aan);
    });
    const nieuw = `assets/img/about/stress-${s.img}.webp`;
    if (!img.src.endsWith(nieuw)) {
      img.classList.add("wissel");
      setTimeout(() => { img.src = nieuw; img.classList.remove("wissel"); }, 160);
    }
    img.alt = `Tekening van Samira aan haar laptop: ${s.app}`;
    ballon.hidden = false;
    ballon.textContent = s.tekst;
    ballon.classList.remove("pop"); void ballon.offsetWidth; ballon.classList.add("pop");
    meter.style.height = s.niveau + "%";
  }
  knoppen.addEventListener("click", e => { const b = e.target.closest("button"); if (b) kies(+b.dataset.i); });
}

// ---------- Contact: mail me / bel me tonen je gegevens ----------
function bouwContact() {
  if (typeof SITE === "undefined") return;
  const knopMail = document.getElementById("knop-mail");
  if (!knopMail) return;
  const knopBel = document.getElementById("knop-bel");
  const toonMail = document.getElementById("toon-mail");
  const toonBel = document.getElementById("toon-bel");

  const kaartje = (label, waarde, href, actie) => `
    <div class="kaartje">
      <div><small>${label}</small><a href="${href}">${waarde}</a></div>
      <div class="acties">
        <button class="knop knop--klein knop--rand" type="button" data-kopieer="${waarde}">kopieer</button>
        <a class="knop knop--klein" href="${href}">${actie}</a>
      </div>
    </div>`;

  toonMail.innerHTML = kaartje("e-mail", SITE.schoolMail, `mailto:${SITE.schoolMail}`, "mail");
  toonBel.innerHTML = kaartje("gsm", SITE.telefoon, `tel:${SITE.telefoonLink}`, "bel");

  function zet(knop, paneel, open) {
    knop.setAttribute("aria-expanded", open);
    paneel.hidden = !open;
  }
  knopMail.addEventListener("click", () => zet(knopMail, toonMail, toonMail.hidden));
  knopBel.addEventListener("click", () => zet(knopBel, toonBel, toonBel.hidden));

  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-kopieer]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.kopieer); b.textContent = "gekopieerd ✓"; }
    catch { b.textContent = "selecteer en kopieer"; }
    setTimeout(() => (b.textContent = "kopieer"), 1800);
  });

  // Vanuit de footer (contact.html#mail of #bel): meteen openen
  if (location.hash === "#mail") zet(knopMail, toonMail, true);
  if (location.hash === "#bel") zet(knopBel, toonBel, true);

  const opl = document.getElementById("f-opleiding");
  if (opl) opl.textContent = SITE.opleiding;
  if (SITE.linkedin) {
    document.getElementById("f-linkedin").href = SITE.linkedin;
    document.getElementById("f-linkedin-rij").hidden = false;
  }
}

// ---------- Inschuiven bij scrollen ----------
function bouwReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

bouwCases();
bouwStress();
bouwContact();
bouwReveal();
