// ------------------- FULL TAROT DECK (FATE) -------------------
const FULL_TAROT_DECK = [
  { name: "The Fool", meaning: "New beginnings, innocence, leap of faith", image: "../assets/tarot/major/fool.jpg" },
  { name: "The Magician", meaning: "Manifestation, power, skill", image: "../assets/tarot/major/magician.jpg" },
  { name: "The High Priestess", meaning: "Intuition, mystery, subconscious", image: "../assets/tarot/major/high-priestess.jpg" },
  { name: "The Empress", meaning: "Creation, fertility, nurturing", image: "../assets/tarot/major/empress.jpg" },
  { name: "The Emperor", meaning: "Structure, authority, control", image: "../assets/tarot/major/emperor.jpg" },
  { name: "The Lovers", meaning: "Love, union, choices", image: "../assets/tarot/major/lovers.jpg" },
  { name: "The Chariot", meaning: "Determination, progress, victory", image: "../assets/tarot/major/chariot.jpg" },
  { name: "Strength", meaning: "Courage, patience, control", image: "../assets/tarot/major/strength.jpg" },
  { name: "The Hermit", meaning: "Introspection, wisdom, solitude", image: "../assets/tarot/major/hermit.jpg" },
  { name: "Wheel of Fortune", meaning: "Change, cycles, destiny", image: "../assets/tarot/major/wheel.jpg" },
  { name: "Justice", meaning: "Fairness, truth, law", image: "../assets/tarot/major/justice.jpg" },
  { name: "The Hanged Man", meaning: "Sacrifice, perspective, surrender", image: "../assets/tarot/major/hangedman.jpg" },
  { name: "Death", meaning: "Transformation, endings, rebirth", image: "../assets/tarot/major/death.jpg" },
  { name: "Temperance", meaning: "Balance, moderation, harmony", image: "../assets/tarot/major/temperance.jpg" },
  { name: "The Devil", meaning: "Bondage, materialism, temptation", image: "../assets/tarot/major/devil.jpg" },
  { name: "The Tower", meaning: "Sudden change, upheaval, revelation", image: "../assets/tarot/major/tower.jpg" },
  { name: "The Star", meaning: "Hope, inspiration, serenity", image: "../assets/tarot/major/star.jpg" },
  { name: "The Moon", meaning: "Illusion, intuition, fear", image: "../assets/tarot/major/moon.jpg" },
  { name: "The Sun", meaning: "Joy, success, vitality", image: "../assets/tarot/major/sun.jpg" },
  { name: "Judgement", meaning: "Reflection, reckoning, awakening", image: "../assets/tarot/major/judgement.jpg" },
  { name: "The World", meaning: "Completion, fulfillment, harmony", image: "../assets/tarot/major/world.jpg" }
];

