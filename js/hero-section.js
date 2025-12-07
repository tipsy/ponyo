import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles, animationStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';

class HeroSection extends LitElement {
    static styles = [
        typographyStyles,
        animationStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .hero {
                position: relative;
                text-align: center;
                padding: var(--spacing-4xl) var(--spacing-xl);
                background: var(--gradient-hero);
                overflow: hidden;
            }

            .hero::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
                pointer-events: none;
            }

            .hero-content {
                position: relative;
                z-index: 1;
                max-width: 800px;
                margin: 0 auto;
            }

            h1 {
                color: white;
                font-size: var(--font-size-6xl);
                margin-bottom: var(--spacing-lg);
                animation: slideDown 0.8s ease-out;
            }

            p {
                color: rgba(255, 255, 255, 0.95);
                font-size: var(--font-size-xl);
                font-weight: var(--font-weight-medium);
                animation: slideUp 0.8s ease-out;
                animation-delay: 0.2s;
                opacity: 0;
                animation-fill-mode: forwards;
            }

            @media (max-width: 768px) {
                .hero {
                    padding: var(--spacing-3xl) var(--spacing-lg);
                }

                h1 {
                    font-size: var(--font-size-4xl);
                }

                p {
                    font-size: var(--font-size-lg);
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
            <div class="hero">
                <div class="hero-content">
                    <h1>${this.localeController.t('hero.title')}</h1>
                    <p>${this.localeController.t('hero.subtitle')}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-section', HeroSection);


