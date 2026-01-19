# Elaine's Restaurant

A modern and elegant restaurant website built with vanilla JavaScript, DOM manipulation, and Webpack.

## About the Project

This is a Single Page Application (SPA) that presents information about Elaine's Restaurant. The website features three main pages: Home, Menu, and Contact, all navigable without page reloads.

## Features

- SPA Navigation - Smooth page transitions without reload
- Responsive Design - Adapts to all devices (desktop, tablet, mobile)
- DOM Manipulation - Dynamic element creation with vanilla JavaScript
- Modern Styling - Elegant design with gradients, glassmorphism, and animations
- Webpack Build - Optimized build system for production

## Technologies Used

- HTML5 - Semantic structure
- CSS3 - Advanced styling with animations and effects
- JavaScript (ES6+) - Logic and DOM manipulation
- Webpack 5 - Module bundler and build tool
- Babel - Code transpilation for compatibility

## How to Run the Project

### Prerequisites

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/restaurant-page.git
cd restaurant-page
```

2. Install dependencies:
```bash
npm install
```

### Running in Development

To start the development server with hot reload:

```bash
npm run dev
# or
npx webpack serve
```

The website will automatically open at http://localhost:8080

### Build for Production

To create optimized files for production:

```bash
npm run build
# or
npx webpack
```

Compiled files will be in the dist/ folder

## Pages

### Home
- Hero section with elegant welcome message
- Feature cards (Daily Menu, Expert Chefs, Fine Dining)
- Contact information and opening hours
- Smooth entry animations

### Menu
- Complete menu divided into categories:
  - Starters - Octopus Carpaccio, Tuna Tartare, Foie Gras
  - Main Courses - Grilled Sea Bass, Duck Magret, Beef Tenderloin, Truffle Linguini
  - Desserts - Chocolate Soufflé, Mille-feuille, Panna Cotta
- Card design with hover effects
- Highlighted prices

### Contact
- Complete contact information
- Clickable links for phone and email
- Informative icons
- Centered card design

## Design Features

- Color Palette:
  - Background: Dark blue gradients (#0f172a, #1e293b)
  - Accent: Gold (#fbbf24, #f59e0b)
  - Text: Light gray tones (#cbd5e1, #94a3b8)

- Effects:
  - Glassmorphism on cards
  - Fade-in animations
  - Smooth hover effects
  - Fluid transitions

- Typography:
  - Headings: Georgia (serif)
  - Body: Segoe UI (sans-serif)

## Main Dependencies

```json
{
  "webpack": "^5.104.1",
  "webpack-dev-server": "^5.x",
  "babel-loader": "@babel/preset-env",
  "css-loader": "style-loader",
  "html-webpack-plugin": "^5.x"
}
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (git checkout -b feature/NewFeature)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/NewFeature)
5. Open a Pull Request

## License

This project is under the MIT license. See the LICENSE file for more details.

## Author

Alírio Dinis
- Email: aliriodinis@gmail.com
- Location: Luanda, Angola

## Acknowledgments

- Design inspired by modern restaurants
- Icons: Native emojis
- Fonts: Google Fonts and system fonts

---

If this project was useful to you, consider giving it a star on the repository!

Developed in Luanda, Angola