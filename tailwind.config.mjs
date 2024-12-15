import { transformSlots } from 'astro/jsx-runtime';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'custom-pattern': 'url("/starry.gif")',
            },
            fontFamily:{
                'times': ['Times New Roman', 'serif'],
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            blue: '#1F51FF',
            green: '#00f92a',
            aqua: '#04caf4',
            fushia: '#f906d6',
            yellow: '#d1f60a'
        },
    },
    plugins: [],
}
