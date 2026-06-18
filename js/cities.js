
/* ============================================================
   1. CITY DATA (single source of truth for modal content)
   ============================================================ */
const WEATHER_API_KEY = "591ac9447cf9bb12f9ea2af38443ce5d";

const CITY_DATA = {
  lahore: {
    name: "Lahore",
    province: "Punjab",
    tagline: "The Soul of Pakistan",
    img: "../images/lhr.jpg",
    population: "14M",
    temp: "28°C",
    rating: "4.8",
    founded: "~1000 BC",
    desc: "Lahore is Pakistan's cultural capital and second-largest city. Home to the magnificent Badshahi Mosque, Lahore Fort, and the vibrant Anarkali Bazaar, the city breathes with centuries of Mughal and Sikh heritage. Its food street is legendary — from sizzling charsi karahi to creamy rabri — Lahore is the undisputed food capital of the country.",
    highlights: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens", "Anarkali Bazaar", "Food Street", "Wagah Border"]
  },
  karachi: {
    name: "Karachi",
    province: "Sindh",
    tagline: "City of Lights & Dreams",
    img: "../images/kar 1.jpg",
    population: "22M",
    temp: "33°C",
    rating: "4.6",
    founded: "1729",
    desc: "Karachi is Pakistan's largest city and economic heart — a sprawling metropolis where the Arabian Sea meets an endless skyline. It is the country's financial hub, home to the Port of Karachi, the Karachi Stock Exchange, and some of the country's finest universities. The city never truly sleeps; its street food, from Burns Road biryani to bun kabab, fuels the dreams of 22 million people.",
    highlights: ["Clifton Beach", "Mazar-e-Quaid", "Burns Road", "Port Grand", "Frere Hall", "National Museum"]
  },
  islamabad: {
    name: "Islamabad",
    province: "Federal Capital",
    tagline: "Green & Serene Capital",
    img: "../images/isl.jpg",
    population: "1.2M",
    temp: "22°C",
    rating: "4.9",
    founded: "1960",
    desc: "Built from scratch in the 1960s, Islamabad is a rare planned city of wide boulevards, lush parks, and mountain backdrops. The Faisal Mosque, nestled against the Margalla Hills, is one of the world's largest mosques. The city blends diplomatic calm with a growing café culture and is consistently ranked as the most liveable city in Pakistan.",
    highlights: ["Faisal Mosque", "Margalla Hills", "Daman-e-Koh", "F-7 Markaz", "Pakistan Monument", "Lok Virsa Museum"]
  },
  hunza: {
    name: "Gilgit",
    province: "Gilgit-Baltistan",
    tagline: "Heaven on Earth",
    img: "../images/kash.jpg",
    population: "120K",
    temp: "12°C",
    rating: "5.0",
    founded: "Ancient",
    desc: "Nestled between Rakaposhi and Ultar Sar, Hunza Valley is among the world's most dramatic landscapes. The valley is famous for its longevity — locals historically lived past 100 years, attributed to their diet of apricots and glacier water. Ancient forts like Altit and Baltit stand testament to the Hunza Emirate's rich history, while the Karakoram Highway cuts a ribbon of asphalt through this wonderland.",
    highlights: ["Altit Fort", "Baltit Fort", "Attabad Lake", "Rakaposhi View", "Eagle's Nest", "Karimabad Bazaar"]
  },
  gujranwala: {
    name: "Gujranwala",
    province: "Punjab",
    tagline: "City of Wrestlers & Flavours",
    img: "../images/grw 1.jpg",
    population: "2.5M",
    temp: "29°C",
    rating: "4.3",
    founded: "1775",
    desc: "Gujranwala wears its Punjabi identity proudly — this is the birthplace of Ranjit Singh, the great Sikh emperor, and the city remains famous for its wrestling tradition, industrial steel, and absolutely unmatched cuisine. The local dhabas serve legendary dishes including Gujranwala-style sajji and butter chicken that draw food-lovers from across the country.",
    highlights: ["Ranjit Singh Samadhi", "Gujranwala Fort Ruins", "Eminabad", "Local Dhabas", "Sports Complex", "Steel Market"]
  },
  peshawar: {
    name: "Peshawar",
    province: "KPK",
    tagline: "Gateway to Central Asia",
    img: "../images/kpk cul1.jpg",
    population: "2.1M",
    temp: "25°C",
    rating: "4.5",
    founded: "~539 BC",
    desc: "One of Asia's oldest cities, Peshawar has stood at the crossroads of empires for over 2,500 years. Alexander the Great passed through here; so did the Mughals, the Sikhs, and the British. The Qissa Khwani Bazaar — Storytellers' Bazaar — once thrummed with caravans from Central Asia. Today it remains a city of extraordinary character, fierce warmth, and legendary Pashtun hospitality.",
    highlights: ["Qissa Khwani Bazaar", "Peshawar Museum", "Sethi House", "Bala Hisar Fort", "Mahabat Khan Mosque", "Khyber Pass"]
  },
  multan: {
    name: "Multan",
    province: "Punjab",
    tagline: "City of Saints, Sufis & Blue Pottery",
    img: "../images/mosque.jpg",
    population: "2.1M",
    temp: "38°C",
    rating: "4.6",
    founded: "~3800 BC",
    desc: "Multan is one of the oldest cities on earth — possibly over 5,000 years old. Known as the 'City of Saints,' its skyline is punctuated by the tombs of Sufi mystics like Shah Rukn-e-Alam. The city is famous for its distinctive blue pottery, mango orchards, and the devotional music of qawwali that fills its shrine courtyards every evening.",
    highlights: ["Shah Rukn-e-Alam Shrine", "Bahauddin Zakariya Shrine", "Multan Fort", "Blue Pottery Workshops", "Ghanta Ghar", "Mango Festival"]
  },
  quetta: {
    name: "Quetta",
    province: "Balochistan",
    tagline: "City of Fruits & Mountains",
    img: "../images/back.jpg",
    population: "1.4M",
    temp: "18°C",
    rating: "4.4",
    founded: "Ancient",
    desc: "Quetta sits at 1,680 metres above sea level, surrounded by striking bare mountains that glow amber and ochre at sunset. Known as the 'Fruit Garden of Pakistan,' the region produces some of the country's finest apples, apricots, and grapes. The Hanna Lake, Hazarganji-Chiltan National Park, and the remarkable Quetta Cantonment give the city a unique character found nowhere else.",
    highlights: ["Hanna Lake", "Hazarganji-Chiltan Park", "Quetta Cantonment", "Sariab Road Bazaar", "Kuchlak", "Ziarat"]
  },
  hyderabad: {
    name: "Hyderabad",
    province: "Sindh",
    tagline: "Cradle of Sindhi Culture",
    img: "../images/s cul 1.jpg",
    population: "1.8M",
    temp: "35°C",
    rating: "4.2",
    founded: "1768",
    desc: "Hyderabad is the cultural heartland of Sindh, where the traditions of the Talpur Mirs live on in its palaces, glass bangles, and embroidered ajrak cloth. The city is known for its sweet Hyderabadi lassi — arguably the best in the world — its vibrant music scene rooted in Sindhi folk, and a fierce pride in a civilization stretching back to the Indus Valley.",
    highlights: ["Pakka Qila Fort", "Tomb of Mian Yar Muhammad", "Glass Bangle Market", "Sindh Museum", "Hirabad Shrine", "Phuleli Canal"]
  }
};

