import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                "teal-primary": "var(--color-teal-primary)",
                "teal-light": "var(--color-teal-light)",
                "teal-border": "var(--color-teal-border)",
            },
        },
    },
};
export default config;