// ------------------- CHAPTERS -------------------
const chapters = {
  1: { title: "The Tower (XVI) – The Void", file: "chap1.txt", tarot: [
    { name: "The Tower (XVI)",interpretation: "" , frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/default-back.jpg"},
    { name: "The Hanged Man (XII)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/default-back.jpg" },
    { name: "The Moon (XVIII)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/default-back.jpg"}
  ], nextChapter: 2 },
  2: { title: "The Hermit (IX) – The Gift of Knowledge", file: "chap2.txt", tarot: [
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"},
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
  ], nextChapter: 3 ,prevChapter: 1 },
  3: { title: "The Empress (III) - The Genesis ", file: "chap3.txt", tarot: [
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"},
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
    { name: "The Empress (III)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/empress.jpg"},
  ] , nextChapter: 4 , prevChapter: 2 },
  4: { title: "The Justice (XI) - The Reckoning", file: "chap4.txt", tarot: [
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"},
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
    { name: "The Empress (III)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/empress.jpg"},
    { name: "Justice (XI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/justice.jpg"},
  ] , nextChapter: 5 , prevChapter: 3 },
  5: { title: "The Lovers (VI) - The Bargain", file: "chap5.txt" , tarot: [
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"},
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
    { name: "The Empress (III)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/empress.jpg"},
    { name: "Justice (XI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/justice.jpg"},
    { name: "The Lovers (VI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/lovers.jpg"},
  ] , nextChapter:6 , prevChapter: 4 },
  6: { title: "The Chariot (VII) - Driven Progress", file: "chap6.txt" , tarot: [
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"}, 
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
    { name: "The Empress (III)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/empress.jpg"},
    { name: "Justice (XI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/justice.jpg"},
    { name: "The Lovers (VI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/lovers.jpg"},
    { name: "The Chariot (VII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/chariot.jpg"},
  ] , nextChapter: 7 , prevChapter: 5 },   
  7: { title:"Strength (VIII) - The Resilient of Guilt", file: "chap7.txt" , tarot: [  
    { name: "The Tower (XVI)", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/tower.jpg" },
    { name: "The Hanged Man (XII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hangedman.jpg"},
    { name: "The Moon (XVIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/moon.jpg"}, 
    { name: "The Hermit (IX)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/hermit.jpg"},
    { name: "The Empress (III)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/empress.jpg"},
    { name: "Justice (XI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/justice.jpg"},
    { name: "The Lovers (VI)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/lovers.jpg"},
    { name: "The Chariot (VII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/chariot.jpg"},
    { name: "Strength (VIII)", interpretation: "" ,frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/strength.jpg"},
  ] , nextChapter: 8 , prevChapter: 6 },
  8: { title: "Coming Soon", file: "chap8.txt" , tarot: [
    { name: "Coming Soon", interpretation: "",frontImg: "../assets/tarot/cover/scorpio.jpg", backImg: "../assets/tarot/major/default-back.jpg" },
  ] , prevChapter: 7 },
};

// ------------------- DOM ELEMENTS -------------------
const storyEl = document.getElementById('story'),
      tarotEl = document.getElementById('tarotDisplay'),
      choicesEl = document.getElementById('choices'),
      chapterEnd = document.getElementById('chapterEnd'),
      skipBtn = document.getElementById('skipBtn'),
      voiceBtn = document.getElementById('voiceBtn'),
      fab = document.getElementById("themeFab"),
      fabMain = fab ? fab.querySelector(".fab-main") : null,
      themeBtns = fab ? fab.querySelectorAll(".theme-btn") : [];

// ------------------- CONFIG: COOLDOWN -------------------
const FATE_COOLDOWN_MS = 3 * 60 * 1000;

function fateStorageKeyForChapter(chapterNumber){
  return `tower_ch${chapterNumber}_fate`;
}

// ------------------- CHAPTER LOGIC -------------------
let current = 1, skipping = false, utterance = null, typingTimeout = null;
const urlParams = new URLSearchParams(window.location.search);
current = parseInt(urlParams.get('chap')) || 1;

function cancelTyping(){ if(typingTimeout){ clearTimeout(typingTimeout); typingTimeout=null; } }
function cancelSpeech(){ if(utterance){ speechSynthesis.cancel(); utterance=null; if(voiceBtn) voiceBtn.textContent='🔊 Play Voice'; } }

async function typeWriter(text, speed = 25){
  cancelTyping(); skipping = false; storyEl.textContent = '';
  return new Promise(resolve => {
    let i = 0;
    function nextChar(){
      if(skipping){ storyEl.textContent = text; resolve(); return; }
      if(i < text.length){ storyEl.textContent += text[i]; i++; typingTimeout = setTimeout(nextChar, speed); }
      else{ typingTimeout = null; resolve(); }
    }
    nextChar();
  });
}

function clearChoices(){ choicesEl.innerHTML = ''; }
function showChoices(list){ clearChoices(); list.forEach((c, idx) => {
  const b = document.createElement('button');
  b.className = 'choice';
  b.innerHTML = `<strong>${idx+1}</strong> ${c.text}`;
  b.addEventListener('click', c.action);
  choicesEl.appendChild(b);
}); }

function concludeChapter(){
  cancelTyping(); cancelSpeech();
  storyEl.textContent = `--- End of Chapter ${current} ---\n\nThis chapter ends here.`;
  chapterEnd.classList.remove('hidden'); tarotEl.classList.add('hidden'); clearChoices();

  if(chapters[current]?.prevChapter){
    const prevBtn = document.createElement('button');
    prevBtn.className = 'choice';
    prevBtn.innerHTML = 'Previous Chapter';
    prevBtn.addEventListener('click', () => loadChapter(chapters[current].prevChapter));
    choicesEl.appendChild(prevBtn);
  }
  if(chapters[current]?.nextChapter){
    const nextBtn = document.createElement('button');
    nextBtn.className = 'choice';
    nextBtn.innerHTML = 'Next Chapter';
    nextBtn.addEventListener('click', () => loadChapter(chapters[current].nextChapter));
    choicesEl.appendChild(nextBtn);
  }
}

async function loadChapter(id){
  current = id;
  cancelTyping(); cancelSpeech();
  tarotEl.classList.add('hidden'); chapterEnd.classList.add('hidden'); clearChoices(); storyEl.textContent = '';
  const logo = document.querySelector('.logo');
  if(logo) logo.textContent = `CH. ${toRoman(current)}`;

  try{
    const response = await fetch(chapters[current].file);
    if(!response.ok) throw new Error('Chapter file not found.');
    const text = await response.text();
    await typeWriter(text);
  } catch(e){
    storyEl.textContent = "Error loading chapter text.";
    console.error(e);
  }

  showChoices([{ text: 'Continue', action: concludeChapter }]);
}

// ------------------- UTILS -------------------
function toRoman(num){
  const romans = [["M",1000], ["CM",900], ["D",500], ["CD",400],
                  ["C",100], ["XC",90], ["L",50], ["XL",40],
                  ["X",10], ["IX",9], ["V",5], ["IV",4], ["I",1]];
  let result = '';
  for (const [roman, value] of romans) while(num>=value){ result+=roman; num-=value; }
  return result;
}

function drawCards(number){
  const deckCopy = FULL_TAROT_DECK.map(c => ({ ...c }));
  const drawn = [];
  for(let i=0;i<number;i++){
    const idx = Math.floor(Math.random()*deckCopy.length);
    drawn.push(deckCopy.splice(idx,1)[0]);
  }
  return drawn;
}

// ------------------- THEME FAB (if present) -------------------
const themes = {
  forest: {'--bg': '#0b2d0b','--card': '#144214','--text': '#d6f7d6','--muted': '#94c794','--accent': '#7fff7f'},
  darkpurple: {'--bg': '#0c0a1c','--card': '#1a142f','--text': '#dcd6f7','--muted': '#9c94c7','--accent': '#a77fff'},
  midnight: {'--bg': '#080f26','--card': '#101a3a','--text': '#d0d9ff','--muted': '#7a87b6','--accent': '#5f9eff'},
  crimson: {'--bg': '#1c0a0a','--card': '#2f1414','--text': '#f7d6d6','--muted': '#c79494','--accent': '#ff7f7f'},
  light: {'--bg': '#f4f4ff','--card': '#e6e6ff','--text': '#222','--muted': '#999','--accent': '#6b4cff'},
  bubblegum: {'--bg': '#fff0f6','--card': '#fcbcd8ff','--text': '#4a003f','--muted': '#fa6eadff','--accent': '#ff5fa2'},
};

function applyTheme(themeName){
  const theme = themes[themeName];
  if(!theme) return;
  for(let key in theme) document.documentElement.style.setProperty(key, theme[key]);
  localStorage.setItem('LOYAL-theme', themeName);
}
window.addEventListener('load', () => {
  const saved = localStorage.getItem("LOYAL-theme") || 'darkpurple';
  applyTheme(saved);
});
if(fabMain){
  fabMain.addEventListener("click", () => fab.classList.toggle("open"));
  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
      fab.classList.remove("open");
    });
  });
}

