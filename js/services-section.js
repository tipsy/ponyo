import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles, animationStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';

class ServicesSection extends LitElement {
    static styles = [
        typographyStyles,
        animationStyles,
        css`
            :host {
                display: block;
                width: 100%;
                background: var(--color-background-secondary);
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

            .grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: var(--spacing-2xl);
            }

            @media (max-width: 1100px) {
                .grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 600px) {
                .grid {
                    grid-template-columns: 1fr;
                }
            }

            .service-card {
                background: var(--color-background);
                padding: var(--spacing-2xl);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-md);
                border: 1px solid var(--color-border);
                transition: transform 0.3s ease;
            }

            .service-card:hover {
                transform: translateY(-5px);
            }

            .icon {
                font-size: 3rem;
                margin-bottom: var(--spacing-md);
                display: block;
            }

            h3 {
                font-size: var(--font-size-xl);
                margin-bottom: var(--spacing-sm);
                color: var(--color-text);
            }

            p {
                color: var(--color-text-secondary);
                line-height: 1.6;
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
                <h2>${this.localeController.t('services.title')}</h2>
                <div class="grid">
                    <div class="service-card animate-slide-up stagger-1">
                        <span class="icon">🖥️</span>
                        <h3>${this.localeController.t('services.software.title')}</h3>
                        <p>${this.localeController.t('services.software.description')}</p>
                    </div>
                    <div class="service-card animate-slide-up stagger-2">
                        <span class="icon">☁️</span>
                        <h3>${this.localeController.t('services.saas.title')}</h3>
                        <p>${this.localeController.t('services.saas.description')}</p>
                    </div>
                    <div class="service-card animate-slide-up stagger-3">
                        <span class="icon">📱</span>
                        <h3>${this.localeController.t('services.apps.title')}</h3>
                        <p>${this.localeController.t('services.apps.description')}</p>
                    </div>
                    <div class="service-card animate-slide-up stagger-4">
                        <span class="icon">❤️</span>
                        <h3>${this.localeController.t('services.opensource.title')}</h3>
                        <p>${this.localeController.t('services.opensource.description')}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('services-section', ServicesSection);
