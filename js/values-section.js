import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles, animationStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';

class ValuesSection extends LitElement {
    static styles = [
        typographyStyles,
        animationStyles,
        css`
            :host {
                display: block;
                width: 100%;
                padding: var(--spacing-4xl) 0;
            }

            .container {
                max-width: var(--container-max-width);
                margin: 0 auto;
                padding: 0 var(--spacing-lg);
            }

            h2 {
                text-align: center;
                font-size: var(--font-size-3xl);
                color: var(--color-text);
                margin-bottom: var(--spacing-3xl);
            }

            .values-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--spacing-xl);
            }

            .value-item {
                background: linear-gradient(135deg, var(--color-background-secondary), var(--color-background));
                padding: var(--spacing-3xl);
                border-radius: var(--radius-xl);
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-md);
            }

            .value-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: var(--gradient-primary);
            }

            h3 {
                font-size: var(--font-size-2xl);
                margin-bottom: var(--spacing-md);
                color: var(--color-text);
            }

            p {
                font-size: var(--font-size-lg);
                color: var(--color-text-secondary);
                line-height: 1.6;
            }

            @media (max-width: 768px) {
                .values-grid {
                    grid-template-columns: 1fr;
                    gap: var(--spacing-xl);
                }
            }
        `
    ];

    constructor() {
        super();
        this.localeController = new LocaleController(this);
    }

    render() {
        return html`
            <div class="container">
                <h2>${this.localeController.t('values.title')}</h2>
                <div class="values-grid">
                    <div class="value-item animate-slide-up stagger-1">
                        <h3>${this.localeController.t('values.people.title')}</h3>
                        <p>${this.localeController.t('values.people.description')}</p>
                    </div>
                    <div class="value-item animate-slide-up stagger-2">
                        <h3>${this.localeController.t('values.engineering.title')}</h3>
                        <p>${this.localeController.t('values.engineering.description')}</p>
                    </div>
                    <div class="value-item animate-slide-up stagger-3">
                        <h3>${this.localeController.t('values.transparency.title')}</h3>
                        <p>${this.localeController.t('values.transparency.description')}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('values-section', ValuesSection);
