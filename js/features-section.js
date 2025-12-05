import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { typographyStyles } from './shared-styles.js';

class FeaturesSection extends LitElement {
    static styles = [
        typographyStyles,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--spacing-lg, 24px);
                padding: var(--spacing-xl, 32px) 0;
            }

            .feature {
                padding: var(--spacing-lg, 24px);
                background-color: var(--color-background, #ffffff);
                border-radius: 8px;
                text-align: center;
            }
        `
    ];

    render() {
        return html`
            <div class="features">
                <div class="feature">
                    <h3>Fast</h3>
                    <p>Built with modern web components</p>
                </div>
                <div class="feature">
                    <h3>Responsive</h3>
                    <p>Works on all devices</p>
                </div>
                <div class="feature">
                    <h3>Simple</h3>
                    <p>Clean and maintainable code</p>
                </div>
            </div>
        `;
    }
}

customElements.define('features-section', FeaturesSection);

