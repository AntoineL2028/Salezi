import favicon from "./extensions/favicon.ico";
const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  head: {
    favicon: favicon,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "FNAC Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Cloudly",
      "Auth.form.welcome.title": "Welcome to FNAC Dashboard",
      "Auth.form.welcome.subtitle": "Please login to continue",
      "Auth.form.register.subtitle": "Please register to continue",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
