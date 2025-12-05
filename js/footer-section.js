import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles } from './shared-styles.js';

class FooterSection extends LitElement {
    static styles = [
        typographyStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .footer {
                padding: var(--spacing-lg, 24px);
                background-color: var(--color-background-secondary, #f5f5f5);
                text-align: center;
            }

            p {
                font-size: var(--font-size-sm, 14px);
            }
        `
    ];

    get currentYear() {
        return new Date().getFullYear();
    }

    render() {
        return html`
            <div class="footer">
                <p>&copy; ${this.currentYear} Ponyo. Built with Lit.</p>
            </div>
        `;
    }
}

customElements.define('footer-section', FooterSection);

