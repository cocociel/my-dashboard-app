import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        meteor: 'meteor 16s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': {
            transform: 'rotate(-45deg) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(-45deg) translateX(-1500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
