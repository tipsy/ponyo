import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import './hero-section.js';
import './features-section.js';
import './footer-section.js';

class AppRoot extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            box-sizing: border-box;
        }

        .content {
            flex: 1;
        }

        .container {
            max-width: var(--container-max-width, 1200px);
            margin: 0 auto;
            padding: var(--spacing-lg, 24px);
        }

        @media (max-width: 768px) {
            .container {
                padding: var(--spacing-md, 16px);
            }
        }
    `;

    render() {
        return html`
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

