/* Oiê landing page v2: the visitor's family, the scrolling story, and the PT/EN switch (decision 0013). */
(function () {
  "use strict";

  /* ---------- People: many receivers, friends too ---------- */
  const PEOPLE = {
    pt: {
      kid: { son: { name: "Tito", sil: "son" }, daughter: { name: "Lia", sil: "daughter" } },
      parent: { mother: { name: "Ana", sil: "mother" }, father: { name: "Paulo", sil: "father" } },
      recv: {
        grandma: { name: "Vó Rosa", init: "Vó", the: "a Vó Rosa", of: "da Vó Rosa", cap: "no WhatsApp dela", msg: "Oi vó, tô com saudade", reply: "Também, meu amor. Domingo tem bolo." },
        grandpa: { name: "Vô Zé", init: "Vô", the: "o Vô Zé", of: "do Vô Zé", cap: "no WhatsApp dele", msg: "Oi vô, me ensina a pescar?", reply: "Ensino sim. Domingo bem cedo." },
        aunt: { name: "Tia Bia", init: "T", the: "a Tia Bia", of: "da Tia Bia", cap: "no WhatsApp dela", msg: "Tia, vem no meu aniversário?", reply: "Vou sim, e levo o bolo." },
        friend: { name: "Lucas", init: "L", the: "o Lucas", of: "do Lucas", cap: "da escola", msg: "Viu o jogo ontem?", reply: "Vi sim, que golaço." },
      },
      story: {
        s1h: "{Kid} quer falar com {rThe}.",
        s1p: "Como no telefone de casa, do outro lado só tem gente conhecida. Um toque na foto, e é só escrever, gravar um áudio ou mandar uma foto.",
        s2h: "A mensagem sai pela linha da casa: o seu WhatsApp.",
        s2p: "O Oiê manda pelo WhatsApp do seu celular, com o nome de {Kid} na frente, e {Kid} sabe disso desde o primeiro dia.",
        s3h: "E chega no WhatsApp {rOf}.",
        s3p: "Para {rThe}, é uma mensagem como qualquer outra. Ninguém precisa baixar nada.",
        s4h: "{RThe} responde como sempre.",
        s4p: "A resposta volta para o tablet de {Kid}, na conversa com {rThe}.",
        s5h: "Não é só {rThe}.",
        s5p: "Avós, tios, primos e os amigos da escola: a turma de sempre. Ninguém de fora, nenhum anúncio, nenhum feed.",
        s6h: "Você escolhe quem está na agenda.",
        s6p: "Como a agenda ao lado do telefone: numa área com PIN, no próprio tablet, ficam os contatos e o horário de silêncio. No seu celular, você só lê um QR, uma vez.",
        capKid6: "na área dos pais",
      },
    },
    en: {
      kid: { son: { name: "Tito", sil: "son" }, daughter: { name: "Lia", sil: "daughter" } },
      parent: { mother: { name: "Ana", sil: "mother" }, father: { name: "Paulo", sil: "father" } },
      recv: {
        grandma: { name: "Grandma Rosa", short: "Rosa", init: "GR", the: "Grandma Rosa", of: "Grandma Rosa’s", cap: "in her WhatsApp", msg: "Hi Grandma, I miss you", reply: "Me too, sweetheart. There’s cake on Sunday." },
        grandpa: { name: "Grandpa Zé", short: "Zé", init: "GZ", the: "Grandpa Zé", of: "Grandpa Zé’s", cap: "in his WhatsApp", msg: "Grandpa, will you teach me to fish?", reply: "I will. Sunday, bright and early." },
        aunt: { name: "Aunt Bia", short: "Bia", init: "B", the: "Aunt Bia", of: "Aunt Bia’s", cap: "in her WhatsApp", msg: "Will you come to my birthday?", reply: "I will, and I’ll bring the cake." },
        friend: { name: "Lucas", init: "L", the: "Lucas", of: "Lucas’s", cap: "from school", msg: "Did you see the game last night?", reply: "I did, what a goal." },
      },
      story: {
        s1h: "{Kid} wants to talk to {rThe}.",
        s1p: "Like the home phone, there are only familiar people on the other end. One tap on a face, then write, record a voice note or send a photo.",
        s2h: "The message goes out on the family line: your WhatsApp.",
        s2p: "Oiê sends it through the WhatsApp on your phone, with {Kid}’s name in front, and {Kid} knows this from day one.",
        s3h: "And it arrives in {rOf} WhatsApp.",
        s3p: "To {rThe}, it’s a message like any other. Nobody needs to install anything.",
        s4h: "{RThe} replies as usual.",
        s4p: "The reply comes back to {Kid}’s tablet, in the chat with {rThe}.",
        s5h: "It’s not only {rThe}.",
        s5p: "Grandparents, uncles and aunts, cousins and school friends: the usual crowd. No strangers, no ads, no feed.",
        s6h: "You choose who’s in the phone book.",
        s6p: "Like the phone book by the phone: in a PIN-protected area on the tablet itself, you keep the contacts and quiet hours. On your phone, you only scan a QR code, once.",
        capKid6: "in the parents’ area",
      },
    },
  };
  const ORDER = ["grandma", "grandpa", "aunt", "friend"];

  const EN = {
    skip: "Skip to the story", langGroup: "Language", navGet: "Download",
    h1: "Remember the home phone?",
    lede: "It’s back, now on the tablet: your kid talks with the family and friends you choose, through your WhatsApp, to share their day and stay close.",
    cta: "Download Oiê", ctaNote: "Open this page on your kid’s Android tablet (Android 8 or newer).", ctaHow: "How to install",
    familyTitle: "Build your family and see how it works", lgKid: "Who writes", kidSon: "Son", kidDaughter: "Daughter",
    lgParent: "Whose WhatsApp", parMother: "Mom", parFather: "Dad",
    lgRecv: "To whom", rcvGrandma: "Grandma Rosa", rcvGrandpa: "Grandpa Zé", rcvAunt: "Aunt Bia", rcvFriend: "Lucas, from school", familyGo: "See the story",
    again: "Change the family and watch again", stepOf: "of", storyA11y: "How it works", example: "Example", sent: "Sent", parentArea: "Contacts", waField: "Message", typing: "typing…",
    capKid: "on the tablet, with Oiê", capParent: "your WhatsApp, the bridge",
    auntName: "Aunt Bia", friendName: "Lucas, from school",
    yoursH: "Like the home phone.",
    f1: "<b>Only the usual crowd.</b> The family, friends and groups you approve. No one else talks to your kid through Oiê; in an approved group, anyone not on your kid’s list shows marked.",
    f2: "<b>No ads, no feed.</b> Nothing to scroll forever. Oiê is just for talking with the people your kid loves.",
    f3: "<b>Nothing goes through us.</b> Oiê has no servers: the tablet links to your WhatsApp like WhatsApp Web. Messages and contacts stay on your own devices. No analytics, no ads, no tracking.",
    noticeH: "Notice",
    n1: "Oiê is an independent app that connects to your WhatsApp the way WhatsApp Web does. <b>It is not affiliated with WhatsApp or Meta.</b>",
    n2: "Use at your own risk: linking a device is subject to WhatsApp’s terms, and WhatsApp may restrict or block numbers that use third-party apps. Oiê sends at a person’s pace, one message at a time, and explains this before you link.",
    faqH: "Questions from the family",
    q1: "Does the person receiving need to install anything?", a1: "No. Grandparents, aunts or friends get it in their WhatsApp, like any message from you, with your kid’s name in front.",
    q12: "Why a tablet and not a phone?", a12: "Because a tablet stays at home, like the home phone used to. It doesn’t go in a pocket, so your kid talks at calmer moments, sitting down, not all day. The idea is to talk with the people they love without getting a phone too early. Brazil’s federal guide recommends that children under 12 don’t have their own phone. If you decide on a phone, Oiê works on it too.",
    q2: "Can my kid talk to friends?", a2: "Yes, if you add the contact. The friend gets it from your number, with your kid’s name in front. Your kid only talks to people you approve. In a group you approve, they see the whole group, and anyone not on their list shows marked.",
    q3: "Does my kid need a phone?", a3: "No. Oiê runs on an Android tablet you already have and uses your WhatsApp.",
    q11: "Is Oiê safe?", a11: "It’s built so that little can go wrong. Oiê has no server, so nothing about your family passes through us. The kid only talks with the people you approve, the parents’ area has a PIN, and the conversations are encrypted on the tablet. Even so, no app makes a kid 100% safe, and using WhatsApp through an unofficial app can lead WhatsApp to restrict the number. Oiê is <b>open source</b>: you, or someone you trust, can <a href=\"https://github.com/gabrielbr/FamilyZap\" rel=\"noopener\">read the code on GitHub</a> and check all of this.",
    q4: "Is Oiê made by WhatsApp?", a4: "No. Oiê is an independent app that connects to your WhatsApp the way WhatsApp Web does, and it is not affiliated with WhatsApp or Meta. Use is subject to WhatsApp’s terms, and WhatsApp may restrict or block numbers that use third-party apps. That’s why Oiê sends at a person’s pace, one message at a time.",
    q9: "Does Oiê keep anything about my family?", a9: "No. Oiê has no servers. The tablet links to your WhatsApp like WhatsApp Web, and messages go only through WhatsApp. There are no analytics, ads or tracking. The only other connection checks for a new version of Oiê on its public GitHub page.",
    q10: "What if WhatsApp blocks my number?", a10: "Oiê stops at once, shows WhatsApp’s notice on the tablet with how long it lasts, and doesn’t try again on its own. On your phone, follow what WhatsApp shows you. Whenever you like, unlink Oiê in Linked devices, in your WhatsApp.",
    q5: "Do I see what my kid sends?", a5: "Yes. Messages go out from your WhatsApp, so they’re on your phone too. Your kid is told this the first time.",
    q6: "Can they see and post status updates?", a6: "Yes, if you turn it on in settings. Your kid sees updates from their contacts, and only those people see what your kid posts.",
    q7: "Can they make calls?", a7: "Not yet. For now: messages, voice notes, photos, videos and stickers.",
    q8: "Why isn’t it on the Play Store?", a8: "For now Oiê is downloaded straight from its releases page. Each release comes with a code (SHA-256) to check the file is the original, and the app tells you when there’s a new version.",
    getH: "Ready for the first hello?",
    g1: "On your kid’s tablet, tap Download Oiê and open the file.", g2: "If Android asks, allow installing apps from the browser. If it won’t let you, the tablet may have parental or school controls: whoever manages it can allow it.",
    g3: "Open Oiê: your name, your kid’s, and a QR code you scan in your WhatsApp.", g4: "Choose the contacts, family or friends. Your kid can send the first hello.",
    getSmall: "For Android 8 or newer. The file comes from Oiê’s releases page on GitHub, with a code (SHA-256) to check the file is the original.",
    navSafety: "Safety", footSafety: "Why Oiê, and kids safe online", navSafetyHref: "safety/",
    navTalk: "Family and friends", footTalk: "For family and friends: how to talk to the child", footTalkHref: "talk-to-a-child/",
    footLine: "The home phone, back.", footCode: "The code on GitHub",
    made: "Oiê is <b>open source</b>. Made by <a href=\"https://www.gabriellopes.com\" rel=\"noopener\">Gabriel Lopes</a>.", footAll: "All releases", footLib: "whatsmeow (MPL-2.0)", footPatch: "The whatsmeow file Oiê modifies",
    footLegal: "Oiê is an independent app, not affiliated with WhatsApp or Meta. WhatsApp is a trademark of Meta. The screens on this page are example drawings.",
    title: "Oiê: the home phone, now on the tablet",
    desc: "Remember the home phone? Oiê brings it back, on the tablet: your kid talks with the family and friends you choose, through your WhatsApp. No ads, no feed, no servers.",
  };

  document.documentElement.classList.add("js");
  const PT = {};
  document.querySelectorAll("[data-t]").forEach((el) => (PT[el.dataset.t] = el.textContent));
  document.querySelectorAll("[data-t-html]").forEach((el) => (PT[el.dataset.tHtml] = el.innerHTML));
  document.querySelectorAll("[data-t-aria]").forEach((el) => (PT[el.dataset.tAria] = el.getAttribute("aria-label")));
  document.querySelectorAll("[data-t-href]").forEach((el) => (PT[el.dataset.tHref] = el.getAttribute("href")));
  PT.title = document.title;
  PT.desc = document.querySelector('meta[name="description"]').content;

  let lang = "pt";
  const pick = { kid: "son", parent: "mother", recv: "grandpa" };
  let shownRecv = "grandpa"; // who the receiver's phone shows right now (step 5 cycles through the others)
  let step = 0;

  const $ = (s) => document.querySelector(s);
  const all = (s) => document.querySelectorAll(s);
  const cap1 = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const dict = () => (lang === "en" ? EN : PT);
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode: fine */ } }
  function stored(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------- Filling the page ---------- */
  function fillStatic() {
    const d = dict();
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    all("[data-t]").forEach((el) => { if (d[el.dataset.t] != null) el.textContent = d[el.dataset.t]; });
    all("[data-t-html]").forEach((el) => { if (d[el.dataset.tHtml] != null) el.innerHTML = d[el.dataset.tHtml]; });
    all("[data-t-aria]").forEach((el) => { if (d[el.dataset.tAria] != null) el.setAttribute("aria-label", d[el.dataset.tAria]); });
    all("[data-t-href]").forEach((el) => { if (d[el.dataset.tHref] != null) el.setAttribute("href", d[el.dataset.tHref]); });
    document.title = d.title;
    $('meta[name="description"]').content = d.desc;
    all(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  function fillPeople() {
    const P = PEOPLE[lang];
    const kid = P.kid[pick.kid], parent = P.parent[pick.parent], r = P.recv[shownRecv], chosen = P.recv[pick.recv];
    const v = {
      kidName: kid.name, parentName: parent.name, parentInitial: parent.name.charAt(0),
      recvName: r.name, recvInitial: r.init, recvCap: r.cap, msg: r.msg, reply: r.reply,
    };
    ORDER.forEach((k, i) => { v["tile" + i] = P.recv[k].init; v["tile" + i + "n"] = P.recv[k].short || P.recv[k].name; });
    all("[data-v]").forEach((el) => { if (el.dataset.v in v && el.id !== "composeKid") el.textContent = v[el.dataset.v]; });
    drawPerson($("#silKid"), step === 6 ? parent.sil : kid.sil);
    drawPerson($("#silParent"), parent.sil);
    drawPerson($("#silRecv"), shownRecv);
    // The story's words follow the family the visitor built (the chosen receiver, not the one cycling in step 5).
    const words = { Kid: kid.name, rThe: chosen.the, RThe: cap1(chosen.the), rOf: chosen.of };
    all("[data-s]").forEach((el) => { el.textContent = P.story[el.dataset.s].replace(/\{(\w+)\}/g, (m, k) => (k in words ? words[k] : m)); });
    // In step 6 the parent holds the tablet (the parents' area).
    const kidCap = $(".actor--kid figcaption");
    kidCap.querySelector("b").textContent = step === 6 ? parent.name : kid.name;
    kidCap.querySelector("span").textContent = step === 6 ? P.story.capKid6 : dict().capKid;
  }

  // The three people are drawn inline (copied from the page's symbols) so each head can move on its own.
  function drawPerson(svg, key) {
    if (svg.dataset.person === key && svg.childElementCount) return;
    svg.dataset.person = key;
    svg.innerHTML = document.getElementById("p-" + key).innerHTML;
  }

  // A keyboard in each screen: it rises while someone types, and a key flashes for every letter.
  all(".oie, .wa").forEach((screen) => {
    const k = document.createElement("div");
    k.className = "kbd";
    k.setAttribute("aria-hidden", "true");
    [10, 9, 7].forEach((n) => { const row = document.createElement("span"); row.className = "kbd__row"; for (let i = 0; i < n; i++) row.appendChild(document.createElement("i")); k.appendChild(row); });
    const space = document.createElement("span"); space.className = "kbd__row"; const bar = document.createElement("i"); bar.className = "kbd__space"; space.appendChild(bar); k.appendChild(space);
    screen.appendChild(k);
  });

  // The other people in step 5 get their full figures (details included), not a plain outline.
  all("svg[data-draw]").forEach((svg) => drawPerson(svg, svg.dataset.draw));

  /* ---------- The story ---------- */
  const stage = $("#stage");
  const dot = $("#dot");
  const run = $("#run");
  const tagText = $("#tagText");
  const tagNext = $("#tagNext");
  const tagBar = $("#tagBar");
  const composeKid = $("#composeKid");
  const composeRecv = $("#composeRecv");
  const waTyping = $("#waTyping");
  const waDots = $("#waDots");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)");
  let typer = null;
  let later = []; // timers that belong to the current step; cleared when the step changes
  let cycler = null;
  const CHAR_MS = 90;

  // Someone types: their keyboard rises, their thumbs tap, a key flashes for each letter, and the words appear.
  function type(el, text, done) {
    clearInterval(typer);
    const actor = el.closest(".actor");
    const device = el.closest(".device");
    if (still.matches) { el.textContent = text; if (done) done(); return; }
    const keys = Array.from(device.querySelectorAll(".kbd i"));
    let n = 0;
    el.classList.add("is-typing");
    actor.classList.add("is-typing");
    device.classList.add("is-typing");
    el.innerHTML = '<span class="caret"></span>';
    typer = setInterval(() => {
      n += 1;
      el.innerHTML = esc(text.slice(0, n)) + '<span class="caret"></span>';
      const key = text[n - 1] === " " ? device.querySelector(".kbd__space") : keys[(text.charCodeAt(n - 1) * 7) % (keys.length - 1)];
      if (key) { key.classList.add("is-hit"); setTimeout(() => key.classList.remove("is-hit"), 120); }
      if (n >= text.length) {
        clearInterval(typer);
        later.push(setTimeout(() => {
          el.textContent = text;
          actor.classList.remove("is-typing");
          device.classList.remove("is-typing");
          if (done) done();
        }, 500));
      }
    }, CHAR_MS);
  }

  // A small, once-only reaction from someone in the story (a nod as they read, a hop as the answer lands).
  function react(who, kind) {
    if (still.matches) return;
    const actor = $(".actor--" + who);
    actor.classList.remove("is-nod", "is-hop");
    void actor.offsetWidth;
    actor.classList.add(kind);
  }

  // Where the message is on the wire: 0 the kid, 0.5 the parent, 1 the receiver; null hides it.
  function moveDot(to) {
    if (to == null) { dot.style.opacity = "0"; return; }
    dot.style.opacity = "1";
    run.style.transform = "translateX(" + to * 100 + "%)";
  }

  function setStep(n, focus, force) {
    if (!force && n === step && stage.dataset.focus === focus) return;
    step = n;
    stage.dataset.step = String(n);
    stage.dataset.focus = focus || "kid";
    all(".step").forEach((s) => s.classList.toggle("is-on", Number(s.dataset.step) === n));
    // Where the reader is in the story: "Exemplo · 2 de 6".
    tagText.textContent = dict().example + (n > 0 ? " · " + n + " " + (lang === "en" ? "of" : "de") + " 6" : "");
    // The count is also the way on: "Próximo" goes to the next step (until the last).
    // The bar shows the six steps at a glance, so it's plain there's more below (owner, 2026-11-21: on phones
    // the example didn't look like something to scroll through).
    tagBar.hidden = n < 1;
    Array.from(tagBar.children).forEach((seg, i) => seg.classList.toggle("is-done", i < n));
    tagNext.hidden = n < 1 || n > 5;
    tagNext.href = "#passo-" + (n + 1);
    tagNext.textContent = lang === "en" ? "Next" : "Próximo";
    clearInterval(typer); clearInterval(cycler);
    later.forEach(clearTimeout); later = [];
    stage.removeAttribute("data-replied");
    waTyping.hidden = true;
    waDots.classList.remove("is-on");
    all(".actor, .device").forEach((el) => el.classList.remove("is-typing", "is-nod", "is-hop"));
    composeRecv.classList.remove("is-typing");
    composeRecv.textContent = dict().waField;
    shownRecv = pick.recv;
    fillPeople();
    const r = PEOPLE[lang].recv[pick.recv];
    composeKid.textContent = "";
    if (n === 1) { moveDot(0); type(composeKid, r.msg); }
    else if (n === 2) { moveDot(0.5); react("parent", "is-nod"); }
    else if (n === 3) { moveDot(1); react("recv", "is-nod"); }
    else if (n === 4) {
      moveDot(1);
      // WhatsApp shows the parent that the other person is typing: "digitando…" and the three dots.
      waTyping.hidden = false;
      waDots.classList.add("is-on");
      type(composeRecv, r.reply, () => {
        waTyping.hidden = true;
        waDots.classList.remove("is-on");
        composeRecv.classList.remove("is-typing");
        composeRecv.textContent = dict().waField;
        stage.setAttribute("data-replied", "");
        moveDot(0);
        // On a phone one person shows at a time: once the answer is back, the tablet takes the stage.
        if (narrow.matches) stage.dataset.focus = "kid";
        later.push(setTimeout(() => react("kid", "is-hop"), 900));
      });
    } else if (n === 5) {
      moveDot(null);
      if (!still.matches) {
        let i = ORDER.indexOf(pick.recv);
        // Each of the others once, then back to the family's own choice, and it stops (nothing loops forever).
        let left = ORDER.length;
        cycler = setInterval(() => { i = (i + 1) % ORDER.length; shownRecv = ORDER[i]; fillPeople(); if (--left === 0) clearInterval(cycler); }, 2200);
      }
    } else { moveDot(null); }
  }

  // On a phone the stage pins over the top 62% of the screen; the step being read is the one in the band below it.
  const narrow = window.matchMedia("(max-width: 899px)");
  let heroShows = true;
  // The step being read is the one whose words sit on the reading line: the middle of the screen beside the
  // stage on a desktop, the band under the pinned stage on a phone. The stage changes exactly as the words arrive.
  function watchSteps() {
    const steps = Array.from(all(".step"));
    const family = $(".family");
    let frame = 0;
    function pick() {
      frame = 0;
      // On a phone the words are read in the band under the pinned stage (54% of the screen), a third of the way
      // down it, so the step that's on keeps its heading in view; on a desktop, mid-screen.
      const line = narrow.matches ? stage.offsetHeight + (innerHeight - stage.offsetHeight) * 0.3 : innerHeight * 0.5;
      let best = null, gap = Infinity;
      steps.forEach((s) => {
        const r = s.firstElementChild.getBoundingClientRect();
        const d = Math.abs((r.top + r.bottom) / 2 - line);
        if (d < gap) { gap = d; best = s; }
      });
      // On a phone the stage would pin over the family form: while the form still shows below where the stage
      // would sit, the story waits at step 0 (the stage scrolls with the page); then it pins and step 1 follows.
      if (narrow.matches && family.getBoundingClientRect().bottom > stage.offsetHeight - 24) best = steps[0];
      if (best && !heroShows) setStep(Number(best.dataset.step), best.dataset.focus);
    }
    const ask = () => { if (!frame) frame = requestAnimationFrame(pick); };
    addEventListener("scroll", ask, { passive: true });
    addEventListener("resize", ask);
    ask();
    // Back at the top (the hero), the stage rests at step 0: everyone standing, nothing sent.
    // Once the hero is gone, the stage is pinned and centres itself.
    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver((entries) => {
      heroShows = entries[0].isIntersecting;
      stage.classList.toggle("is-pinned", !heroShows);
      if (heroShows) setStep(0, "kid"); else ask();
    }).observe($(".hero"));
  }

  /* ---------- Controls ---------- */
  const family = $("#family");
  family.addEventListener("change", (e) => {
    const t = e.target;
    if (!(t.name in pick)) return;
    pick[t.name] = t.value;
    store("oie-family", JSON.stringify(pick));
    setStep(step, stage.dataset.focus, true);
  });
  family.addEventListener("submit", (e) => e.preventDefault());
  all(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang === "en" ? "en" : "pt";
    store("oie-lang", lang);
    fillStatic();
    setStep(step, stage.dataset.focus, true);
  }));

  function start() {
    try {
      const saved = JSON.parse(stored("oie-family") || "null");
      if (saved) Object.keys(pick).forEach((k) => {
        const input = saved[k] && family.querySelector(`input[name="${k}"][value="${saved[k]}"]`);
        if (input) { pick[k] = saved[k]; input.checked = true; }
      });
    } catch (e) { /* fine */ }
    const wanted = new URLSearchParams(location.search).get("lang") || stored("oie-lang");
    lang = wanted === "en" ? "en" : "pt";
    fillStatic();
    setStep(0, "kid", true);
    watchSteps();
  }
  start();
})();
