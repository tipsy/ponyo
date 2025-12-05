import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// Typography styles that can be imported and reused
export const typographyStyles = css`
    h1 {
        margin: 0 0 var(--spacing-md, 16px) 0;
        font-size: var(--font-size-2xl, 32px);
        color: var(--color-text, #1a1a1a);
        font-weight: 600;
    }

    h2 {
        margin: 0 0 var(--spacing-sm, 8px) 0;
        font-size: var(--font-size-xl, 24px);
        color: var(--color-text, #1a1a1a);
        font-weight: 600;
    }

    h3 {
        margin: 0 0 var(--spacing-sm, 8px) 0;
        font-size: var(--font-size-lg, 18px);
        color: var(--color-text, #1a1a1a);
        font-weight: 600;
    }

    p {
        margin: 0;
        font-size: var(--font-size-base, 16px);
        color: var(--color-text-secondary, #666);
        line-height: var(--line-height-base, 1.5);
    }
`;

// Layout styles
export const layoutStyles = css`
    .flex {
        display: flex;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .gap-sm {
        gap: var(--spacing-sm, 8px);
    }

    .gap-md {
        gap: var(--spacing-md, 16px);
    }

    .gap-lg {
        gap: var(--spacing-lg, 24px);
    }
`;

