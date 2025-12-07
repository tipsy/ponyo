import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { LocaleController } from './locales.js';

class LanguageSelector extends LitElement {
    static properties = {
        isOpen: { type: Boolean, state: true }
    };

    static styles = css`
        :host {
            display: block;
            position: relative;
        }

        .selector {
            position: relative;
        }

        .current {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) var(--spacing-md);
            background: var(--glass-background);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            border-radius: var(--radius-full);
            cursor: pointer;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            color: var(--color-text);
            transition: var(--transition-all);
            box-shadow: var(--shadow-sm);
        }

        .current:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-1px);
            border-color: var(--color-primary-light);
        }

        .flag {
            font-size: 18px;
            line-height: 1;
        }

        .arrow {
            font-size: 12px;
            transition: transform var(--transition-base);
        }

        .current.open .arrow {
            transform: rotate(180deg);
        }

        .dropdown {
            position: absolute;
            top: calc(100% + var(--spacing-sm));
            right: 0;
            min-width: 160px;
            background: var(--color-background);
            border: 1px solid var(--color-background-tertiary);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            padding: var(--spacing-xs);
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: var(--transition-all);
            z-index: var(--z-dropdown);
        }

        .dropdown.open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .option {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--radius-md);
            cursor: pointer;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            color: var(--color-text);
            transition: var(--transition-fast);
        }

        .option:hover {
            background: var(--color-background-secondary);
        }

        .option.active {
            background: var(--gradient-primary);
            color: white;
        }

        .option.active:hover {
            background: var(--gradient-primary);
        }
    `;

    constructor() {
        super();
        this.isOpen = false;
        this.localeController = new LocaleController(this);

        // Close dropdown when clicking outside
        this._handleClickOutside = this._handleClickOutside.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this._handleClickOutside);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (!this.contains(e.target)) {
            this.isOpen = false;
        }
    }

    _toggleDropdown(e) {
        e.stopPropagation();
        this.isOpen = !this.isOpen;
    }

    _selectLanguage(locale) {
        this.localeController.setLocale(locale);
        this.isOpen = false;
    }

    _getLanguageInfo(locale) {
        const languages = {
            en: { name: 'English', flag: '🇬🇧' },
            no: { name: 'Norsk', flag: '🇳🇴' }
        };
        return languages[locale] || languages.en;
    }

    render() {
        const currentLocale = this.localeController.locale;
        const currentLang = this._getLanguageInfo(currentLocale);

        return html`
            <div class="selector">
                <div 
                    class="current ${this.isOpen ? 'open' : ''}" 
                    @click=${this._toggleDropdown}
                >
                    <span class="flag">${currentLang.flag}</span>
                    <span class="name">${currentLang.name}</span>
                    <span class="arrow">▼</span>
                </div>
                
                <div class="dropdown ${this.isOpen ? 'open' : ''}">
                    ${this._renderOption('en', currentLocale)}
                    ${this._renderOption('no', currentLocale)}
                </div>
            </div>
        `;
    }

    _renderOption(locale, currentLocale) {
        const lang = this._getLanguageInfo(locale);
        const isActive = locale === currentLocale;

        return html`
            <div 
                class="option ${isActive ? 'active' : ''}"
                @click=${() => this._selectLanguage(locale)}
            >
                <span class="flag">${lang.flag}</span>
                <span class="name">${lang.name}</span>
            </div>
        `;
    }
}

customElements.define('language-selector', LanguageSelector);
