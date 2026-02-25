const cardData = [
  // ---------- ENGLISH ----------
  {
    img: "assets/img/services/2.jpg",
    src: "Forbes",
    desc: "Vivek Raj Redefines Agriculture with Hydroponic Saffron Farming",
    lang: "en",
    link: "https://organiser.org/2024/10/22/261430/bharat/karnataka-vivek-raj-poojary-earns-forbes-india-honours-for-revolutionising-saffron-farming-with-hydroponics/"
  },
  {
    img: "assets/img/services/2.jpg",
    src: "The Indian Express",
    desc: "Panama to develop Coal, Iron Ore Blocks in Zimbabwe",
    lang: "en",
    link: "https://timesofindia.indiatimes.com/Vivek-Raj-CEO-of-Mangalore-based-Panama-Group-had-an-exclusive-face-to-face-meeting-with-Arthur-Mutambara-deputy-Prime-minister-of-Zimbabwe-at-Bangalore-recently-Arthur-Mutambara-has-privately-invited-Panama-group-a-diversified-trading-company-to-develop-coal-and-iron-ore-mine-blocks-existing-in-Zimbabwe-/articleshow/12416414.cms"
  },
  {
    img: "assets/img/services/4.jpg",
    src: "The Indian Express",
    desc: "City's Vivek Raj to attend World Economic Summit in New Delhi",
    lang: "en"
  },
  {
    img: "assets/img/services/5.jpg",
    src: "The Times Of India",
    desc: "City man to co-host economic summit",
    lang: "en"
  },
  {
    img: "assets/img/services/10.jpg",
    src: "The Times Of India",
    desc: "City's CEO heads for WEF in China",
    lang: "en"
  },
  {
    img: "assets/img/services/14.jpg",
    src: "Deccan Herald",
    desc: "Firm to buy vegetables from farmers in distress",
    lang: "en"
  },
  {
    img: "assets/img/services/18.jpg",
    src: "Deccan Herald",
    desc: "Experts give out success mantra for UPSC aspirants",
    lang: "en"
  },
  {
    img: "assets/img/services/19.jpg",
    src: "Deccan Herald",
    desc: "Discipline, Determination and Dedication - Key to clear Exams",
    lang: "en"
  },
  {
    img: "assets/img/services/21.jpg",
    src: "Deccan Herald",
    desc: "Congress Covid-19 Helpline to distribute 3000 kits",
    lang: "en"
  },
  {
    img: "assets/img/services/23.jpeg",
    src: "Forbes",
    desc: "Empowering Global Agriculture through AI and Precision Agritech",
    lang: "en"
  },
  {
    img: "assets/img/services/24.jpeg",
    src: "Forbes India",
    desc: "Vivek Raj on Union Budget 2026 and Bharat-VISTAAR Integration",
    lang: "en"
  },
  {
    img: "assets/img/services/25.jpeg",
    src: "Mangloretoday",
    desc: "World's youngest CEO Vivek Raj chosen for Summer Davos by World Economic Forum.",
    lang: "en"
  },
  {
    img: "assets/img/services/26.jpeg",
    src: "ETBrandEquity",
    desc: "Vivek Raj shares insights on AI-driven agriculture at the India AI Impact Summit 2026.",
    lang: "en",
    link: "https://brandequity.economictimes.indiatimes.com/news/digital/india-ai-impact-summit-2026-what-does-responsible-ai-for-bharat-look-like/128418239"
  },
  {
    img: "assets/img/services/29.jpeg",
    src: "CNBCTV18",
    desc: "Vivek Raj advocates for AI-driven food security at the World Economic Forum Davos 2026.",
    lang: "en",
    link: "https://share.google/1LpWHT307ZXg2mYKm"
  },
  {
    img: "assets/img/services/27.jpeg",
    src: "The Hindu BusinessLine",
    desc: "Vivek Raj to invest ₹214 crore in AI-powered hydroponic farming in Karnataka.",
    lang: "en",
    link: "https://www.thehindubusinessline.com/economy/agri-business/indian-entrepreneur-to-invest-rs-214-crore-in-ai-powered-hydroponic-farming-in-karnataka/article70639084.ece/amp/"
  },
  {
    img: "assets/img/services/28.jpeg",
    src: "DQIndia",
    desc: "Vivek Raj discusses using AI for biological ecosystem engineering in agriculture.",
    lang: "en",
    link: "https://www.dqindia.com/news/india-ai-summit-responsible-ai-ethical-ai-and-the-india-scale-test-11110825"
  },
  {
    img: "assets/img/services/33.jpeg",
    src: "PTI",
    desc: "Vivek Raj to invest ₹214 crore in AI-powered hydroponic farming in Karnataka.",
    lang: "en",
    link: "https://www.ptinews.com/story/business/indian-entreprenuer-to-invest-rs-214-cr-on-ai-powered-hydroponic-farming/3384298"
  },
  {
    img: "assets/img/services/30.png",
    src: "ThePrint",
    desc: "Vivek Raj is set to invest in AI-enabled hydroponic farming in Karnataka.",
    lang: "en",
    link: "https://theprint.in/economy/indian-entreprenuer-to-invest-rs-214-cr-on-ai-powered-hydroponic-farming/2856170/?amp"
  },
  {
    img: "assets/img/services/32.jpeg",
    src: "Rediff Money",
    desc: "Vivek Raj to invest in AI-powered hydroponic farming for high-value crops in Karnataka.",
    lang: "en",
    link: "https://money.rediff.com/amp/news/market/ai-hydroponic-farming-indian-entrepreneur-invests/42121920260216"
  },
  {
    img: "assets/img/services/34.jpeg",
    src: "BW CFO World",
    desc: "Vivek Raj strengthens agri-tech footprint with AI-driven hydroponics in Karnataka.",
    lang: "en",
    link: "https://share.google/nMbc6BL67M4NZzoiA"
  },
  {
    img: "assets/img/services/35.jpeg",
    src: "CNBCTV18",
    desc: "Panama Hydro-X revolutionises hydroponic farming with AI in Karnataka.",
    lang: "en",
    link: "https://www.cnbctv18.com/technology/panama-hydro-x-karnataka-company-revolutionising-hydroponic-farming-with-ai-backed-technology-ws-l-19851870.htm/amp"
  },
  {
    img: "assets/img/services/36.jpeg",
    src: "DownToEarth",
    desc: "Vivek Raj promotes indoor farming and hydroponics as the future of sustainable agriculture.",
    lang: "en",
    link: "https://www.downtoearth.org.in/agriculture/indoor-farming-techniques-like-hydroponics-are-the-future-of-sustainable-agriculture-vivek-raj"
  },
  {
    img: "assets/img/services/37.jpeg",
    src: "VerticalFarmDaily",
    desc: "Vivek Raj stresses predictability over yield in medicinal indoor farming.",
    lang: "en",
    link: "https://www.verticalfarmdaily.com/article/9794998/predictability-matters-more-than-volume/"
  },
  {
    img: "assets/img/services/38.jpeg",
    src: "BusinessWorld",
    desc: "Vivek Raj says hydroponics is farming's sustainable future.",
    lang: "en",
    link: "https://www.businessworld.in/article/hydroponics-is-the-future-of-farming-%E2%80%93-an-interview-with-vivek-raj-ceo-of-panama-corporation-534314"
  },
  {
    img: "assets/img/services/39.jpeg",
    src: "NewsBytes",
    desc: "Vivek Raj invests in AI-powered hydroponics to grow spices and medicinal plants in Karnataka.",
    lang: "en",
    link: "https://www.newsbytesapp.com/news/business/panama-hydro-x-to-invest-rs214-crore-in-ai-enabled-hydroponics/tldr"
  },
  {
    img: "assets/img/services/41.jpeg",
    src: "InvestooMarket",
    desc: "Vivek Raj blends AI and hydroponics to redefine modern farming in Karnataka.",
    lang: "en",
    link: "https://investoomarket.com/news/vivek-raj-to-invest-rs214-crore-in-ai-enabled-hydroponic-farming-in-karnataka.1058/"
  },
  {
    img: "assets/img/services/42.jpeg",
    src: "ET Edge Insights",
    desc: "Vivek Raj highlights resilience and predictability for India's food security.",
    lang: "en",
    link: "https://etedge-insights.com/sdgs-and-esg/sustainability/why-predictability-is-the-new-productivity-securing-indias-sovereign-food-interests/"
  },
  {
    img: "assets/img/services/43.jpeg",
    src: "HindustanTimes",
    desc: "Predictable, resilient farming is vital for India's long-term food security.",
    lang: "en",
    link: "https://www.hindustantimes.com/ht-insight/future-tech/why-predictability-is-the-new-productivity-securing-india-s-sovereign-food-interests-101769185215400.html"
  },

  // ---------- KANNADA / REGIONAL ----------
  {
    img: "assets/img/services/3.jpg",
    src: "Udayavani",
    desc: "Panama becomes Mangalore's Pride",
    lang: "kn"
  },
  {
    img: "assets/img/services/6.jpg",
    src: "Udayavani",
    desc: "Panama Corporation gains respect in presence of guests",
    lang: "kn"
  },
  {
    img: "assets/img/services/9.jpg",
    src: "Praja Vani",
    desc: "Diligence: Efforts of Vivek Raj and his success",
    lang: "kn"
  },
  {
    img: "assets/img/services/11.jpg",
    src: "Jayakirana",
    desc: "Let's Distribute the Kits to the Need",
    lang: "kn"
  },
  {
    img: "assets/img/services/12.jpg",
    src: "Jayakirana",
    desc: "Organized Struggle against MRPL Necessary",
    lang: "kn"
  },
  {
    img: "assets/img/services/13.jpg",
    src: "Kannada Prabha",
    desc: "Purchase of farmers' vegetables, fruits from Panama Company",
    lang: "kn"
  },
  {
    img: "assets/img/services/15.jpg",
    src: "Vijaya Karnataka",
    desc: "Vivek Raj is the Chairman of Panama Institute",
    lang: "kn"
  },
  {
    img: "assets/img/services/16.jpg",
    src: "Vijaya Karnataka",
    desc: "Covid Kit distribution to 4350 families",
    lang: "kn"
  },
  {
    img: "assets/img/services/17.jpg",
    src: "Jayakirana",
    desc: "Farmers' Dear Friend: Vivek Raj",
    lang: "kn"
  },
  {
    img: "assets/img/services/20.jpg",
    src: "Prajavani",
    desc: "No thirst for power, money, popularity",
    lang: "kn",
    link: "https://www.prajavani.net/district/dakshina-kannada/prajavani-deccan-herald-mangalore-upsc-883200.html"
  },
  {
    img: "assets/img/services/40.jpeg",
    src: "NewsFirstLive",
    desc: "Vivek Raj uses AI hydroponics to boost yields threefold in modern farming.",
    lang: "kn",
    link: "https://newsfirstlive.com/technology/vivek-raj-invests-rs-214-crore-in-ai-based-hydroponic-farming-ai-increases-yields-threefold-11121357"
  }
];

