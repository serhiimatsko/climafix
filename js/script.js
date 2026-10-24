/* ============================================
   ClimaFix — Main JavaScript
   ============================================ */

// ---- Telegram Bot Config ----
const TELEGRAM_BOT_TOKEN = '8602926329:AAHL8tgIdK8Nor8SLyLwRL0EgJwDdPt7MFI';
const TELEGRAM_CHAT_ID = '-5412585521';

// ---- Translations ----
const translations = {
  bg: {
    // Nav
    navServices: 'Услуги',
    navRegions: 'Региони',
    navAdvantages: 'Предимства',
    navContact: 'Контакти',

    // Hero
    heroBadge: '❄️ Професионален климатичен сервиз в Бургаска област',
    heroTitle: 'Обслужване и ремонт на <span>климатици</span>',
    heroSubtitle: 'Монтаж, демонтаж, ремонт, профилактика и зареждане с фреон. Обслужваме Бургас и региона — бързо, качествено и на достъпни цени.',
    heroBtnOrder: '📋 Оставете заявка',
    heroBtnCall: '📞 Обадете се',
    statYears: 'Години опит',
    statClients: 'Доволни клиенти',
    statBrands: 'Всички марки',
    statWarranty: 'Гаранция',

    // Services
    servicesTitle: 'Нашите услуги',
    servicesSubtitle: 'Предлагаме пълен спектър от услуги за климатични системи',
    serviceRepairTitle: 'Ремонт на климатици',
    serviceRepairDesc: 'Професионална диагностика и ремонт на всички видове климатични системи. Отстраняваме всякакви повреди бързо и ефективно.',
    serviceMaintenanceTitle: 'Профилактика и почистване',
    serviceMaintenanceDesc: 'Редовната профилактика удължава живота на вашия климатик. Почистване на филтри, дезинфекция и проверка на всички компоненти.',
    serviceFreonTitle: 'Зареждане с фреон',
    serviceFreonDesc: 'Професионално зареждане с фреон за оптимална ефективност. Откриване и отстраняване на течове в хладилната система.',
    serviceInstallTitle: 'Монтаж на климатици',
    serviceInstallDesc: 'Професионален монтаж на битови и промишлени климатични системи. Гарантираме правилна инсталация и пускане в експлоатация.',
    serviceRemoveTitle: 'Демонтаж на климатици',
    serviceRemoveDesc: 'Безопасен демонтаж на стари или неизползвани климатици. Прибиране на фреона и правилно разглобяване.',

    // Regions
    regionsTitle: 'Обслужвани региони',
    regionsSubtitle: 'Работим в Бургас и целия регион',
    regionBurgas: 'Бургас',
    regionBurgasDesc: 'Целият град',
    regionSunnyBeach: 'Слънчев бряг',
    regionSunnyBeachDesc: 'и Несебър',
    regionPomorie: 'Поморие',
    regionPomorieDesc: 'и Ахелой',
    regionSozopol: 'Созопол',
    regionSozopolDesc: 'и Черноморец',
    regionSarafovo: 'Сарафово',
    regionSarafovoDesc: 'и летище Бургас',
    regionRavda: 'Равда',
    regionRavdaDesc: 'и Свети Влас',

    // Advantages
    advantagesTitle: 'Защо да изберете нас',
    advantagesSubtitle: 'Вашият надежден партньор за климатични решения',
    advSpeed: 'Бързо обслужване',
    advSpeedDesc: 'Реагираме в рамките на 24 часа. При спешни случаи — в същия ден.',
    advQuality: 'Гарантирано качество',
    advQualityDesc: 'Предоставяме гаранция за всички извършени ремонти и услуги.',
    advPrice: 'Честни цени',
    advPriceDesc: 'Прозрачно ценообразуване без скрити такси. Безплатен оглед.',
    advExperience: 'Опитни майстори',
    advExperienceDesc: 'Сертифицирани специалисти с дългогодишен опит в бранша.',

    // Brands
    brandsTitle: 'Работим с всички марки',

    // Contact
    contactTitle: 'Свържете се с нас',
    contactSubtitle: 'Оставете заявка и ще се свържем с вас възможно най-скоро',
    contactPhone: 'Телефон',
    contactEmail: 'Имейл',
    contactAddress: 'Адрес',
    contactHours: 'Работно време',
    contactAddressVal: 'ул. Александровска 45, Бургас',
    contactHoursVal: 'Пн-Сб: 08:00-19:00',

    // Form
    formTitle: 'Оставете заявка',
    formName: 'Вашето име',
    formNamePh: 'Иван Иванов',
    formPhone: 'Телефон',
    formPhonePh: '+359 89 123 4567',
    formEmail: 'Имейл',
    formEmailPh: 'email@example.com',
    formService: 'Вид услуга',
    formServiceDefault: 'Изберете услуга',
    formServiceRepair: 'Ремонт на климатик',
    formServiceMaintenance: 'Профилактика и почистване',
    formServiceFreon: 'Зареждане с фреон',
    formServiceInstall: 'Монтаж на климатик',
    formServiceRemove: 'Демонтаж на климатик',
    formServiceOther: 'Друго',
    formRegion: 'Регион',
    formRegionDefault: 'Изберете регион',
    formMessage: 'Съобщение',
    formMessagePh: 'Опишете проблема или задайте въпрос...',
    formSubmit: 'Изпратете заявка',
    formSending: '⏳ Изпращане...',
    formSuccess: '✅ Заявката е изпратена успешно! Ще се свържем с вас скоро.',
    formError: '❌ Грешка при изпращане. Моля, обадете се по телефона.',

    // Footer
    footerDesc: 'Професионален сервиз за климатични системи в Бургас и региона. Монтаж, ремонт, профилактика.',
    footerLinks: 'Бързи връзки',
    footerContactTitle: 'Контакти',
    footerRegionsTitle: 'Региони',
    footerCopyright: '© 2026 ClimaFix. Всички права запазени.',
  },

  ru: {
    navServices: 'Услуги',
    navRegions: 'Регионы',
    navAdvantages: 'Преимущества',
    navContact: 'Контакты',

    heroBadge: '❄️ Профессиональный сервис кондиционеров в Бургасской области',
    heroTitle: 'Обслуживание и ремонт <span>кондиционеров</span>',
    heroSubtitle: 'Монтаж, демонтаж, ремонт, обслуживание и заправка фреоном. Обслуживаем Бургас и регион — быстро, качественно и по доступным ценам.',
    heroBtnOrder: '📋 Оставить заявку',
    heroBtnCall: '📞 Позвонить',
    statYears: 'Лет опыта',
    statClients: 'Довольных клиентов',
    statBrands: 'Все бренды',
    statWarranty: 'Гарантия',

    servicesTitle: 'Наши услуги',
    servicesSubtitle: 'Полный спектр услуг по обслуживанию кондиционеров',
    serviceRepairTitle: 'Ремонт кондиционеров',
    serviceRepairDesc: 'Профессиональная диагностика и ремонт всех видов кондиционеров. Устраняем любые неисправности быстро и эффективно.',
    serviceMaintenanceTitle: 'Обслуживание и чистка',
    serviceMaintenanceDesc: 'Регулярное обслуживание продлевает срок службы вашего кондиционера. Чистка фильтров, дезинфекция и проверка всех компонентов.',
    serviceFreonTitle: 'Заправка фреоном',
    serviceFreonDesc: 'Профессиональная заправка фреоном для оптимальной эффективности. Обнаружение и устранение утечек в холодильной системе.',
    serviceInstallTitle: 'Монтаж кондиционеров',
    serviceInstallDesc: 'Профессиональный монтаж бытовых и промышленных кондиционеров. Гарантируем правильную установку и запуск в эксплуатацию.',
    serviceRemoveTitle: 'Демонтаж кондиционеров',
    serviceRemoveDesc: 'Безопасный демонтаж старых или неиспользуемых кондиционеров. Сбор фреона и правильная разборка.',

    regionsTitle: 'Обслуживаемые регионы',
    regionsSubtitle: 'Работаем в Бургасе и всём регионе',
    regionBurgas: 'Бургас',
    regionBurgasDesc: 'Весь город',
    regionSunnyBeach: 'Солнечный Берег',
    regionSunnyBeachDesc: 'и Несебр',
    regionPomorie: 'Поморие',
    regionPomorieDesc: 'и Ахелой',
    regionSozopol: 'Созополь',
    regionSozopolDesc: 'и Черноморец',
    regionSarafovo: 'Сарафово',
    regionSarafovoDesc: 'и аэропорт Бургас',
    regionRavda: 'Равда',
    regionRavdaDesc: 'и Святой Влас',

    advantagesTitle: 'Почему выбирают нас',
    advantagesSubtitle: 'Ваш надёжный партнёр в обслуживании кондиционеров',
    advSpeed: 'Быстрый выезд',
    advSpeedDesc: 'Реагируем в течение 24 часов. В экстренных случаях — в тот же день.',
    advQuality: 'Гарантия качества',
    advQualityDesc: 'Предоставляем гарантию на все выполненные работы и услуги.',
    advPrice: 'Честные цены',
    advPriceDesc: 'Прозрачное ценообразование без скрытых платежей. Бесплатный осмотр.',
    advExperience: 'Опытные мастера',
    advExperienceDesc: 'Сертифицированные специалисты с многолетним опытом в отрасли.',

    brandsTitle: 'Работаем со всеми брендами',

    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Оставьте заявку и мы свяжемся с вами в кратчайшие сроки',
    contactPhone: 'Телефон',
    contactEmail: 'Эл. почта',
    contactAddress: 'Адрес',
    contactHours: 'Рабочее время',
    contactAddressVal: 'ул. Александровска 45, Бургас',
    contactHoursVal: 'Пн-Сб: 08:00-19:00',

    formTitle: 'Оставить заявку',
    formName: 'Ваше имя',
    formNamePh: 'Иван Иванов',
    formPhone: 'Телефон',
    formPhonePh: '+359 89 123 4567',
    formEmail: 'Эл. почта',
    formEmailPh: 'email@example.com',
    formService: 'Тип услуги',
    formServiceDefault: 'Выберите услугу',
    formServiceRepair: 'Ремонт кондиционера',
    formServiceMaintenance: 'Обслуживание и чистка',
    formServiceFreon: 'Заправка фреоном',
    formServiceInstall: 'Монтаж кондиционера',
    formServiceRemove: 'Демонтаж кондиционера',
    formServiceOther: 'Другое',
    formRegion: 'Регион',
    formRegionDefault: 'Выберите регион',
    formMessage: 'Сообщение',
    formMessagePh: 'Опишите проблему или задайте вопрос...',
    formSubmit: 'Отправить заявку',
    formSending: '⏳ Отправка...',
    formSuccess: '✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
    formError: '❌ Ошибка при отправке. Пожалуйста, позвоните по телефону.',

    footerDesc: 'Профессиональный сервис кондиционеров в Бургасе и регионе. Монтаж, ремонт, обслуживание.',
    footerLinks: 'Быстрые ссылки',
    footerContactTitle: 'Контакты',
    footerRegionsTitle: 'Регионы',
    footerCopyright: '© 2026 ClimaFix. Все права защищены.',
  },

  en: {
    navServices: 'Services',
    navRegions: 'Regions',
    navAdvantages: 'Why Us',
    navContact: 'Contact',

    heroBadge: '❄️ Professional AC Service in Burgas Region',
    heroTitle: 'Air Conditioning <span>Service & Repair</span>',
    heroSubtitle: 'Installation, removal, repair, maintenance and freon recharge. Serving Burgas and the entire region — fast, reliable and affordable.',
    heroBtnOrder: '📋 Request Service',
    heroBtnCall: '📞 Call Us',
    statYears: 'Years Experience',
    statClients: 'Happy Clients',
    statBrands: 'All Brands',
    statWarranty: 'Warranty',

    servicesTitle: 'Our Services',
    servicesSubtitle: 'Full range of air conditioning services',
    serviceRepairTitle: 'AC Repair',
    serviceRepairDesc: 'Professional diagnostics and repair of all types of air conditioning systems. We fix any issue quickly and efficiently.',
    serviceMaintenanceTitle: 'Maintenance & Cleaning',
    serviceMaintenanceDesc: 'Regular maintenance extends the life of your AC. Filter cleaning, disinfection and complete component check.',
    serviceFreonTitle: 'Freon Recharge',
    serviceFreonDesc: 'Professional freon recharging for optimal efficiency. Leak detection and repair in the refrigeration system.',
    serviceInstallTitle: 'AC Installation',
    serviceInstallDesc: 'Professional installation of residential and commercial air conditioning systems. We guarantee proper setup and commissioning.',
    serviceRemoveTitle: 'AC Removal',
    serviceRemoveDesc: 'Safe removal of old or unused air conditioners. Freon recovery and proper dismantling.',

    regionsTitle: 'Service Areas',
    regionsSubtitle: 'We serve Burgas and the entire region',
    regionBurgas: 'Burgas',
    regionBurgasDesc: 'Entire city',
    regionSunnyBeach: 'Sunny Beach',
    regionSunnyBeachDesc: 'and Nessebar',
    regionPomorie: 'Pomorie',
    regionPomorieDesc: 'and Aheloy',
    regionSozopol: 'Sozopol',
    regionSozopolDesc: 'and Chernomorets',
    regionSarafovo: 'Sarafovo',
    regionSarafovoDesc: 'and Burgas Airport',
    regionRavda: 'Ravda',
    regionRavdaDesc: 'and Sveti Vlas',

    advantagesTitle: 'Why Choose Us',
    advantagesSubtitle: 'Your reliable partner for AC solutions',
    advSpeed: 'Fast Response',
    advSpeedDesc: 'We respond within 24 hours. Emergency cases — same day service.',
    advQuality: 'Quality Guarantee',
    advQualityDesc: 'We provide warranty on all repairs and services performed.',
    advPrice: 'Fair Prices',
    advPriceDesc: 'Transparent pricing with no hidden fees. Free inspection.',
    advExperience: 'Expert Technicians',
    advExperienceDesc: 'Certified specialists with years of industry experience.',

    brandsTitle: 'We work with all brands',

    contactTitle: 'Contact Us',
    contactSubtitle: 'Submit a request and we will get back to you as soon as possible',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactAddress: 'Address',
    contactHours: 'Working Hours',
    contactAddressVal: '45 Aleksandrovska St., Burgas',
    contactHoursVal: 'Mon-Sat: 08:00-19:00',

    formTitle: 'Request Service',
    formName: 'Your Name',
    formNamePh: 'John Doe',
    formPhone: 'Phone',
    formPhonePh: '+359 89 123 4567',
    formEmail: 'Email',
    formEmailPh: 'email@example.com',
    formService: 'Service Type',
    formServiceDefault: 'Select a service',
    formServiceRepair: 'AC Repair',
    formServiceMaintenance: 'Maintenance & Cleaning',
    formServiceFreon: 'Freon Recharge',
    formServiceInstall: 'AC Installation',
    formServiceRemove: 'AC Removal',
    formServiceOther: 'Other',
    formRegion: 'Region',
    formRegionDefault: 'Select a region',
    formMessage: 'Message',
    formMessagePh: 'Describe the problem or ask a question...',
    formSubmit: 'Submit Request',
    formSending: '⏳ Sending...',
    formSuccess: '✅ Request sent successfully! We will contact you shortly.',
    formError: '❌ Error sending request. Please call us by phone.',

    footerDesc: 'Professional air conditioning service in Burgas and the region. Installation, repair, maintenance.',
    footerLinks: 'Quick Links',
    footerContactTitle: 'Contact',
    footerRegionsTitle: 'Regions',
    footerCopyright: '© 2026 ClimaFix. All rights reserved.',
  }
};

