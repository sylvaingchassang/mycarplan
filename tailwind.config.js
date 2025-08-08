// tailwind.config.js
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.md',
    './*.html'
  ],
  theme: {
    // Add this block to configure the container plugin:
    container: {
      center: true,      // always center your container
      padding: '2rem',   // default horizontal padding (matches your px-4)
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    extend: {
      colors: {
        'mpa-orange': '#ff726f',
        'mpa-teal': '#76dbd1',
        'mpa-coral':  '#ff9e80',  // new coral accent
        'mpa-mint':   '#92f2d7',  // new mint accent
        'mpa-slate':  '#6B7280',  // slate grey
        'mpa-blue':   '#3B82F6',  // clean blue
        'mpa-charcoal':   '#1F2937',
        'mpa-gray-light': '#E5E7EB',
        'mpa-cream':      '#FEFAF7',
        'mpa-yellow':     '#FCD34D',
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}
