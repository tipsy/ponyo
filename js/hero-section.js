import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles } from './shared-styles.js';

class HeroSection extends LitElement {
    static styles = [
        typographyStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .hero {
                text-align: center;
                padding: var(--spacing-xl, 32px) var(--spacing-lg, 24px);
                background-color: var(--color-background-secondary, #f5f5f5);
            }

            p {
                font-size: var(--font-size-lg, 18px);
            }
        `
    ];

    render() {
        return html`
            <div class="hero">
                <h1>Welcome to Ponyo</h1>
                <p>A modern web experience built with Lit</p>
            </div>
        `;
    }
}

customElements.define('hero-section', HeroSection);

