# Product Store MERN

A full-stack product management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, read, update, and delete products with a modern and responsive user interface.

Inspired by: https://www.udemy.com/course/the-web-dev-bootcamp/

## 🚀 Features

- **CRUD Operations**: Create, read, update, and delete products
- **Responsive Design**: Modern UI built with Chakra UI
- **Real-time Updates**: State management with Zustand
- **Dark/Light Mode**: Toggle between themes
- **Form Validation**: Client-side and server-side validation
- **Image Support**: Product images via URL
- **Modern Stack**: Latest versions of React, Node.js, and MongoDB

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **Zustand** - State management
- **React Router DOM** - Routing
- **Vite** - Build tool
- **Framer Motion** - Animations

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Docker** (optional, for running MongoDB in container)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd product-store-mern
```

### 2. Set up MongoDB (using Docker)

```bash
docker-compose up -d
```

This will start a MongoDB instance on port 27017 with:

- Username: `root`
- Password: `example`

### 3. Install dependencies

**Root directory (Backend):**

```bash
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### 4. Environment Configuration

Create a `.env` file in the root directory (already configured):

```env
MONGO_URI=mongodb://root:example@localhost:27017/products?authSource=admin
PORT=5000
```

### 5. Start the application

**Backend (from root directory):**

```bash
npm run dev
```

**Frontend (in a new terminal):**

```bash
cd frontend
npm run dev
```

The application will be available at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🏗️ Project Structure

```
product-store-mern/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── models/
│   │   └── product.model.js   # Product schema
│   ├── routes/
│   │   └── product.route.js   # API routes
│   └── server.js              # Express server
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/            # Page components
│   │   ├── store/            # Zustand store
│   │   ├── types/            # TypeScript types
│   │   └── main.tsx          # App entry point
│   ├── public/               # Static assets
│   └── vite.config.ts        # Vite configuration
├── docker-compose.yml        # MongoDB Docker setup
├── .env                      # Environment variables
└── package.json             # Backend dependencies
```

## 🔌 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| DELETE | `/api/products/:id` | Delete a product     |

### Example API Usage

**Create a product:**

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "price": 29.99,
    "image": "https://example.com/image.jpg"
  }'
```

## 🎨 Screenshots

### Home Page

- Display all products in a responsive grid
- Search and filter functionality
- Add new product button

### Create Product

- Form with validation
- Image URL input
- Price and name fields

### Product Management

- Edit existing products
- Delete products with confirmation
- Real-time updates

## 🔧 Development

### Available Scripts

**Backend:**

- `npm run dev` - Start development server with nodemon

**Frontend:**

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** compatible configuration

## 🐳 Docker Support

The project includes Docker support for MongoDB:

```bash
# Start MongoDB container
docker-compose up -d

# Stop MongoDB container
docker-compose down

# View logs
docker-compose logs mongo
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the component library
- [MongoDB](https://www.mongodb.com/) for the database
- [Vite](https://vitejs.dev/) for the build tool
- [Zustand](https://github.com/pmndrs/zustand) for state management

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Happy coding! 🚀**