// ---- Region options per language ----
const regionOptions = {
  bg: ['Бургас', 'Слънчев бряг', 'Несебър', 'Поморие', 'Ахелой', 'Созопол', 'Черноморец', 'Сарафово', 'Равда', 'Свети Влас', 'Друго'],
  ru: ['Бургас', 'Солнечный Берег', 'Несебр', 'Поморие', 'Ахелой', 'Созополь', 'Черноморец', 'Сарафово', 'Равда', 'Святой Влас', 'Другое'],
  en: ['Burgas', 'Sunny Beach', 'Nessebar', 'Pomorie', 'Aheloy', 'Sozopol', 'Chernomorets', 'Sarafovo', 'Ravda', 'Sveti Vlas', 'Other']
};

// ---- Current language ----
let currentLang = localStorage.getItem('climafix-lang') || 'bg';

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initScrollToTop();
  initHeaderScroll();
  initForm();
});

// ============================================
// LANGUAGE SWITCHER
// ============================================
function initLanguage() {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('climafix-lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Translate all elements with data-i18n
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update region dropdown
  updateRegionDropdown(lang);

  // Update page title
  const titles = {
    bg: 'ClimaFix — Обслужване и ремонт на климатици в Бургас',
    ru: 'ClimaFix — Обслуживание и ремонт кондиционеров в Бургасе',
    en: 'ClimaFix — AC Service & Repair in Burgas'
  };
  document.title = titles[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function updateRegionDropdown(lang) {
  const select = document.getElementById('formRegion');
  if (!select) return;

  const currentVal = select.value;
  const t = translations[lang];

  // Remove all options except the first (default)
  while (select.options.length > 1) {
    select.remove(1);
  }

  // Update default option
  select.options[0].textContent = t.formRegionDefault;

  // Add region options
  regionOptions[lang].forEach(region => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    select.appendChild(option);
  });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  if (!burger || !navMenu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80; // header height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.pageYOffset > 400);
  });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  });
}

