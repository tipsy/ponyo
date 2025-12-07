import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';

class FooterSection extends LitElement {
    static styles = [
        typographyStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .footer {
                padding: var(--spacing-xl);
                background: linear-gradient(180deg, var(--color-background) 0%, var(--color-background-secondary) 100%);
                text-align: center;
                border-top: 1px solid var(--color-background-tertiary);
            }

            p {
                font-size: var(--font-size-sm);
                color: var(--color-text-muted);
            }
        `
    ];

    constructor() {
        super();
        this.localeController = new LocaleController(this);
    }

    get currentYear() {
        return new Date().getFullYear();
    }

    render() {
        return html`
            <div class="footer">
                <p>${this.localeController.t('footer.copyright', { year: this.currentYear })}</p>
            </div>
        `;
    }
}

customElements.define('footer-section', FooterSection);


