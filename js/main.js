const CHANNELS = [
  { name: "Futbol Historia", handle: "@FutbolHistoria88", channelUrl: "https://www.youtube.com/@FutbolHistoria88", niche: "Sports", slug: "futbolhistoria88", avatarLocal: "assets/channels/futbolhistoria88.jpg", subscribers: "54K", topVideo: { title: "Why The 2017 Champions League Final Will Never Be Forgotten", videoUrl: "https://www.youtube.com/watch?v=ATqsaUb4rnk", views: "248K", thumbnailLocal: "assets/videos/futbolhistoria88.jpg" } },
  { name: "Fußball Maniac", handle: "@DerFußballManiac", channelUrl: "https://www.youtube.com/@DerFu%C3%9FballManiac", niche: "Sports", slug: "derfussballmaniac", avatarLocal: "assets/channels/derfussballmaniac.jpg", subscribers: "50.9K", topVideo: { title: "Deutschlands nächste Generation unter Klopp wird wieder angsteinflößend", videoUrl: "https://www.youtube.com/watch?v=7BDY6FIKfEk", views: "239K", thumbnailLocal: "assets/videos/derfussballmaniac.jpg" } },
  { name: "AutoLegenden", handle: "@Autolegenden", channelUrl: "https://www.youtube.com/@Autolegenden", niche: "Cars & Motorsport", slug: "autolegenden", avatarLocal: "assets/channels/autolegenden.jpg", subscribers: "16.5K", topVideo: { title: "9 Cult Cars of the 60s: An Icon Is Almost Forgotten Today", videoUrl: "https://www.youtube.com/watch?v=XV603t9Et1E", views: "552K", thumbnailLocal: "assets/videos/autolegenden.jpg" } },
  { name: "AutoChecker DE", handle: "@autocheckerde", channelUrl: "https://www.youtube.com/@autocheckerde", niche: "Cars & Motorsport", slug: "autocheckerde", avatarLocal: "assets/channels/autocheckerde.jpg", subscribers: "39.5K", topVideo: { title: "DRIVING WITHOUT GAS OR ELECTRICITY. These cars will get you through any crisis.", videoUrl: "https://www.youtube.com/watch?v=K4PCJKMcD_I", views: "103K", thumbnailLocal: "assets/videos/autocheckerde.jpg" } },
  { name: "The Impossible Build", handle: "@TheImpossibleBuild", channelUrl: "https://www.youtube.com/@TheImpossibleBuild", niche: "Engineering & Mega Builds", slug: "theimpossiblebuild", avatarLocal: "assets/channels/theimpossiblebuild.jpg", subscribers: "152K", topVideo: { title: "Turkey Has Built The World's Largest Army Of Armed Drones", videoUrl: "https://www.youtube.com/watch?v=qCT5b7gGz-c", views: "3.5M", thumbnailLocal: "assets/videos/theimpossiblebuild.jpg" } },
  { name: "Giga Builds FR", handle: "@GigaBuild", channelUrl: "https://www.youtube.com/@GigaBuild", niche: "Engineering & Mega Builds", slug: "gigabuild", avatarLocal: "assets/channels/gigabuild.jpg", subscribers: "8.26K", topVideo: { title: "The World's Largest Stadium Rises in Morocco", videoUrl: "https://www.youtube.com/watch?v=xd5SV1I7Ks0", views: "273K", thumbnailLocal: "assets/videos/gigabuild.jpg" } },
  { name: "Tennis Legacy", handle: "@tennislegacylove", channelUrl: "https://www.youtube.com/@tennislegacylove", niche: "Sports", slug: "tennislegacylove", avatarLocal: "assets/channels/tennislegacylove.jpg", subscribers: "9K", topVideo: { title: "How a Filipino Teenager Became the Most Hyped Player in Women's History", videoUrl: "https://www.youtube.com/watch?v=6OVKKNJMp28", views: "414K", thumbnailLocal: "assets/videos/tennislegacylove.jpg" } },
  { name: "Fröhliches Essen", handle: "@FröhlichesEssen", channelUrl: "https://www.youtube.com/@Fr%C3%B6hlichesEssen", niche: "Food & Lifestyle", slug: "froehlichesessen", avatarLocal: "assets/channels/froehlichesessen.jpg", subscribers: "4.7K", topVideo: { title: "So war Fast Food in Deutschland in den 1980ern!", videoUrl: "https://www.youtube.com/watch?v=YH4a-Ex7Jts", views: "190K", thumbnailLocal: "assets/videos/froehlichesessen.jpg" } },
  { name: "Elite Foot DE", handle: "@elitefootde", channelUrl: "https://www.youtube.com/@elitefootde", niche: "Sports", slug: "elitefootde", avatarLocal: "assets/channels/elitefootde.jpg", subscribers: "18.2K", topVideo: { title: "Luis Enrique hatte mit Mbappé völlig recht", videoUrl: "https://www.youtube.com/watch?v=WSQoLzpHcY8", views: "182K", thumbnailLocal: "assets/videos/elitefootde.jpg" } },
  { name: "Vintage Wings", handle: "@vintagewings-yt", channelUrl: "https://www.youtube.com/@vintagewings-yt", niche: "History & Documentary", slug: "vintagewings", avatarLocal: "assets/channels/vintagewings.jpg", subscribers: "2.82K", topVideo: { title: "The Boeing 377 Stratocruiser Was Luxurious, But Dangerous", videoUrl: "https://www.youtube.com/watch?v=dpxQC1in7jw", views: "455K", thumbnailLocal: "assets/videos/vintagewings.jpg" } },
  { name: "Tinte & Schwert", handle: "@TinteundSchwert", channelUrl: "https://www.youtube.com/@TinteundSchwert", niche: "History & Documentary", slug: "tinteundschwert", avatarLocal: "assets/channels/tinteundschwert.jpg", subscribers: "31.6K", topVideo: { title: "SCHOCKIERENDE Dinge, die bei den Wikinger „normal“ waren", videoUrl: "https://www.youtube.com/watch?v=N-QDhjpTfSg", views: "373K", thumbnailLocal: "assets/videos/tinteundschwert.jpg" } },
  { name: "Soulful Yesterdays", handle: "@SoulfulYesterdays-usa", channelUrl: "https://www.youtube.com/@SoulfulYesterdays-usa", niche: "Nostalgia", slug: "soulfulyesterdays", avatarLocal: "assets/channels/soulfulyesterdays.jpg", subscribers: "30.1K", topVideo: { title: "25 Vintage Items From Black Households That Are Worth a Fortune Today", videoUrl: "https://www.youtube.com/watch?v=KCn2Wuj0AfE", views: "260K", thumbnailLocal: "assets/videos/soulfulyesterdays.jpg" } },
  { name: "Prepping Point", handle: "@preppingpoint", channelUrl: "https://www.youtube.com/@preppingpoint", niche: "Other", slug: "preppingpoint", avatarLocal: "assets/channels/preppingpoint.jpg", subscribers: "10.9K", topVideo: { title: "The One Currency That Will Decide Who Survives After Collapse", videoUrl: "https://www.youtube.com/watch?v=6nP3N78WluM", views: "380K", thumbnailLocal: "assets/videos/preppingpoint.jpg" } },
  { name: "Field Power", handle: "@FieldPowerrr", channelUrl: "https://www.youtube.com/@FieldPowerrr", niche: "Other", slug: "fieldpower", avatarLocal: "assets/channels/fieldpower.jpg", subscribers: "2.92K", topVideo: { title: "These \"Different\" Tractors Are Actually the Exact SAME Machine", videoUrl: "https://www.youtube.com/watch?v=IffNfhj1HGQ", views: "141K", thumbnailLocal: "assets/videos/fieldpower.jpg" } },
  { name: "TheFirearmFiles", handle: "@thefirearmfiles26", channelUrl: "https://www.youtube.com/@thefirearmfiles26", niche: "Other", slug: "thefirearmfiles", avatarLocal: "assets/channels/thefirearmfiles.jpg", subscribers: "137", topVideo: { title: "15 WW2 Rifles That Will Be Worth A FORTUNE Never Sell These!", videoUrl: "https://www.youtube.com/watch?v=_33Xc51Tc7c", views: "20K", thumbnailLocal: "assets/videos/thefirearmfiles.jpg" } },
  { name: "The Underbelly", handle: "@TheUnderbellyCo", channelUrl: "https://www.youtube.com/@TheUnderbellyCo", niche: "History & Documentary", slug: "theunderbelly", avatarLocal: "assets/channels/theunderbelly.jpg", subscribers: "1.89K", topVideo: { title: "Why Romania Has More Power Than You Think", videoUrl: "https://www.youtube.com/watch?v=AlH0poGjUHU", views: "132K", thumbnailLocal: "assets/videos/theunderbelly.jpg" } },
  { name: "SilkRoadDiaries", handle: "@SilkRoadDiaries25", channelUrl: "https://www.youtube.com/@SilkRoadDiaries25", niche: "History & Documentary", slug: "silkroaddiaries", avatarLocal: "assets/channels/silkroaddiaries.jpg", subscribers: "21.6K", topVideo: { title: "The Ancient Chinese Courtyard House That Survived -40°C Winters Without Modern Technology", videoUrl: "https://www.youtube.com/watch?v=1Lu1YyJ-Q8Y", views: "181K", thumbnailLocal: "assets/videos/silkroaddiaries.jpg" } },
  { name: "Unmögliche Projekte", handle: "@unmogliche_projekte", channelUrl: "https://www.youtube.com/@unmogliche_projekte", niche: "Engineering & Mega Builds", slug: "unmoglicheprojekte", avatarLocal: "assets/channels/unmoglicheprojekte.jpg", subscribers: "25.4K", topVideo: { title: "How Egypt is splitting the Sahara - The 114km mega-project!", videoUrl: "https://www.youtube.com/watch?v=IXB_utjOgcI", views: "249K", thumbnailLocal: "assets/videos/unmoglicheprojekte.jpg" } },
  { name: "Schneidepunkt", handle: "@Schneidepunkt", channelUrl: "https://www.youtube.com/@Schneidepunkt", niche: "Other", slug: "schneidepunkt", avatarLocal: "assets/channels/schneidepunkt.jpg", subscribers: "1.75K", topVideo: { title: "Why Bronze Age swords didn't need a hand guard", videoUrl: "https://www.youtube.com/watch?v=YTWNmzrWTrk", views: "63K", thumbnailLocal: "assets/videos/schneidepunkt.jpg" } },
  { name: "FballBites", handle: "@fballbites", channelUrl: "https://www.youtube.com/@fballbites", niche: "Explainer", slug: "fballbites", avatarLocal: "assets/channels/fballbites.jpg", subscribers: "2.44K", topVideo: { title: "Every Club vs Club Rivalry Explained in 24 minutes!", videoUrl: "https://www.youtube.com/watch?v=hVtei8G-5GU", views: "110K", thumbnailLocal: "assets/videos/fballbites.jpg" } },
  { name: "Daily Bite", handle: "@dailyybitee", channelUrl: "https://www.youtube.com/@dailyybitee", niche: "Explainer", slug: "dailybite", avatarLocal: "assets/channels/dailybite.jpg", subscribers: "275", topVideo: { title: "Every Meat Pie Explained", videoUrl: "https://www.youtube.com/watch?v=qf_v2JfA1Ok", views: "5.2K", thumbnailLocal: "assets/videos/dailybite.jpg" } },
  { name: "WRC Explained", handle: "@wrcexplained", channelUrl: "https://www.youtube.com/@wrcexplained", niche: "Explainer", slug: "wrcexplained", avatarLocal: "assets/channels/wrcexplained.jpg", subscribers: "3.73K", topVideo: { title: "The 7 Levels of WRC Rally Cars", videoUrl: "https://www.youtube.com/watch?v=8GmP0loaMsg", views: "25K", thumbnailLocal: "assets/videos/wrcexplained.jpg" } },
  { name: "Motor Kingdom", handle: "@motorkingdomtv", channelUrl: "https://www.youtube.com/@motorkingdomtv", niche: "Cars & Motorsport", slug: "motorkingdom", avatarLocal: "assets/channels/motorkingdom.jpg", subscribers: "3.33K", topVideo: { title: "22 Unusual and FUTURISTIC Concept Cars From the 1980s", videoUrl: "https://www.youtube.com/watch?v=iT7lJ1MLA-A", views: "236K", thumbnailLocal: "assets/videos/motorkingdom.jpg" } },
  { name: "MasSUV", handle: "@massuvs", channelUrl: "https://www.youtube.com/@massuvs", niche: "Cars & Motorsport", slug: "massuvs", avatarLocal: "assets/channels/massuvs.jpg", subscribers: "2.28K", topVideo: { title: "Discreet Cars from the 90s That Could HUMILIATE Any Sports Car", videoUrl: "https://www.youtube.com/watch?v=9IeUL3aBjNY", views: "227K", thumbnailLocal: "assets/videos/massuvs.jpg" } },
  { name: "Blick in die Fabrik", handle: "@blickindiefabrik", channelUrl: "https://www.youtube.com/@blickindiefabrik", niche: "Manufacturing & Factories", slug: "blickindiefabrik", avatarLocal: "assets/channels/blickindiefabrik.jpg", subscribers: "23.5K", topVideo: { title: "Wie Red Bull In Der Fabrik Hergestellt Wird", videoUrl: "https://www.youtube.com/watch?v=LSpMT0WfX24", views: "222K", thumbnailLocal: "assets/videos/blickindiefabrik.jpg" } },
  { name: "Refined Residence", handle: "@celebrityrefinedresidence", channelUrl: "https://www.youtube.com/@celebrityrefinedresidence", niche: "Food & Lifestyle", slug: "refinedresidence", avatarLocal: "assets/channels/refinedresidence.jpg", subscribers: "1.1K", topVideo: { title: "TOUR Hank Marvin's HOME down under in PERTH", videoUrl: "https://www.youtube.com/watch?v=2e5MVwPedjA", views: "154K", thumbnailLocal: "assets/videos/refinedresidence.jpg" } },
  { name: "Factory Window", handle: "@FactoryWindow", channelUrl: "https://www.youtube.com/@FactoryWindow", niche: "Manufacturing & Factories", slug: "factorywindow", avatarLocal: "assets/channels/factorywindow.jpg", subscribers: "3.68K", topVideo: { title: "How Birkenstocks are Made in a Factory", videoUrl: "https://www.youtube.com/watch?v=E5TSlhVzPN4", views: "449K", thumbnailLocal: "assets/videos/factorywindow.jpg" } },
  { name: "Ingeniza", handle: "@ingenizayt", channelUrl: "https://www.youtube.com/@ingenizayt", niche: "Engineering & Mega Builds", slug: "ingeniza", avatarLocal: "assets/channels/ingeniza.jpg", subscribers: "6.6K", topVideo: { title: "Will the AZTECA STADIUM be up to par for the 2026 World Cup?", videoUrl: "https://www.youtube.com/watch?v=WzLRyQE-5Iw", views: "410K", thumbnailLocal: "assets/videos/ingeniza.jpg" } },
  { name: "Made in Motion", handle: "@MadeinMotionVideos", channelUrl: "https://www.youtube.com/@MadeinMotionVideos", niche: "Manufacturing & Factories", slug: "madeinmotion", avatarLocal: "assets/channels/madeinmotion.jpg", subscribers: "6.35K", topVideo: { title: "DJI Drones – Incredible Quality & the magic behind it!", videoUrl: "https://www.youtube.com/watch?v=HA-ZlU8-deI", views: "430K", thumbnailLocal: "assets/videos/madeinmotion.jpg" } },
  { name: "أساطير السيارات", handle: "@asateer-alsayarat", channelUrl: "https://www.youtube.com/@asateer-alsayarat", niche: "Cars & Motorsport", slug: "asateeralsayarat", avatarLocal: "assets/channels/asateeralsayarat.jpg", subscribers: "33K", topVideo: { title: "7 classic cars that never break down: These legends refuse to die!", videoUrl: "https://www.youtube.com/watch?v=o3hhXeffuww", views: "567K", thumbnailLocal: "assets/videos/asateeralsayarat.jpg" } },
  { name: "نظرة داخل المصنع", handle: "UCBFOmdk1HpA5Nv4S5uC68Nw", channelUrl: "https://www.youtube.com/channel/UCBFOmdk1HpA5Nv4S5uC68Nw", niche: "Manufacturing & Factories", slug: "nazraaltilalmasnaa", avatarLocal: "assets/channels/nazraaltilalmasnaa.jpg", subscribers: "200K", topVideo: { title: "كيف يتم تصنيع التونة داخل المصنع؟ – Tuna Factory", videoUrl: "https://www.youtube.com/watch?v=R3jB9ORTgqU", views: "1.4M", thumbnailLocal: "assets/videos/nazraaltilalmasnaa.jpg" } },
  { name: "Goal 90", handle: "@Goal_90", channelUrl: "https://www.youtube.com/@Goal_90", niche: "Sports", slug: "goal90", avatarLocal: "assets/channels/goal90.jpg", subscribers: "506K", topVideo: { title: "This is Why NOBODY Signed Victor Osimhen This Summer", videoUrl: "https://www.youtube.com/watch?v=GMeolUZemBA", views: "520K", thumbnailLocal: "assets/videos/goal90.jpg" } },
  { name: "YesterTube", handle: "@yestertube", channelUrl: "https://www.youtube.com/@yestertube", niche: "Nostalgia", slug: "yestertube", avatarLocal: "assets/channels/yestertube.jpg", subscribers: "17.4K", topVideo: { title: "10 Most Brutal 70s Exploitation Films That Got Banned", videoUrl: "https://www.youtube.com/watch?v=jS-BAQWyzDc", views: "765K", thumbnailLocal: "assets/videos/yestertube.jpg" } },
  { name: "The Elegant Gentleman", handle: "@TheElegantGentleman", channelUrl: "https://www.youtube.com/@theelegantgentleman", niche: "Food & Lifestyle", slug: "theelegantgentleman", avatarLocal: "assets/channels/theelegantgentleman.jpg", subscribers: "5.25K", topVideo: { title: "Gray Hair Style Mistakes You Need To Stop!", videoUrl: "https://www.youtube.com/watch?v=4uY_53EUzDA", views: "108K", thumbnailLocal: "assets/videos/theelegantgentleman.jpg" } }
];

