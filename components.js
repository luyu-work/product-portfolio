const CASE_COMPONENTS = {
  "agreement-card-top": [
    ["agreement-card-top", "Превью"],
    ["ac-context", "Контекст"],
    ["ac-approach", "Процесс работы"],
    ["ac-job-story", "Job Story"],
    ["ac-hypotheses", "Гипотезы"],
    ["ac-solution", "Решение"],
    ["ac-expected-effect", "Ожидаемый эффект"],
  ],
  "story-builder-top": [
    ["story-builder-top", "Превью"],
    ["sb-context", "Контекст"],
    ["sb-problem", "Проблема"],
    ["sb-role", "Роль"],
    ["sb-approach", "Подход"],
    ["sb-solution", "Решение"],
    ["sb-result", "Итог"],
  ],
  "exchange-top": [
    ["exchange-top", "Превью"],
    ["ex-context", "Контекст"],
    ["ex-approach", "Процесс работы"],
    ["ex-job-story", "Job Story"],
    ["ex-hypotheses", "Гипотезы"],
    ["ex-user-flow", "User-flow"],
    ["ex-solution", "Решение"],
  ],
};

const PAGE_DESCRIPTIONS = {
  "": "Портфолио UI/UX-дизайнера Данила Харисова: B2B, B2G и B2E-продукты, кейсы и опыт работы.",
  "agreement-card-top":
    "Кейс о проектировании единой точки работы с договором, счетами, актами и УПД для менеджеров.",
  "story-builder-top":
    "Кейс о проектировании конструктора сторисов, который ускорил создание сценариев и снизил количество ошибок.",
  "exchange-top": "Кейс Exchange: как провести пользователя через повышение лимита.",
};

const HOME_BUTTON_MARKUP = `
  <a href="./index.html" class="back-button">
    <span class="back-button-icon">
      <img src="./src/icons/back.svg" alt="" width="12" height="12" />
    </span>
    <span class="back-button-text">На главную</span>
  </a>
`;

const renderCaseHeader = (element) => {
  element.innerHTML = HOME_BUTTON_MARKUP;
};

const renderCaseActions = (element) => {
  element.innerHTML = `
    ${HOME_BUTTON_MARKUP}
    <button class="back-button scroll-to-top" type="button">
      <span class="back-button-icon">
        <img src="./src/icons/up.svg" alt="" width="12" height="12" />
      </span>
      <span class="back-button-text">Наверх</span>
    </button>
  `;
};

const renderFooter = (element) => {
  element.innerHTML = `
    <div class="footer__year">
      <span class="footer__year-sign">©</span>
      <span class="footer__year-value">2026</span>
    </div>
    <div class="footer__note">Сделано мной для всех, IE</div>
  `;
};

const renderCaseAnchor = (element, items) => {
  element.innerHTML = `
    <div class="page-anchor__line" aria-hidden="true"></div>
    <div class="page-anchor__active-line" aria-hidden="true"></div>
    <ul class="page-anchor__list">
      ${items
        .map(
          ([targetId, label], index) => `
            <li class="page-anchor__list-item">
              <a
                href="#${targetId}"
                class="page-anchor__item${index === 0 ? " page-anchor__item--active" : ""}"
                data-anchor-link
                data-target-id="${targetId}"
              >${label}</a>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
};

const renderPortfolioComponents = () => {
  const mainId = document.querySelector(".main")?.id || "";
  const anchorItems = CASE_COMPONENTS[mainId];
  const description = document.querySelector('meta[name="description"]');

  if (description && PAGE_DESCRIPTIONS[mainId]) {
    description.setAttribute("content", PAGE_DESCRIPTIONS[mainId]);
  }

  document.querySelectorAll('[data-component="case-header"]').forEach(renderCaseHeader);
  document.querySelectorAll('[data-component="case-actions"]').forEach(renderCaseActions);
  document.querySelectorAll('[data-component="site-footer"]').forEach(renderFooter);

  if (anchorItems) {
    document
      .querySelectorAll('[data-component="case-anchor"]')
      .forEach((element) => renderCaseAnchor(element, anchorItems));
  }
};

window.renderPortfolioComponents = renderPortfolioComponents;