// ------------------- RETURN HOME -------------------
const returnHome = document.getElementById('returnHome');
if(returnHome) returnHome.addEventListener('click', () => window.history.back());

// ------------------- SKIP & VOICE (fixed) -------------------
if(skipBtn){
  skipBtn.addEventListener('click', ()=> {
    skipping = true;
  });
}

if(voiceBtn){
  voiceBtn.addEventListener('click', ()=> {
    // If already speaking, cancel
    if(speechSynthesis.speaking || utterance){
      cancelSpeech();
      return;
    }
    // Try to read the current chapter text file
    if(!chapters[current] || !chapters[current].file){
      console.warn('No chapter file to read.');
      return;
    }
    fetch(chapters[current].file).then(r => {
      if(!r.ok) throw new Error('Chapter file not found for voice.');
      return r.text();
    }).then(text => {
      utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1; // more natural pitch than extreme 8
      utterance.lang = 'en-US';
      utterance.onend = () => { utterance = null; if(voiceBtn) voiceBtn.textContent = '🔊 Play Voice'; };
      utterance.onerror = () => { utterance = null; if(voiceBtn) voiceBtn.textContent = '🔊 Play Voice'; };
      speechSynthesis.speak(utterance);
      if(voiceBtn) voiceBtn.textContent = '🔇 Stop Voice';
    }).catch(err => {
      console.error('Voice fetch error:', err);
    });
  });
}

