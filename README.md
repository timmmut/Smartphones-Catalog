# Smartphones-Catalog
SmartPhone Catalog Explorer is a web-based application that allows users to explore, filter, and sort a wide range of smartphones.

# SmartPhone Catalog Explorer

SmartPhone Catalog Explorer is a web-based application designed to help users explore and filter a variety of smartphones. It offers interactive sorting, filtering, and data presentation features for better product exploration.

## Features

- **Dynamic Data Handling:** Smartphones are dynamically rendered from a JSON dataset.
- **Filter by Brand:** Users can select brands such as Samsung, Apple, Xiaomi, and more.
- **Price Filtering:** Filter smartphones within a specific price range.
- **Sorting Options:** Sort products in ascending or descending order by price.
- **Product Details:** View specifications like screen size, RAM, ROM, and price for each phone.
- **Add to Cart:** Add products to a virtual cart with the click of a button.

## Project Structure

```plaintext
.
├── index.html    # Main HTML file for the application.
├── style.css     # CSS for styling the application layout.
├── phones.js     # JSON data containing smartphone details.
├── script.js     # Main JavaScript file for dynamic rendering and logic.
├── parsing.txt   # Parsing logic for generating data dynamically.
```

## Technologies Used

- **HTML5:** For structuring the web page.
- **CSS3:** For styling the application.
- **JavaScript:** For interactivity and dynamic content management.

## Getting Started

1. Clone or download the project files.
2. Open the `index.html` file in your web browser to view the application.
3. Explore filters, sorting, and the cart functionality.

## How to Use

1. **Filter Products:**
   - Use the checkbox to select specific brands.
   - Set a price range and click "Show products."

2. **Sort Products:**
   - Use the dropdown menu to sort products by price (ascending or descending).

3. **Add to Cart:**
   - Click the "Add to cart" button on any product to add it to your virtual cart.

## Preview

Here is how the application layout looks:

- **Filters:** Located on the left panel.
- **Product List:** Center panel showing dynamic product cards.
- **Cart:** Right panel displaying selected products.

## Future Enhancements

- Add a backend API for real-time data updates.
- Enhance mobile responsiveness.
- Introduce user authentication and wishlist features.