const NICHES = ["Sports", "Cars & Motorsport", "Engineering & Mega Builds", "Manufacturing & Factories", "History & Documentary", "Food & Lifestyle", "Explainer", "Nostalgia", "Other"];

const TESTIMONIAL_COUNT = 15;

const PLAY_SVG = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#E0161C"/><path d="M26 20L46 32L26 44V20Z" fill="#fff"/></svg>`;

function youtubeIdFromUrl(url) {
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? m[1] : '';
}

function renderFilters(containerId, onChange) {
  const el = document.getElementById(containerId);
  const chips = ["All", ...NICHES];
  el.innerHTML = chips.map((n, i) =>
    `<button class="niche-chip${i === 0 ? ' active' : ''}" data-niche="${n}" role="tab" aria-selected="${i === 0}">${n}</button>`
  ).join('');
  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.niche-chip');
    if (!btn) return;
    el.querySelectorAll('.niche-chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    onChange(btn.dataset.niche);
  });
}

function applyFilter(gridId, niche) {
  const grid = document.getElementById(gridId);
  grid.querySelectorAll('[data-niche]').forEach(card => {
    card.hidden = !(niche === 'All' || card.dataset.niche === niche);
  });
}

function renderChannelGrid() {
  const grid = document.getElementById('channelGrid');
  grid.innerHTML = CHANNELS.map(ch => `
    <a class="channel-card" data-niche="${ch.niche}" href="${ch.channelUrl}" target="_blank" rel="noopener">
      <div class="channel-avatar"><img src="${ch.avatarLocal}" alt="${ch.name}" loading="lazy" width="76" height="76"></div>
      <div class="channel-name">${ch.name}</div>
      <div class="channel-subs">${ch.subscribers} subscribers</div>
    </a>
  `).join('');
}