/* ============================================================
   2. SCROLL REVEAL — Intersection Observer for city cards
   ============================================================ */
function initScrollReveal() {
  const items = document.querySelectorAll('.city-item');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay based on card index within its visible row
          const delay = (Array.from(items).filter(el => !el.classList.contains('hidden'))
                          .indexOf(entry.target) % 3) * 80;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach(item => observer.observe(item));
}

/* ============================================================
   3. SEARCH FUNCTIONALITY
   ============================================================ */
let currentFilter = 'all';

function initSearch() {
  const input = document.getElementById('citySearch');
  const clearBtn = document.getElementById('searchClearBtn');

  input.addEventListener('input', () => {
    const val = input.value.trim();
    clearBtn.style.display = val.length ? 'block' : 'none';
    applyFilters();
  });
}

function clearSearch() {
  const input = document.getElementById('citySearch');
  input.value = '';
  document.getElementById('searchClearBtn').style.display = 'none';
  applyFilters();
}

function resetAll() {
  clearSearch();
  setFilter('all', document.querySelector('.ftab[data-filter="all"]'));
}

/* ============================================================
   4. PROVINCE FILTER
   ============================================================ */
function setFilter(province, btn) {
  currentFilter = province;

  // Update button active state
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Highlight province card
  document.querySelectorAll('.prov-card').forEach(card => {
    card.classList.toggle('active-province', card.dataset.province === province);
  });

  applyFilters();
  scrollToCities();
}

