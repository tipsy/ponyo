import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles, animationStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';

class FeaturesSection extends LitElement {
    static styles = [
        typographyStyles,
        animationStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--spacing-xl);
                padding: var(--spacing-3xl) 0;
            }

            .feature {
                padding: var(--spacing-2xl);
                background: var(--color-background);
                border: 1px solid var(--color-background-tertiary);
                border-radius: var(--radius-xl);
                text-align: center;
                box-shadow: var(--shadow-card);
                transition: var(--transition-all);
                opacity: 0;
            }

            .feature.animate-slide-up {
                opacity: 1;
            }

            .feature:hover {
                transform: translateY(-8px);
                box-shadow: var(--shadow-elevated);
                border-color: var(--color-primary-light);
            }

            .icon {
                font-size: 48px;
                margin-bottom: var(--spacing-lg);
                display: inline-block;
                transition: var(--transition-base);
            }

            .feature:hover .icon {
                transform: scale(1.1);
            }

            h3 {
                color: var(--color-text);
                margin-bottom: var(--spacing-md);
            }

            p {
                color: var(--color-text-secondary);
            }

            @media (max-width: 768px) {
                .features {
                    grid-template-columns: 1fr;
                    gap: var(--spacing-lg);
                    padding: var(--spacing-2xl) 0;
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
            <div class="features">
                <div class="feature animate-slide-up stagger-1">
                    <div class="icon">⚡</div>
                    <h3>${this.localeController.t('features.fast.title')}</h3>
                    <p>${this.localeController.t('features.fast.description')}</p>
                </div>
                <div class="feature animate-slide-up stagger-2">
                    <div class="icon">📱</div>
                    <h3>${this.localeController.t('features.responsive.title')}</h3>
                    <p>${this.localeController.t('features.responsive.description')}</p>
                </div>
                <div class="feature animate-slide-up stagger-3">
                    <div class="icon">✨</div>
                    <h3>${this.localeController.t('features.simple.title')}</h3>
                    <p>${this.localeController.t('features.simple.description')}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('features-section', FeaturesSection);


