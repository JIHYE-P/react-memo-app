const isDev = process.env.NODE_ENV;
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.html', './src/**/*.{js,jsx}', './src/**/*.tsx', './src/**/*.ts'],
        }),
      ],
    },
  },
}