// ------------------- REPLAY & CHAPTER TAROT -------------------
const replayBtn = document.getElementById('replayBtn');
if(replayBtn) replayBtn.addEventListener('click', ()=> loadChapter(current));

const cardsBtn = document.getElementById('cardsBtn');
if(cardsBtn) cardsBtn.addEventListener('click', ()=> {
  cancelTyping(); cancelSpeech(); storyEl.textContent=''; tarotEl.innerHTML=''; tarotEl.classList.remove('hidden'); chapterEnd.classList.add('hidden');

  const wrapper = document.createElement('div');
  wrapper.className = 'tarot-cards';

  (chapters[current].tarot || []).forEach(card => {
    const el = document.createElement('div');
    el.className = 'tarot-card';
    el.innerHTML = `
      <div class='tarot-card-inner'>
        <div class='tarot-card-front'>
          <img src='${card.frontImg}' alt='${card.name}' style='width:100%; height:100%; border-radius:10px; object-fit:cover;' />
        </div>
        <div class='tarot-card-back'>
          <img src='${card.backImg}' alt='${card.name} Back' style='width:100%; height:100%; border-radius:10px; object-fit:cover;' />
          <div class='tarot-interpretation' style='position:absolute; inset:0; display:flex; justify-content:center; align-items:center; color:var(--accent); font-weight:bold; text-align:center; padding:5px;'>
            ${card.interpretation}
          </div>
        </div>
      </div>
    `;

    // modal inspect (preserve behavior)
    el.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'tarot-modal';
      modal.innerHTML = `
        <div class="tarot-modal-content">
          <button class="tarot-modal-close">✕</button>
          <img src="${card.backImg}" alt="${card.name}">
          <div class="tarot-modal-interpretation">${card.interpretation || ''}</div>
        </div>
      `;
      modal.querySelector('.tarot-modal-close').addEventListener('click', ()=> modal.remove());
      modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
      document.body.appendChild(modal);
    });

    wrapper.appendChild(el);
  });

  tarotEl.appendChild(wrapper);
  showChoices([{
    text: 'Return',
    action: () => { tarotEl.classList.add('hidden'); chapterEnd.classList.remove('hidden'); concludeChapter(); }
  }]);
});

