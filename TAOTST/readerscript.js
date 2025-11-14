// --- Chapters ---
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

// --- DOM Elements ---
const storyEl = document.getElementById('story'),
      tarotEl = document.getElementById('tarotDisplay'),
      choicesEl = document.getElementById('choices'),
      chapterEnd = document.getElementById('chapterEnd'),
      skipBtn = document.getElementById('skipBtn'),
      voiceBtn = document.getElementById('voiceBtn'),
      fab = document.getElementById("themeFab"),
      fabMain = fab.querySelector(".fab-main"),
      themeBtns = fab.querySelectorAll(".theme-btn");

// --- Determine current chapter from URL or default ---
const urlParams = new URLSearchParams(window.location.search);
let current = parseInt(urlParams.get('chap')) || 1;
let skipping = false, utterance = null, typingTimeout = null;

// --- Themes ---
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

// Apply saved theme from localStorage
window.addEventListener('load', () => {
  const saved = localStorage.getItem("LOYAL-theme") || 'darkpurple';
  applyTheme(saved);
});

// FAB toggle
fabMain.addEventListener("click", () => fab.classList.toggle("open"));

// FAB button click
themeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
    fab.classList.remove("open");
  });
});

// --- Return Home ---
document.getElementById('returnHome').addEventListener('click', () => {
  window.location.href = 'archive.html';
});

// --- Cancel typing & speech ---
function cancelTyping(){ if(typingTimeout){ clearTimeout(typingTimeout); typingTimeout=null; } }
function cancelSpeech(){ if(utterance){ speechSynthesis.cancel(); utterance=null; voiceBtn.textContent='🔊 Play Voice'; } }

// --- Typewriter ---
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

// --- Choices ---
function clearChoices(){ choicesEl.innerHTML = ''; }
function showChoices(list){ clearChoices(); list.forEach((c, idx) => {
  const b = document.createElement('button'); 
  b.className = 'choice'; 
  b.innerHTML = `<strong>${idx+1}</strong> ${c.text}`; 
  b.addEventListener('click', c.action); 
  choicesEl.appendChild(b);
}); }

// --- Chapter end ---
function concludeChapter(){
  cancelTyping(); cancelSpeech();
  storyEl.textContent = `--- End of Chapter ${current} ---\n\nThis chapter ends here.`;
  chapterEnd.classList.remove('hidden'); tarotEl.classList.add('hidden'); clearChoices();

  if(chapters[current].prevChapter){
    const prevBtn = document.createElement('button'); 
    prevBtn.className = 'choice'; 
    prevBtn.innerHTML = 'Previous Chapter'; 
    prevBtn.addEventListener('click', () => loadChapter(chapters[current].prevChapter)); 
    choicesEl.appendChild(prevBtn);
  }
  if(chapters[current].nextChapter){
    const nextBtn = document.createElement('button'); 
    nextBtn.className = 'choice'; 
    nextBtn.innerHTML = 'Next Chapter'; 
    nextBtn.addEventListener('click', () => loadChapter(chapters[current].nextChapter)); 
    choicesEl.appendChild(nextBtn);
  }
}

// --- Roman numeral ---
function toRoman(num){
  const romans = [["M",1000], ["CM",900], ["D",500], ["CD",400],
                  ["C",100], ["XC",90], ["L",50], ["XL",40],
                  ["X",10], ["IX",9], ["V",5], ["IV",4], ["I",1]];
  let result = '';
  for (const [roman, value] of romans) while(num>=value){ result+=roman; num-=value; }
  return result;
}

// --- Load chapter ---
async function loadChapter(id){
  current = id;
  cancelTyping(); cancelSpeech();
  tarotEl.classList.add('hidden'); chapterEnd.classList.add('hidden'); clearChoices(); storyEl.textContent = '';
  document.querySelector('.logo').textContent = `CH. ${toRoman(current)}`;

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

// --- Skip / Voice ---
skipBtn.addEventListener('click', ()=> skipping=true);

voiceBtn.addEventListener('click', ()=> {
  if(speechSynthesis.speaking){ cancelSpeech(); return; }
  fetch(chapters[current].file).then(r=>r.text()).then(text=>{
    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate=1; utterance.pitch=8; utterance.lang='en-US';
    utterance.onend = ()=> { utterance=null; voiceBtn.textContent='🔊 Play Voice'; };
    speechSynthesis.speak(utterance); voiceBtn.textContent='🔇 Stop Voice';
  });
});

// --- Replay / Tarot / Placeholder ---
document.getElementById('replayBtn').addEventListener('click', ()=> loadChapter(current));

document.getElementById('cardsBtn').addEventListener('click', ()=> {
  cancelTyping();
  cancelSpeech();
  storyEl.textContent = '';
  tarotEl.innerHTML = '';
  tarotEl.classList.remove('hidden');
  chapterEnd.classList.add('hidden');

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

    // --- Click to enlarge tarot card ---
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
      modal.querySelector('.tarot-modal-close').addEventListener('click', () => modal.remove());
      modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
      document.body.appendChild(modal);
    });

    wrapper.appendChild(el);
  });

  tarotEl.appendChild(wrapper);
  showChoices([{
    text: 'Return',
    action: () => {
      tarotEl.classList.add('hidden');
      chapterEnd.classList.remove('hidden');
      concludeChapter();
    }
  }]);
});

document.getElementById('placeholderBtn').addEventListener('click', ()=> typeWriter('This section is under construction.'));

// --- INITIAL LOAD ---
loadChapter(current);
