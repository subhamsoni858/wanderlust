# 🌍 Wanderlust

> A full-stack travel listing platform where users can discover, create, edit, and review vacation rental properties — inspired by Airbnb.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## ✨ Key Features

### 🏠 Listing Management
- **Browse Listings** — View all available rental properties in a responsive card-grid layout with images and pricing.
- **Create Listings** — Add new properties with title, description, image URL, price, location, and country.
- **Edit Listings** — Update any listing's details through a pre-filled edit form.
- **Delete Listings** — Remove listings along with all associated reviews (cascade delete).

### ⭐ Review System
- **Add Reviews** — Leave ratings (1–5 stars via range slider) and comments on any listing.
- **View Reviews** — All reviews are displayed on the listing's detail page.
- **Delete Reviews** — Remove individual reviews; references are automatically cleaned from the parent listing.

### 🛡️ Data Validation
- **Server-side Validation** — Joi schema validation for both listings and reviews ensures data integrity before database writes.
- **Client-side Validation** — Bootstrap's form validation provides instant feedback to users.
- **Default Image Handling** — If no image URL is provided, a high-quality default image is automatically applied.

### 🎨 UI / UX
- **Responsive Design** — Built with Bootstrap 5 for seamless display across desktop, tablet, and mobile.
- **Modern Typography** — Uses the *Plus Jakarta Sans* Google Font for a clean, professional look.
- **Interactive Cards** — Hover effects on listing cards for an engaging browsing experience.
- **Consistent Layout** — EJS-Mate powered boilerplate with shared navbar and footer across all pages.
- **Font Awesome Icons** — Beautiful icons throughout the interface.

### ⚙️ Architecture & Error Handling
- **MVC Pattern** — Clean separation with Models, Views, and route handlers.
- **Custom Error Class** — `ExpressError` for structured HTTP error responses with status codes.
- **Async Error Wrapper** — `wrapAsync` utility eliminates repetitive try-catch blocks in async route handlers.
- **404 Handling** — Graceful "Page Not Found" error page for unmatched routes.
- **Centralized Error Middleware** — All errors render a user-friendly error page.

### 🗄️ Database
- **MongoDB with Mongoose** — Robust data modeling with schemas, defaults, and custom setters.
- **Data Seeding** — Pre-built seed script (`init/index.js`) to populate the database with sample listings for development.
- **Referential Integrity** — Post-delete middleware automatically cleans up orphaned reviews when a listing is removed.

---

## 🛠️ Tech Stack

| Layer       | Technology                           |
|-------------|--------------------------------------|
| **Runtime** | Node.js                              |
| **Server**  | Express.js 5                         |
| **Database**| MongoDB + Mongoose                   |
| **Views**   | EJS + EJS-Mate (layouts)             |
| **Styling** | Bootstrap 5 + Custom CSS             |
| **Validation** | Joi                              |
| **Icons**   | Font Awesome 7                       |
| **Fonts**   | Plus Jakarta Sans (Google Fonts)     |

---

## 📂 Project Structure

```
wanderlust/
├── app.js                  # Main Express application & route definitions
├── schema.js               # Joi validation schemas
├── package.json            # Dependencies & project metadata
│
├── models/
│   ├── listing.js          # Mongoose Listing model
│   └── review.js           # Mongoose Review model
│
├── utils/
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error handling wrapper
│
├── init/
│   ├── data.js             # Sample seed data
│   └── index.js            # Database seeder script
│
├── views/
│   ├── error.ejs           # Error page template
│   ├── layouts/
│   │   └── boilerplate.ejs # Main HTML layout
│   ├── includes/
│   │   ├── navbar.ejs      # Navigation bar
│   │   └── footer.ejs      # Footer
│   └── listings/
│       ├── index.ejs       # All listings page
│       ├── show.ejs        # Single listing detail
│       ├── new.ejs         # Create listing form
│       └── edit.ejs        # Edit listing form
│
└── public/
    ├── css/
    │   └── style.css       # Custom styles
    └── js/
        └── script.js       # Client-side scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (running locally on port 27017)

### Installation

```bash
# Clone the repository
git clone https://github.com/subhamsoni858/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Seed the database with sample data
node init/index.js

# Start the application
node app.js
```

The app will be running at **http://localhost:8080**

---

## 📅 Project Timeline

```
📌 MILESTONE TRACKER
═══════════════════════════════════════════════════════════════

Phase 1 — Foundation & Setup                         ✅ DONE
├─ Project initialization & dependency setup
├─ MongoDB connection & Mongoose configuration
└─ Express server setup with EJS templating

Phase 2 — Core CRUD Operations                       ✅ DONE
├─ Listing model with image defaults
├─ Index, Show, New, Edit, Delete routes
└─ RESTful route architecture

Phase 3 — Reviews & Relationships                    ✅ DONE
├─ Review model with ratings & comments
├─ Nested review routes under listings
└─ Cascade delete (listing → reviews)

Phase 4 — Validation & Error Handling                ✅ DONE
├─ Joi schema validation (server-side)
├─ Bootstrap form validation (client-side)
├─ Custom ExpressError class & middleware

Phase 5 — UI/UX Polish                               ✅ DONE
├─ Bootstrap 5 responsive layout
├─ Custom CSS with card hover effects
├─ Navbar, footer, and boilerplate layout
└─ Google Fonts integration

Phase 6 — Final Testing & Deployment              🔄 IN PROGRESS
├─ Final bug fixes & code cleanup
├─ Documentation & README
├─ Deployment preparation
└─ 🎯 Target Completion: May 20, 2026
    └─ 🚀 Expected Deployment: May 20, 2026

═══════════════════════════════════════════════════════════════
```

---

## 📋 Upcoming (Planned for Deployment)

- [ ] User Authentication (Sign Up / Login / Logout)
- [ ] Authorization (only owners can edit/delete)
- [ ] Flash Messages for user feedback
- [ ] Map Integration (Mapbox/Leaflet)
- [ ] Image Upload via Cloudinary
- [ ] Search & Filter functionality
- [ ] Deployment to cloud platform

---

## 👤 Author

**Subham Soni**

---

## 📝 License

This project is licensed under the **ISC License**.
