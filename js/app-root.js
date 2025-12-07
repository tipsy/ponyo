import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { animationStyles } from './shared-styles.js';
import { LocaleController } from './locales.js';
import './hero-section.js';
import './features-section.js';
import './footer-section.js';
import './language-selector.js';

class AppRoot extends LitElement {
    static styles = [
        animationStyles,
        css`
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                min-height: 100vh;
                box-sizing: border-box;
            }

            .header {
                position: sticky;
                top: 0;
                z-index: var(--z-sticky);
                padding: var(--spacing-md) var(--spacing-xl);
                background: var(--glass-background);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-bottom: 1px solid var(--glass-border);
                box-shadow: var(--shadow-sm);
            }

            .header-content {
                max-width: var(--container-max-width);
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .logo {
                font-size: 32px;
                line-height: 1;
                font-family: var(--font-family-logo);
                font-weight: 600;
                color: var(--color-text);
                text-decoration: none;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .content {
                flex: 1;
                animation: fadeIn 0.6s ease-out;
            }

            .container {
                max-width: var(--container-max-width);
                margin: 0 auto;
                padding: var(--spacing-lg);
            }

            @media (max-width: 768px) {
                .header {
                    padding: var(--spacing-md);
                }

                .container {
                    padding: var(--spacing-md);
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
            <header class="header">
                <div class="header-content">
                    <a href="/" class="logo">Ponyo</a>
                    <language-selector></language-selector>
                </div>
            </header>
            <div class="content">
                <hero-section></hero-section>
                <div class="container">
                    <features-section></features-section>
                </div>
            </div>
            <footer-section></footer-section>
        `;
    }
}

customElements.define('app-root', AppRoot);


