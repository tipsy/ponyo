// Translation dictionaries
export const translations = {
    en: {
        // Hero section
        'hero.title': 'Services for people',
        // Hero section
        'hero.title': 'Services for people',

        // Services section
        'services.title': 'Our Services',
        'services.software.title': 'Custom Software',
        'services.software.description': 'Tailored digital solutions designed to meet your unique business needs.',
        'services.saas.title': 'SaaS Platforms',
        'services.saas.description': 'Scalable and robust software-as-a-service platforms built for growth.',
        'services.apps.title': 'Mobile Apps',
        'services.apps.description': 'User-centric mobile applications that deliver exceptional experiences.',
        'services.opensource.title': 'Open Source',
        'services.opensource.description': 'Contributing back to the community with high-quality open source libraries.',

        // Values section
        'values.title': 'Our Values',
        'values.people.title': 'People First',
        'values.people.description': 'Technology should serve humans, not the other way around. We design with empathy and inclusivity.',
        'values.engineering.title': 'Solid Engineering',
        'values.engineering.description': 'We build robust systems that stand the test of time. Quality is not an afterthought, it is our foundation.',
        'values.transparency.title': 'Transparent Collaboration',
        'values.transparency.description': 'We believe in radical honesty. No hidden agendas, just open partnership and shared goals.',

        // Footer
        'footer.copyright': '© {year} Ponyo. All rights reserved.',

        // Language selector
        'language.english': 'English',
        'language.norwegian': 'Norwegian',
        'language.select': 'Select language',
    },

    no: {
        // Hero section
        'hero.title': 'Tjenester for folk',
        // Hero section
        'hero.title': 'Tjenester for folk',

        // Services section
        'services.title': 'Våre Tjenester',
        'services.software.title': 'Skreddersydd Programvare',
        'services.software.description': 'Tilpassede digitale løsninger designet for å møte dine unike forretningsbehov.',
        'services.saas.title': 'SaaS-plattformer',
        'services.saas.description': 'Skalerbare og robuste programvare-som-tjeneste plattformer bygget for vekst.',
        'services.apps.title': 'Mobilapper',
        'services.apps.description': 'Brukersentrerte mobilapplikasjoner som leverer eksepsjonelle opplevelser.',
        'services.opensource.title': 'Åpen Kildekode',
        'services.opensource.description': 'Bidrar tilbake til fellesskapet med biblioteker av høy kvalitet.',

        // Values section
        'values.title': 'Våre Verdier',
        'values.people.title': 'Mennesker Først',
        'values.people.description': 'Teknologi skal tjene mennesker. Vi designer med empati og inkluderende løsninger i sentrum.',
        'values.engineering.title': 'Solid Ingeniørkunst',
        'values.engineering.description': 'Vi bygger robuste systemer som tåler tidens tann. Kvalitet er fundamentet i alt vi leverer.',
        'values.transparency.title': 'Åpent Samarbeid',
        'values.transparency.description': 'Vi tror på radikal ærlighet. Ingen skjulte agendaer, bare åpent partnerskap og felles mål.',

        // Footer
        'footer.copyright': '© {year} Ponyo. Alle rettigheter forbeholdt.',

        // Language selector
        'language.english': 'Engelsk',
        'language.norwegian': 'Norsk',
        'language.select': 'Velg språk',
    }
};

// Locale state - reactive object that triggers updates across all components
class LocaleState {
    constructor() {
        // Load saved locale from localStorage or default to 'en'
        this._locale = localStorage.getItem('ponyo-locale') || 'en';
        this._listeners = new Set();
    }

    get locale() {
        return this._locale;
    }

    set locale(value) {
        if (this._locale !== value && translations[value]) {
            this._locale = value;
            localStorage.setItem('ponyo-locale', value);
            this._notifyListeners();
        }
    }

    subscribe(callback) {
        this._listeners.add(callback);
        return () => this._listeners.delete(callback);
    }

    _notifyListeners() {
        this._listeners.forEach(callback => callback(this._locale));
    }

    t(key, params = {}) {
        const translation = translations[this._locale]?.[key] || key;

        // Replace parameters in translation string
        return Object.entries(params).reduce((text, [param, value]) => {
            return text.replace(new RegExp(`\\{${param}\\}`, 'g'), value);
        }, translation);
    }
}

// Export singleton instance
export const localeState = new LocaleState();

// Helper function for translations
export function t(key, params = {}) {
    return localeState.t(key, params);
}

// Locale Controller - Lit reactive controller for managing locale in components
export class LocaleController {
    constructor(host) {
        this.host = host;
        host.addController(this);
    }

    hostConnected() {
        // Subscribe to locale changes and trigger re-render
        this._unsubscribe = localeState.subscribe(() => {
            this.host.requestUpdate();
        });
    }

    hostDisconnected() {
        // Clean up subscription
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }

    get locale() {
        return localeState.locale;
    }

    setLocale(locale) {
        localeState.locale = locale;
    }

    t(key, params = {}) {
        return localeState.t(key, params);
    }
}