function workCardHTML(ch) {
  const vid = youtubeIdFromUrl(ch.topVideo.videoUrl);
  return `
    <article class="work-card" data-niche="${ch.niche}">
      <button type="button" class="work-thumb" data-video-id="${vid}" data-video-title="${ch.topVideo.title.replace(/"/g, '&quot;')}" aria-label="Play: ${ch.topVideo.title.replace(/"/g, '&quot;')}">
        <img src="${ch.topVideo.thumbnailLocal}" alt="${ch.topVideo.title}" loading="lazy">
        <span class="work-play">${PLAY_SVG}</span>
      </button>
      <div class="work-body">
        <div class="work-channel">
          <img src="${ch.avatarLocal}" alt="${ch.name}" loading="lazy" width="26" height="26">
          <span>${ch.name}</span>
        </div>
        <h3 class="work-title">${ch.topVideo.title}</h3>
        <div class="work-foot">
          <span class="work-views">${ch.topVideo.views} views</span>
          <button type="button" class="work-link" data-video-id="${vid}" data-video-title="${ch.topVideo.title.replace(/"/g, '&quot;')}">Play video ▶</button>
        </div>
      </div>
    </article>
  `;
}

/* Three-column layout (items round-robin'd across the columns so their
   lengths differ by at most one card). Only used for the unfiltered "All"
   view — a filtered niche renders as a plain auto-flowing grid instead. */