function filterByProvince(province) {
  currentFilter = province;

  // Sync the filter tab
  const matchTab = document.querySelector(`.ftab[data-filter="${province}"]`);
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  if (matchTab) matchTab.classList.add('active');

  // Highlight card
  document.querySelectorAll('.prov-card').forEach(card => {
    card.classList.toggle('active-province', card.dataset.province === province);
  });

  applyFilters();
  scrollToCities();
}

function scrollToCities() {
  const section = document.getElementById('cities-section');
  if (section) {
    setTimeout(() => {
      const offset = section.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 100);
  }
}

/* ============================================================
   5. COMBINED FILTER + SEARCH
   ============================================================ */
function applyFilters() {
  const searchTerm = document.getElementById('citySearch').value.toLowerCase().trim();
  const items = document.querySelectorAll('.city-item');
  let visibleCount = 0;

  items.forEach(item => {
    const province  = item.dataset.province || '';
    const name      = item.dataset.name || '';
    const tags      = item.dataset.tags || '';

    const matchesFilter  = currentFilter === 'all' || province === currentFilter;
    const matchesSearch  = !searchTerm ||
                           name.includes(searchTerm) ||
                           tags.includes(searchTerm) ||
                           province.includes(searchTerm);

    if (matchesFilter && matchesSearch) {
      item.classList.remove('hidden');
      // Re-trigger reveal animation for newly visible items
      if (!item.classList.contains('visible')) {
        setTimeout(() => item.classList.add('visible'), visibleCount * 60);
      }
      visibleCount++;
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });

  // Update count
  document.getElementById('countNum').textContent = visibleCount;

  // Show/hide no-results block
  document.getElementById('noResults').style.display = visibleCount === 0 ? 'block' : 'none';
}

/* ============================================================
   6. CITY MODAL
   ============================================================ */
function openCityModal(cityKey) {
  const data = CITY_DATA[cityKey];
  if (!data) return;

  // Populate
  document.getElementById('modalImg').src = data.img;
  document.getElementById('modalImg').alt = data.name;
  document.getElementById('modalBadge').textContent = data.province;
  document.getElementById('modalCityName').textContent = data.name;
  document.getElementById('modalTagline').textContent = data.tagline;
  document.getElementById('modalDesc').textContent = data.desc;

  // Info grid
  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="m-info-item">
      <i class="bi bi-people-fill"></i>
      <span class="m-val">${data.population}</span>
      <span class="m-lbl">Population</span>
    </div>
    <div class="m-info-item">
      <i class="bi bi-thermometer-half"></i>
      <span class="m-val">${data.temp}</span>
      <span class="m-lbl">Avg Temp</span>
    </div>
    <div class="m-info-item">
      <i class="bi bi-star-fill" style="color:var(--gold)"></i>
      <span class="m-val">${data.rating}</span>
      <span class="m-lbl">Rating</span>
    </div>
  `;

  // Highlights
  document.getElementById('modalHighlights').innerHTML =
    data.highlights.map(h =>
      `<span class="m-highlight"><i class="bi bi-geo-alt-fill"></i>${h}</span>`
    ).join('');

  // Open overlay
  const overlay = document.getElementById('cityModalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCityModal(event) {
  // If clicking overlay background (not modal itself), close
  if (event && event.target !== document.getElementById('cityModalOverlay')) return;

  const overlay = document.getElementById('cityModalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('cityModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ---- Override: allow clicking the X button (which targets overlay indirectly) ----
// The X button calls closeCityModal() with no event arg, so it closes directly.



/* ============================================================
   8. STICKY NAVBAR OFFSET — recalculate on load
   ============================================================ */
function fixStickyOffset() {
  const navbar = document.querySelector('.navbar');
  const searchBar = document.querySelector('.search-filter-section');
  if (navbar && searchBar) {
    const navH = navbar.offsetHeight;
    searchBar.style.top = navH + 'px';
  }
}

/* ============================================================
   9. PROVINCE CARD — keyboard nav (Enter / Space)
   ============================================================ */
function initProvincekeyboard() {
  document.querySelectorAll('.prov-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        filterByProvince(card.dataset.province);
      }
    });
  });
}

/* ============================================================
   10. INIT — run after DOM + shared scripts load
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initScrollReveal();
  initProvincekeyboard();
  fixStickyOffset();
   loadWeather();
    loadProvinceWeather();

  // Update result count on initial load
  const total = document.querySelectorAll('.city-item').length;
  const countEl = document.getElementById('countNum');
  if (countEl) countEl.textContent = total;

  // Re-fix offset after navbar JS has run (it may render async)
  setTimeout(fixStickyOffset, 300);
});

// Also handle resize
window.addEventListener('resize', fixStickyOffset);

async function loadWeather() {
  const cards = document.querySelectorAll(".city-item");

  for (const card of cards) {
    try {
      const cityKey = card.dataset.name?.toLowerCase();
      const city = CITY_DATA[cityKey]?.name;

      if (!city) continue;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${WEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();

      if (!data || !data.main || data.main.temp === undefined) {
        continue;
      }

      const temp = Math.round(data.main.temp);
      const iconCode = data.weather?.[0]?.icon;
const description = data.weather?.[0]?.description;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      const weatherElement = card.querySelector(".city-temp");

      if (weatherElement) {
        weatherElement.innerHTML = `
  <img src="${iconUrl}" class="weather-icon" />
  <div class="weather-text">
    <div class="temp">${temp}°C</div>
    <div class="desc">${description}</div>
  </div>
`;
      }

    } catch (err) {
      console.log("Weather API Error:", err);
    }
  }
}

async function loadProvinceWeather() {
  const mapping = {
    punjab: 'Lahore',
    sindh: 'Karachi',
    kpk: 'Peshawar',
    balochistan: 'Quetta'
  };

  for (const [prov, city] of Object.entries(mapping)) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (!data || !data.main || data.main.temp === undefined) continue;

      const temp = Math.round(data.main.temp);
      const iconCode = data.weather?.[0]?.icon;
      const description = data.weather?.[0]?.description || '';
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      const card = document.querySelector(`.prov-card[data-province="${prov}"]`);
      if (!card) continue;

      const el = card.querySelector('.prov-temp');
      if (el) {
        el.innerHTML = `\n  <img src="${iconUrl}" class="weather-icon" />\n  <div class="weather-text">\n    <div class="temp">${temp}°C</div>\n    <div class="desc">${description}</div>\n  </div>\n`;
      }
    } catch (err) {
      console.log('Province weather error:', prov, err);
    }
  }
}