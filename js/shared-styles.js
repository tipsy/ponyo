import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// Typography styles that can be imported and reused
export const typographyStyles = css`
    h1 {
        margin: 0 0 var(--spacing-lg) 0;
        font-size: var(--font-size-5xl);
        color: var(--color-text);
        font-weight: var(--font-weight-extrabold);
        line-height: var(--line-height-tight);
        letter-spacing: -0.02em;
    }

    h2 {
        margin: 0 0 var(--spacing-md) 0;
        font-size: var(--font-size-3xl);
        color: var(--color-text);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
    }

    h3 {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-xl);
        color: var(--color-text);
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-base);
    }

    p {
        margin: 0;
        font-size: var(--font-size-base);
        color: var(--color-text-secondary);
        line-height: var(--line-height-relaxed);
    }
`;

// Animation utilities
export const animationStyles = css`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fadeIn var(--transition-slow) ease-out;
    }

    .animate-slide-up {
        animation: slideUp var(--transition-slow) ease-out;
    }

    .animate-slide-down {
        animation: slideDown var(--transition-slow) ease-out;
    }

    /* Staggered animations */
    .stagger-1 { animation-delay: 0.1s; }
    .stagger-2 { animation-delay: 0.2s; }
    .stagger-3 { animation-delay: 0.3s; }
`;