// ------------------- FATE DRAW SYSTEM -------------------
const fateBtn = document.getElementById('fateBtn');
if(fateBtn){
  fateBtn.addEventListener('click', () => {
    cancelTyping(); cancelSpeech(); storyEl.textContent=''; tarotEl.innerHTML=''; tarotEl.classList.remove('hidden'); chapterEnd.classList.add('hidden');

    const baseKey = fateStorageKeyForChapter(current);
    const cardsKey = baseKey + '_cards';
    const tsKey = baseKey + '_ts';

    const lastTs = parseInt(localStorage.getItem(tsKey) || '0', 10);
    const lastCardsRaw = localStorage.getItem(cardsKey);
    const lastCards = lastCardsRaw ? JSON.parse(lastCardsRaw) : null;
    const now = Date.now();

    let container = document.getElementById("tarotCardsContainer");
    if(!container){
      container = document.createElement('div');
      container.id = 'tarotCardsContainer';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.gap = '18px';
      container.style.padding = '8px 0';
      container.style.overflowX = 'auto';
      tarotEl.appendChild(container);
    } else {
      // do NOT clear here if showing saved cards during cooldown — handled below
      container.innerHTML = '';
    }

    let drawWrapper = document.createElement('div');
    drawWrapper.style.display = 'flex';
    drawWrapper.style.justifyContent = 'center';
    drawWrapper.style.marginTop = '12px';
    tarotEl.appendChild(drawWrapper);

    const drawBtn = document.createElement('button');
    drawBtn.className = 'choice';
    drawBtn.style.minWidth = '140px';
    drawBtn.style.display = 'inline-block';
    drawWrapper.appendChild(drawBtn);

    let countdownInterval = null;
    function startCountdown(endsAt, btn){
      if(countdownInterval) clearInterval(countdownInterval);
      function update(){
        const remaining = endsAt - Date.now();
        if(remaining <= 0){
          btn.disabled = false;
          btn.textContent = 'Draw Fate Cards';
          clearInterval(countdownInterval);
          countdownInterval = null;
          // when cooldown ends, clear saved cards from view (per your request)
          if(container) container.innerHTML = '';
          // also clear stored cards to allow fresh UX (optional):
          // localStorage.removeItem(cardsKey);
          return;
        }
        const seconds = Math.ceil(remaining/1000);
        const mm = Math.floor(seconds/60).toString().padStart(2,'0');
        const ss = (seconds % 60).toString().padStart(2,'0');
        btn.disabled = true;
        btn.textContent = `Fate ready in ${mm}:${ss}`;
      }
      update();
      countdownInterval = setInterval(update,1000);
    }

    const cooldownActive = lastTs && (now - lastTs) < FATE_COOLDOWN_MS;

    if(lastCards && cooldownActive){
      // show saved cards face-down (interpretations hidden) during cooldown
      displayFateCardsWithExternalInterpretation(lastCards, container);
      startCountdown(lastTs + FATE_COOLDOWN_MS, drawBtn);
    } else {
      drawBtn.disabled = false;
      drawBtn.textContent = 'Draw Fate Cards';
      // if there are saved cards but cooldown expired, we clear saved cards so user can draw fresh
      if(lastCards && !cooldownActive){
        try { localStorage.removeItem(cardsKey); } catch(e){ /* ignore */ }
      }
    }

    drawBtn.addEventListener('click', () => {
      const last = parseInt(localStorage.getItem(tsKey) || '0',10);
      const now2 = Date.now();
      if(last && (now2 - last) < FATE_COOLDOWN_MS){
        startCountdown(last + FATE_COOLDOWN_MS, drawBtn);
        return;
      }

      // fresh draw — clear and show new cards face-down (user must click to flip)
      container.innerHTML = '';

      const drawn = drawCards(3);
      const cardsToSave = drawn.map(c => ({ ...c, orientation: Math.random() < 0.5 ? "Upright" : "Reversed", flipped: false }));
      localStorage.setItem(cardsKey, JSON.stringify(cardsToSave));
      localStorage.setItem(tsKey, String(Date.now()));

      displayFateCardsWithExternalInterpretation(cardsToSave, container);
      startCountdown(Date.now() + FATE_COOLDOWN_MS, drawBtn);
    });

    showChoices([{
      text: 'Return',
      action: () => { 
        // optionally clear interval to avoid memory leaks
        if(countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
        tarotEl.classList.add('hidden'); chapterEnd.classList.remove('hidden'); concludeChapter(); 
      }
    }]);
  });
}

// ------------------- DISPLAY CARDS -------------------
function displayFateCardsWithExternalInterpretation(cards, container){
  const positions = ["Past","Present","Future"];
  // Ensure container exists
  if(!container) return;
  container.innerHTML='';

  cards.forEach((card,i)=>{
    const cardWrapper = document.createElement('div');
    cardWrapper.style.display='flex';
    cardWrapper.style.flexDirection='column';
    cardWrapper.style.alignItems='center';
    cardWrapper.style.width='200px';
    cardWrapper.style.gap='6px';

    const cardEl = document.createElement('div');
    cardEl.className='tarot-card';
    cardEl.style.width='200px';
    cardEl.style.height='350px';
    cardEl.style.cursor='pointer';
    cardEl.style.position='relative';
    cardEl.style.flex='0 0 auto';

    const inner = document.createElement('div');
    inner.className='tarot-card-inner';
    inner.style.width='100%';
    inner.style.height='100%';
    inner.style.transformStyle='preserve-3d';
    inner.style.transition='transform 0.6s';

    const front = document.createElement('div');
    front.className='tarot-card-front';
    front.style.width='100%';
    front.style.height='100%';
    front.style.borderRadius='10px';
    front.style.overflow='hidden';
    front.style.backfaceVisibility='hidden';
    const frontImg = document.createElement('img');
    frontImg.src="../assets/tarot/cover/defaultcover.jpg";
    frontImg.alt='Card Back';
    frontImg.style.width='100%';
    frontImg.style.height='100%';
    frontImg.style.objectFit='cover';
    front.appendChild(frontImg);

    const back = document.createElement('div');
    back.className='tarot-card-back';
    back.style.width='100%';
    back.style.height='100%';
    back.style.borderRadius='10px';
    back.style.overflow='hidden';
    back.style.backfaceVisibility='hidden';
    back.style.transform='rotateY(180deg)';

    const innerBackContent = document.createElement('div');
    innerBackContent.style.width='100%';
    innerBackContent.style.height='100%';
    if(card.orientation==="Reversed") innerBackContent.style.transform='rotate(180deg)';
    const backImg = document.createElement('img');
    backImg.src=card.image;
    backImg.alt=card.name;
    backImg.style.width='100%';
    backImg.style.height='100%';
    backImg.style.objectFit='cover';
    innerBackContent.appendChild(backImg);
    back.appendChild(innerBackContent);

    inner.appendChild(front);
    inner.appendChild(back);
    cardEl.appendChild(inner);

    const interp = document.createElement('div');
    interp.className='fate-interpretation';
    interp.style.width='200px';
    interp.style.textAlign='center';
    interp.style.color='var(--accent)';
    interp.style.fontWeight='700';
    interp.style.fontSize='13px';
    interp.style.minHeight='44px';
    interp.style.display='none';
    interp.style.whiteSpace='pre-line';
    interp.innerHTML=`<strong>${positions[i]}:</strong> ${card.name} (${card.orientation})<br>${card.meaning}`;

    cardEl.addEventListener('click',()=>{
      const nowFlipped = cardEl.classList.toggle('flipped');
      // Visual flip: toggle transform on inner
      if(nowFlipped){
        inner.style.transform = 'rotateY(180deg)';
      } else {
        inner.style.transform = '';
      }
      interp.style.display = nowFlipped ? 'block' : 'none';

      try{
        const baseKey = fateStorageKeyForChapter(current);
        const cardsKey = baseKey+'_cards';
        const raw = localStorage.getItem(cardsKey);
        if(raw){
          const saved = JSON.parse(raw);
          const idx = saved.findIndex(sc => sc.name===card.name && sc.image===card.image);
          if(idx!==-1){
            saved[idx].flipped = nowFlipped;
            localStorage.setItem(cardsKey, JSON.stringify(saved));
          }
        }
      } catch(e){ console.error(e); }

      // Inspect Tarot modal
      const modal = document.createElement('div');
      modal.className='tarot-modal';
      modal.innerHTML=`
        <div class="tarot-modal-content">
          <button class="tarot-modal-close">✕</button>
          <img src="${card.image}" alt="${card.name}" />
          <div class="tarot-modal-interpretation">${card.name} (${card.orientation})<br>${card.meaning}</div>
        </div>
      `;
      modal.querySelector('.tarot-modal-close').addEventListener('click',()=>modal.remove());
      modal.addEventListener('click', e=>{if(e.target===modal) modal.remove();});
      document.body.appendChild(modal);
    });

    cardWrapper.appendChild(cardEl);
    cardWrapper.appendChild(interp);
    container.appendChild(cardWrapper);
  });
}

// ------------------- INITIAL LOAD -------------------
loadChapter(current);
