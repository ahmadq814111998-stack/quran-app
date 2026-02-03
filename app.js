// Quran Recitation App - Similar to Tarteel

// Surah list data
const surahs = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", verses: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", verses: 286 },
  { number: 3, name: "آل عمران", englishName: "Aal-Imran", verses: 200 },
  { number: 4, name: "النساء", englishName: "An-Nisa", verses: 176 },
  { number: 5, name: "المائدة", englishName: "Al-Ma'idah", verses: 120 },
  { number: 6, name: "الأنعام", englishName: "Al-An'am", verses: 165 },
  { number: 7, name: "الأعراف", englishName: "Al-A'raf", verses: 206 },
  { number: 8, name: "الأنفال", englishName: "Al-Anfal", verses: 75 },
  { number: 9, name: "التوبة", englishName: "At-Tawbah", verses: 129 },
  { number: 10, name: "يونس", englishName: "Yunus", verses: 109 },
  { number: 11, name: "هود", englishName: "Hud", verses: 123 },
  { number: 12, name: "يوسف", englishName: "Yusuf", verses: 111 },
  { number: 13, name: "الرعد", englishName: "Ar-Ra'd", verses: 43 },
  { number: 14, name: "إبراهيم", englishName: "Ibrahim", verses: 52 },
  { number: 15, name: "الحجر", englishName: "Al-Hijr", verses: 99 },
  { number: 16, name: "النحل", englishName: "An-Nahl", verses: 128 },
  { number: 17, name: "الإسراء", englishName: "Al-Isra", verses: 111 },
  { number: 18, name: "الكهف", englishName: "Al-Kahf", verses: 110 },
  { number: 19, name: "مريم", englishName: "Maryam", verses: 98 },
  { number: 20, name: "طه", englishName: "Ta-Ha", verses: 135 },
  { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", verses: 112 },
  { number: 22, name: "الحج", englishName: "Al-Hajj", verses: 78 },
  { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", verses: 118 },
  { number: 24, name: "النور", englishName: "An-Nur", verses: 64 },
  { number: 25, name: "الفرقان", englishName: "Al-Furqan", verses: 77 },
  { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", verses: 227 },
  { number: 27, name: "النمل", englishName: "An-Naml", verses: 93 },
  { number: 28, name: "القصص", englishName: "Al-Qasas", verses: 88 },
  { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", verses: 69 },
  { number: 30, name: "الروم", englishName: "Ar-Rum", verses: 60 },
  { number: 31, name: "لقمان", englishName: "Luqman", verses: 34 },
  { number: 32, name: "السجدة", englishName: "As-Sajdah", verses: 30 },
  { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", verses: 73 },
  { number: 34, name: "سبأ", englishName: "Saba", verses: 54 },
  { number: 35, name: "فاطر", englishName: "Fatir", verses: 45 },
  { number: 36, name: "يس", englishName: "Ya-Sin", verses: 83 },
  { number: 37, name: "الصافات", englishName: "As-Saffat", verses: 182 },
  { number: 38, name: "ص", englishName: "Sad", verses: 88 },
  { number: 39, name: "الزمر", englishName: "Az-Zumar", verses: 75 },
  { number: 40, name: "غافر", englishName: "Ghafir", verses: 85 },
  { number: 41, name: "فصلت", englishName: "Fussilat", verses: 54 },
  { number: 42, name: "الشورى", englishName: "Ash-Shura", verses: 53 },
  { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", verses: 89 },
  { number: 44, name: "الدخان", englishName: "Ad-Dukhan", verses: 59 },
  { number: 45, name: "الجاثية", englishName: "Al-Jathiyah", verses: 37 },
  { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", verses: 35 },
  { number: 47, name: "محمد", englishName: "Muhammad", verses: 38 },
  { number: 48, name: "الفتح", englishName: "Al-Fath", verses: 29 },
  { number: 49, name: "الحجرات", englishName: "Al-Hujurat", verses: 18 },
  { number: 50, name: "ق", englishName: "Qaf", verses: 45 },
  { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", verses: 60 },
  { number: 52, name: "الطور", englishName: "At-Tur", verses: 49 },
  { number: 53, name: "النجم", englishName: "An-Najm", verses: 62 },
  { number: 54, name: "القمر", englishName: "Al-Qamar", verses: 55 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", verses: 78 },
  { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", verses: 96 },
  { number: 57, name: "الحديد", englishName: "Al-Hadid", verses: 29 },
  { number: 58, name: "المجادلة", englishName: "Al-Mujadilah", verses: 22 },
  { number: 59, name: "الحشر", englishName: "Al-Hashr", verses: 24 },
  { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", verses: 13 },
  { number: 61, name: "الصف", englishName: "As-Saff", verses: 14 },
  { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", verses: 11 },
  { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", verses: 11 },
  { number: 64, name: "التغابن", englishName: "At-Taghabun", verses: 18 },
  { number: 65, name: "الطلاق", englishName: "At-Talaq", verses: 12 },
  { number: 66, name: "التحريم", englishName: "At-Tahrim", verses: 12 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", verses: 30 },
  { number: 68, name: "القلم", englishName: "Al-Qalam", verses: 52 },
  { number: 69, name: "الحاقة", englishName: "Al-Haqqah", verses: 52 },
  { number: 70, name: "المعارج", englishName: "Al-Ma'arij", verses: 44 },
  { number: 71, name: "نوح", englishName: "Nuh", verses: 28 },
  { number: 72, name: "الجن", englishName: "Al-Jinn", verses: 28 },
  { number: 73, name: "المزمل", englishName: "Al-Muzzammil", verses: 20 },
  { number: 74, name: "المدثر", englishName: "Al-Muddaththir", verses: 56 },
  { number: 75, name: "القيامة", englishName: "Al-Qiyamah", verses: 40 },
  { number: 76, name: "الإنسان", englishName: "Al-Insan", verses: 31 },
  { number: 77, name: "المرسلات", englishName: "Al-Mursalat", verses: 50 },
  { number: 78, name: "النبأ", englishName: "An-Naba", verses: 40 },
  { number: 79, name: "النازعات", englishName: "An-Nazi'at", verses: 46 },
  { number: 80, name: "عبس", englishName: "Abasa", verses: 42 },
  { number: 81, name: "التكوير", englishName: "At-Takwir", verses: 29 },
  { number: 82, name: "الانفطار", englishName: "Al-Infitar", verses: 19 },
  { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", verses: 36 },
  { number: 84, name: "الانشقاق", englishName: "Al-Inshiqaq", verses: 25 },
  { number: 85, name: "البروج", englishName: "Al-Buruj", verses: 22 },
  { number: 86, name: "الطارق", englishName: "At-Tariq", verses: 17 },
  { number: 87, name: "الأعلى", englishName: "Al-A'la", verses: 19 },
  { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", verses: 26 },
  { number: 89, name: "الفجر", englishName: "Al-Fajr", verses: 30 },
  { number: 90, name: "البلد", englishName: "Al-Balad", verses: 20 },
  { number: 91, name: "الشمس", englishName: "Ash-Shams", verses: 15 },
  { number: 92, name: "الليل", englishName: "Al-Layl", verses: 21 },
  { number: 93, name: "الضحى", englishName: "Ad-Duha", verses: 11 },
  { number: 94, name: "الشرح", englishName: "Ash-Sharh", verses: 8 },
  { number: 95, name: "التين", englishName: "At-Tin", verses: 8 },
  { number: 96, name: "العلق", englishName: "Al-Alaq", verses: 19 },
  { number: 97, name: "القدر", englishName: "Al-Qadr", verses: 5 },
  { number: 98, name: "البينة", englishName: "Al-Bayyinah", verses: 8 },
  { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", verses: 8 },
  { number: 100, name: "العاديات", englishName: "Al-Adiyat", verses: 11 },
  { number: 101, name: "القارعة", englishName: "Al-Qari'ah", verses: 11 },
  { number: 102, name: "التكاثر", englishName: "At-Takathur", verses: 8 },
  { number: 103, name: "العصر", englishName: "Al-Asr", verses: 3 },
  { number: 104, name: "الهمزة", englishName: "Al-Humazah", verses: 9 },
  { number: 105, name: "الفيل", englishName: "Al-Fil", verses: 5 },
  { number: 106, name: "قريش", englishName: "Quraysh", verses: 4 },
  { number: 107, name: "الماعون", englishName: "Al-Ma'un", verses: 7 },
  { number: 108, name: "الكوثر", englishName: "Al-Kawthar", verses: 3 },
  { number: 109, name: "الكافرون", englishName: "Al-Kafirun", verses: 6 },
  { number: 110, name: "النصر", englishName: "An-Nasr", verses: 3 },
  { number: 111, name: "المسد", englishName: "Al-Masad", verses: 5 },
  { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", verses: 4 },
  { number: 113, name: "الفلق", englishName: "Al-Falaq", verses: 5 },
  { number: 114, name: "الناس", englishName: "An-Nas", verses: 6 }
];

// App state
let currentSurah = 1;
let currentVerse = 1;
let verses = [];
let isPlaying = false;
let isRepeat = false;
let autoScroll = true;
let reciter = 'ar.alafasy';
let audio = new Audio();
let fontSize = 32;

// DOM Elements
const surahTitle = document.getElementById('surah-title');
const versesContainer = document.getElementById('verses-container');
const bismillah = document.getElementById('bismillah');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const repeatBtn = document.getElementById('repeat-btn');
const autoScrollBtn = document.getElementById('auto-scroll-btn');
const progressBar = document.getElementById('progress-bar');
const currentVerseNum = document.getElementById('current-verse-num');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('close-sidebar');
const surahList = document.getElementById('surah-list');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const fontSizeInput = document.getElementById('font-size');
const reciterSelect = document.getElementById('reciter-select');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize app
function init() {
  loadSettings();
  populateSurahList();
  loadSurah(currentSurah);
  setupEventListeners();
}

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem('quranAppSettings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    fontSize = settings.fontSize || 32;
    reciter = settings.reciter || 'ar.alafasy';
    if (settings.darkMode) {
      document.body.classList.add('dark-mode');
    }
    currentSurah = settings.lastSurah || 1;
  }
  fontSizeInput.value = fontSize;
  reciterSelect.value = reciter;
  updateFontSize();
}

// Save settings to localStorage
function saveSettings() {
  const settings = {
    fontSize,
    reciter,
    darkMode: document.body.classList.contains('dark-mode'),
    lastSurah: currentSurah
  };
  localStorage.setItem('quranAppSettings', JSON.stringify(settings));
}

// Populate surah list in sidebar
function populateSurahList() {
  surahList.innerHTML = surahs.map(surah => `
    <div class="surah-item ${surah.number === currentSurah ? 'active' : ''}" data-surah="${surah.number}">
      <div class="surah-number">${surah.number}</div>
      <div class="surah-info">
        <div class="surah-name-ar">${surah.name}</div>
        <div class="surah-name-en">${surah.englishName} • ${surah.verses} آيات</div>
      </div>
    </div>
  `).join('');
}

// Load surah from API
async function loadSurah(surahNumber) {
  currentSurah = surahNumber;
  currentVerse = 1;
  
  // Update title
  const surah = surahs.find(s => s.number === surahNumber);
  surahTitle.textContent = surah.name;
  
  // Show/hide bismillah (not shown for Surah At-Tawbah)
  bismillah.style.display = surahNumber === 9 ? 'none' : 'block';
  
  // Show loading
  versesContainer.innerHTML = '<div class="loading"><div class="spinner"></div>جاري التحميل...</div>';
  
  try {
    // Fetch surah data from API
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    const data = await response.json();
    
    if (data.code === 200) {
      verses = data.data.ayahs;
      renderVerses();
      updateVerseIndicator();
      saveSettings();
    }
  } catch (error) {
    versesContainer.innerHTML = '<div class="loading">حدث خطأ في تحميل السورة. يرجى التحقق من الاتصال بالإنترنت.</div>';
    console.error('Error loading surah:', error);
  }
  
  // Update sidebar active state
  document.querySelectorAll('.surah-item').forEach(item => {
    item.classList.toggle('active', parseInt(item.dataset.surah) === surahNumber);
  });
}

// Render verses
function renderVerses() {
  versesContainer.innerHTML = verses.map((verse, index) => `
    <div class="verse ${index + 1 === currentVerse ? 'playing' : ''}" data-verse="${index + 1}">
      <div class="verse-text">
        <span class="verse-number">${verse.numberInSurah}</span>
        ${verse.text}
      </div>
    </div>
  `).join('');
  
  updateFontSize();
}

// Update font size
function updateFontSize() {
  document.querySelectorAll('.verse-text').forEach(el => {
    el.style.fontSize = fontSize + 'px';
  });
}

// Update verse indicator
function updateVerseIndicator() {
  currentVerseNum.textContent = `آية ${currentVerse} من ${verses.length}`;
}

// Play/Pause audio
function togglePlay() {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

// Play audio
function playAudio() {
  const verse = verses[currentVerse - 1];
  if (!verse) return;
  
  // Construct audio URL based on reciter
  const audioUrl = `https://cdn.islamic.network/quran/audio/128/${reciter}/${verse.number}.mp3`;
  
  audio.src = audioUrl;
  audio.play().then(() => {
    isPlaying = true;
    playBtn.textContent = '⏸';
    highlightCurrentVerse();
  }).catch(error => {
    console.error('Error playing audio:', error);
  });
}

// Pause audio
function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = '▶';
}

// Highlight current verse
function highlightCurrentVerse() {
  document.querySelectorAll('.verse').forEach(el => {
    el.classList.toggle('playing', parseInt(el.dataset.verse) === currentVerse);
  });
  
  // Auto scroll to current verse
  if (autoScroll) {
    const currentVerseEl = document.querySelector(`.verse[data-verse="${currentVerse}"]`);
    if (currentVerseEl) {
      currentVerseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  
  updateVerseIndicator();
}

// Next verse
function nextVerse() {
  if (currentVerse < verses.length) {
    currentVerse++;
    if (isPlaying) {
      playAudio();
    } else {
      highlightCurrentVerse();
    }
  } else if (currentSurah < 114) {
    // Go to next surah
    loadSurah(currentSurah + 1);
  }
}

// Previous verse
function prevVerse() {
  if (currentVerse > 1) {
    currentVerse--;
    if (isPlaying) {
      playAudio();
    } else {
      highlightCurrentVerse();
    }
  } else if (currentSurah > 1) {
    // Go to previous surah
    loadSurah(currentSurah - 1);
  }
}

// Toggle repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
}

// Toggle auto scroll
function toggleAutoScroll() {
  autoScroll = !autoScroll;
  autoScrollBtn.classList.toggle('active', autoScroll);
}

// Toggle sidebar
function toggleSidebar(show) {
  sidebar.classList.toggle('visible', show);
  overlay.classList.toggle('visible', show);
}

// Toggle settings modal
function toggleSettings(show) {
  settingsModal.classList.toggle('visible', show);
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDark ? 'إلغاء' : 'تفعيل';
  saveSettings();
}

// Setup event listeners
function setupEventListeners() {
  // Audio events
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progress + '%';
    }
  });
  
  audio.addEventListener('ended', () => {
    if (isRepeat) {
      playAudio();
    } else {
      nextVerse();
    }
  });
  
  audio.addEventListener('error', () => {
    console.error('Audio error');
    pauseAudio();
  });
  
  // Player controls
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', prevVerse);
  nextBtn.addEventListener('click', nextVerse);
  repeatBtn.addEventListener('click', toggleRepeat);
  autoScrollBtn.addEventListener('click', toggleAutoScroll);
  
  // Verse click
  versesContainer.addEventListener('click', (e) => {
    const verseEl = e.target.closest('.verse');
    if (verseEl) {
      currentVerse = parseInt(verseEl.dataset.verse);
      playAudio();
    }
  });
  
  // Sidebar
  menuBtn.addEventListener('click', () => toggleSidebar(true));
  closeSidebar.addEventListener('click', () => toggleSidebar(false));
  overlay.addEventListener('click', () => toggleSidebar(false));
  
  surahList.addEventListener('click', (e) => {
    const surahItem = e.target.closest('.surah-item');
    if (surahItem) {
      const surahNumber = parseInt(surahItem.dataset.surah);
      loadSurah(surahNumber);
      toggleSidebar(false);
    }
  });
  
  // Settings
  settingsBtn.addEventListener('click', () => toggleSettings(true));
  closeSettings.addEventListener('click', () => toggleSettings(false));
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) toggleSettings(false);
  });
  
  fontSizeInput.addEventListener('input', (e) => {
    fontSize = parseInt(e.target.value);
    updateFontSize();
    saveSettings();
  });
  
  reciterSelect.addEventListener('change', (e) => {
    reciter = e.target.value;
    saveSettings();
    if (isPlaying) {
      playAudio();
    }
  });
  
  darkModeToggle.addEventListener('click', toggleDarkMode);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        togglePlay();
        break;
      case 'ArrowRight':
        prevVerse();
        break;
      case 'ArrowLeft':
        nextVerse();
        break;
    }
  });
  
  // Swipe gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        // Swipe left - next surah
        if (currentSurah < 114) loadSurah(currentSurah + 1);
      } else {
        // Swipe right - previous surah
        if (currentSurah > 1) loadSurah(currentSurah - 1);
      }
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