// ============================================
// FORM HANDLING & TELEGRAM
// ============================================
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const statusEl = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.btn-submit');
    const t = translations[currentLang];

    // Get form data
    const name = form.querySelector('#formName').value.trim();
    const phone = form.querySelector('#formPhone').value.trim();
    const email = form.querySelector('#formEmail').value.trim();
    const service = form.querySelector('#formService').value;
    const region = form.querySelector('#formRegion').value;
    const message = form.querySelector('#formMessage').value.trim();

    // Validation
    if (!name || !phone) {
      statusEl.className = 'form-status error';
      statusEl.textContent = currentLang === 'bg'
        ? '⚠️ Моля, попълнете име и телефон.'
        : currentLang === 'ru'
          ? '⚠️ Пожалуйста, заполните имя и телефон.'
          : '⚠️ Please fill in your name and phone.';
      return;
    }

    // Show sending state
    submitBtn.disabled = true;
    submitBtn.textContent = t.formSending;
    statusEl.className = 'form-status sending';
    statusEl.textContent = t.formSending;

    // Build Telegram message
    const tgMessage = `
🔧 *Нова заявка от ClimaFix!*

👤 *Име:* ${name}
📞 *Телефон:* ${phone}
📧 *Имейл:* ${email || '—'}
🛠 *Услуга:* ${service || '—'}
📍 *Регион:* ${region || '—'}
💬 *Съобщение:* ${message || '—'}

🌐 *Език на сайта:* ${currentLang.toUpperCase()}
📅 *Дата:* ${new Date().toLocaleString('bg-BG')}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: tgMessage,
            parse_mode: 'Markdown'
          })
        }
      );

      const data = await response.json();

      if (data.ok) {
        statusEl.className = 'form-status success';
        statusEl.textContent = t.formSuccess;
        form.reset();
      } else {
        throw new Error(data.description || 'Telegram API error');
      }
    } catch (error) {
      console.error('Telegram send error:', error);
      statusEl.className = 'form-status error';
      statusEl.textContent = t.formError;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t.formSubmit;
    }
  });
}