function renderWorkGrid(niche) {
  const grid = document.getElementById('workGrid');
  if (!niche || niche === 'All') {
    // Round-robin (not consecutive thirds) so column lengths differ by at
    // most one card — a straight three-way split (e.g. 12/12/10) left a
    // visible gap at the bottom of the shorter column.
    const left = [], middle = [], right = [];
    CHANNELS.forEach((ch, i) => {
      const bucket = i % 3 === 0 ? left : i % 3 === 1 ? middle : right;
      bucket.push(ch);
    });
    grid.innerHTML = `
      <div class="work-col work-col-left">${left.map(workCardHTML).join('')}</div>
      <div class="work-col work-col-middle">${middle.map(workCardHTML).join('')}</div>
      <div class="work-col work-col-right">${right.map(workCardHTML).join('')}</div>
    `;
  } else {
    const matches = CHANNELS.filter(ch => ch.niche === niche);
    grid.innerHTML = matches.map(workCardHTML).join('');
  }
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
  }
  function close() { lightbox.classList.remove('open'); lightboxImg.src = ''; }
  document.getElementById('lightboxClose').addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  return { open, close };
}

/* Plays YouTube videos inline in a modal (embed iframe) so visitors never
   leave the site to watch — replaces the earlier "opens on youtube.com" links. */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoModalFrame');
  function open(videoId, title) {
    frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" title="${title || 'YouTube video'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('open');
  }
  function close() {
    modal.classList.remove('open');
    frame.innerHTML = '';
  }
  document.getElementById('videoModalClose').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  document.getElementById('workGrid').addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-video-id]');
    if (!trigger || !trigger.dataset.videoId) return;
    open(trigger.dataset.videoId, trigger.dataset.videoTitle);
  });

  return { open, close };
}

