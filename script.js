const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const page = document.body.dataset.page;

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const pageMap = {
  home: '/',
  movies: '/movies/',
  dramas: '/dramas/',
  animes: '/animes/',
  'pb-home': '/dramas/peaky-blinders/',
  intro: '/dramas/peaky-blinders/intro.html',
  season1: '/dramas/peaky-blinders/season1.html',
  season2: '/dramas/peaky-blinders/season2.html',
  season3: '/dramas/peaky-blinders/season3.html',
  season4: '/dramas/peaky-blinders/season4.html',
  season5: '/dramas/peaky-blinders/season5.html',
  season6: '/dramas/peaky-blinders/season6.html',
  characters: '/dramas/peaky-blinders/characters.html',
  relationship: '/dramas/peaky-blinders/relationship.html',
  articles: '/dramas/peaky-blinders/articles.html',
  movie: '/dramas/peaky-blinders/movie.html'
};

if (nav && pageMap[page]) {
  const current = Array.from(nav.querySelectorAll('a')).find((link) => link.getAttribute('href') === pageMap[page]);
  if (current) {
    current.classList.add('is-current');
    current.setAttribute('aria-current', 'page');
  }
}

const spoilerButtons = document.querySelectorAll('[data-spoiler-toggle]');

spoilerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('aria-controls');
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) {
      return;
    }

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
    button.textContent = isOpen ? 'ネタバレありあらすじを表示' : 'ネタバレありあらすじを閉じる';
  });
});

const consentKey = 'movieinfo_cookie_consent';

function applyConsentState(state) {
  document.documentElement.dataset.consent = state;
  window.dispatchEvent(new CustomEvent('site-consent-updated', { detail: { state } }));
}

function saveConsent(state) {
  localStorage.setItem(consentKey, state);
  applyConsentState(state);
  const banner = document.querySelector('.consent-banner');
  if (banner) {
    banner.remove();
  }
}

function buildConsentBanner() {
  if (localStorage.getItem(consentKey)) {
    applyConsentState(localStorage.getItem(consentKey));
    return;
  }

  const banner = document.createElement('aside');
  banner.className = 'consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Cookie利用についてのお知らせ');

  banner.innerHTML = `
    <div class="consent-banner__inner">
      <p class="tag">Cookie通知</p>
      <h2>Cookieと広告利用について</h2>
      <p>当サイトでは、利便性向上や広告配信準備のために Cookie 等を利用する場合があります。詳細は <a href="/privacy.html">プライバシーポリシー</a> と <a href="/ads.html">広告掲載方針</a> をご確認ください。</p>
      <p class="article-meta">この通知は簡易実装です。広告配信地域によっては、公開時に正式な同意管理ツールが別途必要です。</p>
      <div class="consent-banner__actions">
        <button type="button" class="button" data-consent-action="accept">同意する</button>
        <button type="button" class="button button-ghost" data-consent-action="reject">同意しない</button>
      </div>
    </div>
  `;

  banner.querySelector('[data-consent-action="accept"]').addEventListener('click', () => {
    saveConsent('granted');
  });

  banner.querySelector('[data-consent-action="reject"]').addEventListener('click', () => {
    saveConsent('denied');
  });

  document.body.appendChild(banner);
}

applyConsentState(localStorage.getItem(consentKey) || 'unset');
buildConsentBanner();
