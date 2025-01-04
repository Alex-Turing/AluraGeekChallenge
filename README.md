# Product Manager

## Overview

The Product Manager application is a web-based tool that allows users to manage products dynamically. Users can:
- Add new products with a name, price, and image.
- View all added products in a responsive card layout.
- Delete products using a trash icon button.

This project demonstrates essential concepts of asynchronous operations, event handling, and DOM manipulation in JavaScript.

## Features

- **Add Products**: Users can submit a form to add new products with specified details.
- **Dynamic Product Cards**: Products are displayed as interactive cards.
- **Delete Products**: Users can remove a product by clicking the trash icon on its card.
- **Responsive Design**: Works seamlessly across various screen sizes.

## Project Structure

```plaintext
Alura/
|-- assets/
|   |-- delete.png    # Trash icon image
|   |-- banner.png    # Banner image for README
|-- APIConnection.js   # Handles API calls for fetching, adding, and deleting products
|-- main.js            # Main application logic
index.html             # HTML structure of the application
styles.css             # Stylesheet for the application
```

## Demo

![Demo GIF](./assets/demo.gif)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-manager
   ```
3. Open `index.html` in your browser to view the application.

## API Details

### Endpoints
- **GET /products**: Retrieves the list of products.
- **POST /products**: Adds a new product.
- **DELETE /products/:id**: Deletes a product by its ID.

## Technologies Used

- **HTML**: Markup structure of the application.
- **CSS**: Styling for layout and design.
- **JavaScript**: Application logic, DOM manipulation, and API integration.
- **Fetch API**: For making asynchronous requests to the server.

## How to Use

1. **Add a Product**:
   - Fill out the form fields: `Name`, `Price`, and `Image URL`.
   - Click the "Add Product" button.

2. **View Products**:
   - Newly added products will appear as cards in the product list.

3. **Delete a Product**:
   - Click the trash icon on the desired product card.
   - The product will be removed from the UI and the database.

## Screenshots

### Main Interface
![Main Interface](./assets/main-interface.png)

### Adding a Product
![Adding a Product](./assets/add-product.png)

### Deleting a Product
![Deleting a Product](./assets/delete-product.png)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Author

**Alexander Hernandez**  
![GitHub](https://img.shields.io/badge/GitHub-@alexhernandez-blue)

---

Feel free to explore, use, and contribute to this project!