const CHECK_SVG = `<svg class="quote-check" viewBox="0 0 16 16" width="13" height="13"><circle cx="8" cy="8" r="8" fill="#1d9bf0"/><path d="M4.5 8.2l2.2 2.2 4.8-4.8" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const TESTIMONIAL_QUOTES = [
  { name: "How Structure", subs: "1.44K subscribers", quote: "Professional work. Quality & Precision in the execution of tasks.", avatarInitial: "HOW", avatarColor: "#2f6fed" },
  { name: "Giga Builds FR", subs: "8.25K subscribers", quote: "Hussein is absolutely wonderful. Professional, on time, reliable. He not only delivers great videos but he's easy to work with and is very knowledgeable. He listens to feedback and applies it immediately. I'm delighted to have him as part of my team.", avatarLocal: "assets/channels/gigabuild.jpg" }
];

function initCardStack(lightbox) {
  const screenshotItems = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => ({
    type: 'image',
    src: `assets/testimonials/whatsapp/${i + 1}.jpeg`,
    alt: `Client feedback screenshot ${i + 1}`
  }));
  const quoteItems = TESTIMONIAL_QUOTES.map(q => ({ type: 'quote', ...q }));
  const items = [...screenshotItems, ...quoteItems];
  const frame = document.getElementById('cardStackFrame');
  const dotsEl = document.getElementById('cardStackDots');
  const stackEl = document.getElementById('cardStack');
  const VISIBLE = 2; // cards visible on each side of the active one
  const SPACING = 128; // px, x-step per card
  const STEP_DEG = 9; // rotateZ per step, fans the stack out
  const ARC_Y = 18; // px, arc-down per step
  const ACTIVE_LIFT = 22; // px, active card raised above the fan
  const intervalMs = 2200;
  let current = 0;
  let timer = null;

  function cardInner(it) {
    if (it.type === 'image') {
      return `<img src="${it.src}" alt="${it.alt}" loading="lazy">`;
    }
    const avatar = it.avatarLocal
      ? `<img class="quote-avatar" src="${it.avatarLocal}" alt="${it.name}">`
      : `<div class="quote-avatar quote-avatar-text" style="background:${it.avatarColor}">${it.avatarInitial}</div>`;
    return `
      <div class="quote-card">
        <div class="quote-card-head">
          ${avatar}
          <div>
            <div class="quote-name">${it.name} ${CHECK_SVG}</div>
            <div class="quote-subs">${it.subs}</div>
          </div>
        </div>
        <p class="quote-text">&ldquo;${it.quote}&rdquo;</p>
      </div>
    `;
  }

  frame.innerHTML = items.map((it, i) =>
    `<div class="stack-card${it.type === 'quote' ? ' is-quote' : ''}" data-index="${i}">${cardInner(it)}</div>`
  ).join('');
  dotsEl.innerHTML = items.map((_, i) =>
    `<button class="stack-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Show testimonial ${i + 1}"></button>`
  ).join('');

  const cards = Array.from(frame.querySelectorAll('.stack-card'));
  const dots = Array.from(dotsEl.querySelectorAll('.stack-dot'));

  function render(dragX = 0) {
    cards.forEach((card, i) => {
      let dist = (i - current + items.length) % items.length;
      if (dist > items.length / 2) dist -= items.length;
      const abs = Math.abs(dist);
      const isActive = dist === 0;
      card.classList.toggle('active', isActive);
      if (abs > VISIBLE) {
        card.dataset.hidden = 'true';
        card.style.opacity = '0';
        card.style.zIndex = 0;
        return;
      }
      card.dataset.hidden = 'false';
      const scale = isActive ? 1.04 : 0.9 - (abs - 1) * 0.08;
      const x = dist * SPACING + (isActive ? dragX : 0);
      const rot = dist * STEP_DEG + (isActive ? dragX * 0.05 : 0);
      const y = abs * ARC_Y - (isActive ? ACTIVE_LIFT : 0);
      const tiltX = isActive ? 0 : 8;
      card.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${rot}deg) rotateX(${tiltX}deg) scale(${scale})`;
      card.style.zIndex = String(100 - abs);
      card.style.opacity = '1';
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(i) {
    current = (i + items.length) % items.length;
    render();
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, intervalMs);
  }
  function stopAuto() { if (timer) clearInterval(timer); timer = null; }

  let dragging = false, dragStartX = 0, dragDX = 0, movedEnough = false;

  frame.addEventListener('pointerdown', (e) => {
    const card = e.target.closest('.stack-card.active');
    if (!card) return;
    dragging = true; movedEnough = false;
    dragStartX = e.clientX;
    card.classList.add('dragging');
    card.setPointerCapture(e.pointerId);
    stopAuto();
  });
  frame.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    dragDX = e.clientX - dragStartX;
    if (Math.abs(dragDX) > 6) movedEnough = true;
    render(dragDX);
  });
  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    const card = frame.querySelector('.stack-card.active');
    if (card) card.classList.remove('dragging');
    const threshold = 60;
    if (dragDX < -threshold) next();
    else if (dragDX > threshold) prev();
    else render(0);
    dragDX = 0;
    startAuto();
  }
  frame.addEventListener('pointerup', endDrag);
  frame.addEventListener('pointercancel', endDrag);
  frame.addEventListener('pointerleave', (e) => { if (dragging && e.buttons === 0) endDrag(e); });

  frame.addEventListener('click', (e) => {
    if (movedEnough) { movedEnough = false; return; }
    const card = e.target.closest('.stack-card');
    if (!card) return;
    const idx = Number(card.dataset.index);
    if (idx === current) {
      if (items[idx].type === 'image') lightbox.open(items[idx].src, items[idx].alt);
    } else {
      goTo(idx);
    }
  });
  dotsEl.addEventListener('click', (e) => {
    const dot = e.target.closest('.stack-dot');
    if (!dot) return;
    goTo(Number(dot.dataset.index));
  });
  document.getElementById('stackNext').addEventListener('click', next);
  document.getElementById('stackPrev').addEventListener('click', prev);
  stackEl.addEventListener('mouseenter', stopAuto);
  stackEl.addEventListener('mouseleave', startAuto);

  render();
  startAuto();
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderChannelGrid();
  renderWorkGrid('All');
  renderFilters('nicheFilter', (niche) => applyFilter('channelGrid', niche));
  renderFilters('nicheFilterWork', (niche) => renderWorkGrid(niche));
  const lightbox = initLightbox();
  initCardStack(lightbox);
  initVideoModal();
  initNav();
});