let currentLang = "en";

function createCard(card, index) {
  const targetLink = card.link ? card.link : card.img;
  const hasLink = !!card.link;
  const delay = (index % 4) * 100;

  return `
    <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="media-card">
        <div class="media-card-img-wrap">
          <img
            src="${card.img}"
            alt="${card.desc}"
            class="media-card-img"
            loading="lazy"
          />
          <div class="media-card-overlay">
            <a href="${targetLink}" target="_blank" class="media-card-link" title="Read Article">
              <i class="bi bi-${hasLink ? 'box-arrow-up-right' : 'zoom-in'}"></i>
            </a>
          </div>
        </div>
        <div class="media-card-body">
          <span class="media-source-badge">
            <i class="bi bi-newspaper me-1"></i>${card.src}
          </span>
          <h5 class="media-card-title">
            <a href="${targetLink}" target="_blank">${card.desc}</a>
          </h5>
        </div>
      </div>
    </div>
  `;
}

function renderAllCards() {
  const grid = document.getElementById("media-cards-grid");
  const countEl = document.getElementById("media-total-count");
  if (!grid) return;

  const filtered = cardData.filter(card => card.lang === currentLang);

  // Update count badge
  if (countEl) countEl.textContent = filtered.length;

  // Render ALL cards — no slice/limit
  grid.innerHTML = filtered.map((card, i) => createCard(card, i)).join("");

  // Re-init AOS for newly injected elements
  if (typeof AOS !== "undefined") AOS.refresh();
}

function toggleLanguage(lang) {
  currentLang = lang;
  renderAllCards();
  updateButtonStyles(lang);
}

function updateButtonStyles(lang) {
  const btnEn = document.getElementById("btn-en");
  const btnKn = document.getElementById("btn-kn");
  if (!btnEn || !btnKn) return;
  btnEn.classList.toggle("active", lang === "en");
  btnKn.classList.toggle("active", lang !== "en");
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllCards();
  updateButtonStyles("en");
});
