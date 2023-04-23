export default {
  content: [
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        'adn-background': '#f7f0f0',
        'adn-text': '#2a272a',
        'adn-hilite': '#b677fa',
        'adn-accent': '#66ced6',
        'adn-accent-dark': '#048ba8',
        'adn-white': '#fcfcfc',
        'adn-gray': '#595359',
        'adn-gray-light': '#ada1ad',
        'adn-border': '#c1a6c1'
      }
    }
  }
}
