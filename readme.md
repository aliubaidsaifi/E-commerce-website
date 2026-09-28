# 🛒 ProCart – MERN E-commerce Store

ProCart is a full-stack e-commerce web app for mobile accessories — chargers, data cables, and more — built with the MERN stack (MongoDB, Express, React, Node.js)

---

## ✨ Features

- 📦 Product catalog of mobile accessories (chargers, data cables, etc.)
- 🔍 Product detail pages with price, description, and stock info
- 🛍️ Shopping cart (add, remove, update quantity)
- 🔐 User registration and login with bcrypt password hashing
- 🌱 Database seeder to import or reset sample products and users
- ⚡ REST API built with Express and MongoDB
- 📱 Responsive UI built with React

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Security | bcrypt |
| Tooling | dotenv, nodemon, concurrently |

---

## 📁 Project Structure

```
E-commerce-website/
├── backend/        # Express API, Mongoose models, seeder
│   ├── index.js
│   └── seeder.js
├── frontend/       # React app
├── package.json    # Root scripts (runs both apps)
└── readme.md
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/aliubaidsaifi/E-commerce-website.git
cd E-commerce-website
```

### 2. Install dependencies
```bash
npm install
npm install --prefix frontend
```

### 3. Add environment variables
Create a `.env` file in the root folder:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Seed the database (optional)
```bash
npm run data:import    # Import sample products and users
npm run data:destroy   # Remove all data
```

### 5. Start the app
```bash
npm run dev
```
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run backend and frontend together |
| `npm run server` | Run backend only (with nodemon) |
| `npm run client` | Run frontend only |
| `npm start` | Run backend in production mode |
| `npm run data:import` | Seed the database |
| `npm run data:destroy` | Clear the database |

---



## 🔮 Roadmap
- [ ] JWT-based authentication
- [ ] Checkout with Razorpay / Stripe
- [ ] Order history and admin dashboard
- [ ] Product search and category filters

---

## 👤 Author

**Mohd Ubaid Ali**  
MERN Stack & DevOps Developer  
[GitHub](https://github.com/aliubaidsaifi) · [LinkedIn]([your-linkedin-link](https://www.linkedin.com/in/ubaidsaifi/))

---

## 📄 License

MIT
