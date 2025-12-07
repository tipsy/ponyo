// Translation dictionaries
export const translations = {
    en: {
        // Hero section
        'hero.title': 'Welcome to Ponyo',
        'hero.subtitle': 'A modern web experience built with Lit',

        // Features section
        'features.fast.title': 'Fast',
        'features.fast.description': 'Built with modern web components',
        'features.responsive.title': 'Responsive',
        'features.responsive.description': 'Works on all devices',
        'features.simple.title': 'Simple',
        'features.simple.description': 'Clean and maintainable code',

        // Footer
        'footer.copyright': '© {year} Ponyo. Built with Lit.',

        // Language selector
        'language.english': 'English',
        'language.norwegian': 'Norwegian',
        'language.select': 'Select language',
    },

    no: {
        // Hero section
        'hero.title': 'Velkommen til Ponyo',
        'hero.subtitle': 'En moderne nettopplevelse bygget med Lit',

        // Features section
        'features.fast.title': 'Rask',
        'features.fast.description': 'Bygget med moderne webkomponenter',
        'features.responsive.title': 'Responsiv',
        'features.responsive.description': 'Fungerer på alle enheter',
        'features.simple.title': 'Enkel',
        'features.simple.description': 'Ren og vedlikeholdbar kode',

        // Footer
        'footer.copyright': '© {year} Ponyo. Bygget med Lit.',

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
