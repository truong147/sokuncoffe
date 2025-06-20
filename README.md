# SokunCoffee

A React.js and TailwindCSS coffee shop website inspired by modern coffee house designs.

## Features

- **Home Page**: Hero section, product categories, featured products, and best sellers
- **Collections Page**: Product grid with filtering by category and price, sorting options
- **Product Details Page**: Product images, size selection, quantity selector, and related products

## Technologies Used

- React.js 18
- React Router v6 for navigation
- TailwindCSS for styling
- Responsive design for mobile and desktop

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sokuncoffee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Footer with links and contact info
│   └── ProductCard.js  # Reusable product card component
├── pages/
│   ├── Home.js         # Homepage with hero and featured products
│   ├── Collections.js  # All products page with filters
│   └── ProductDetails.js # Individual product page
├── data/
│   └── products.js     # Sample product data
├── App.js              # Main app component with routing
├── index.js            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Product grid with hover effects
- ✅ Category filtering
- ✅ Price range filtering
- ✅ Product sorting (name, price)
- ✅ Product detail page with image gallery
- ✅ Size and quantity selection
- ✅ Shopping cart icon with badge
- ✅ Footer with company information

## Future Enhancements

- Add shopping cart functionality
- Implement user authentication
- Add product search
- Connect to a backend API
- Add payment integration
- Implement order tracking

## License

This project is for educational purposes only.
