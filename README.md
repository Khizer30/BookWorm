# BookWorm

BookWorm is a fully functional e-commerce bookstore designed to provide a seamless shopping experience for book enthusiasts. It features a modern and responsive design, built with cutting-edge
technologies to ensure performance and scalability.

## Features

- **User Authentication**: Secure login and registration system using Firebase Authentication.
- **Product Listings**: Browse a wide range of books with detailed descriptions, prices, and tags.
- **Search Functionality**: Search for books by title, author, or tags.
- **Shopping Cart**: Add books to your cart, view the total price, and manage your selections.
- **Checkout System**: Integrated with Stripe for secure and reliable payment processing.
- **Responsive Design**: Optimized for all devices, ensuring a great user experience on desktop, tablet, and mobile.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), [React.js](https://reactjs.org), [TailwindCSS](https://tailwindcss.com)
- **Backend**: [MongoDB](https://www.mongodb.com), [Firebase Authentication](https://firebase.google.com/products/auth)
- **Payment Integration**: [Stripe](https://stripe.com)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Khizer30/BookWorm.git

   cd BookWorm
   ```

2. Install Dependendencies

```bash
npm install
```

3. Set up environment vairalbes in the `.env` file.

```bash
DB=<your_mongodb_connection_string>
NEXT_PUBLIC_FIREBASE=<your_firebase_api_key>
STRIPE_SK=<your_stripe_secret_key>
NEXT_PUBLIC_STRIPE_PK=<your_stripe_public_key>
```

4. Run the development server:

```bash
npm run dev
```

## License 📄

This is an open-source project. Feel free to use it!
