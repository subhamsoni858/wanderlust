# 🌍 Wanderlust

> A full-stack Airbnb-inspired travel listing platform — browse, create, review, and map vacation rentals worldwide. Built with the MEN stack (MongoDB, Express, Node.js) and server-rendered EJS templates.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-wanderlust--fbd8.onrender.com-blue?style=for-the-badge)](https://wanderlust-fbd8.onrender.com)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js_5-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Mapbox](https://img.shields.io/badge/Mapbox_GL-000000?style=for-the-badge&logo=mapbox&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## ✨ Features

### 🏠 Listing Management (Full CRUD)
- **Browse** — Responsive card-grid of all properties with images, prices, and locations
- **Create** — Add new listings with image upload (Cloudinary), geocoded location, and pricing
- **Edit** — Update listing details with image preview and replacement
- **Delete** — Remove listings with cascade deletion of all associated reviews

### 🗺️ Interactive Maps
- **Geocoding** — Locations are automatically geocoded via Mapbox SDK on listing creation
- **Show Page Map** — Each listing displays an interactive Mapbox GL map with a pin at the property location
- **GeoJSON Storage** — Coordinates stored as GeoJSON `Point` geometry in MongoDB

### 🔐 Authentication & Authorization
- **User Registration & Login** — Passport.js with passport-local-mongoose (salted & hashed passwords)
- **Session Persistence** — Sessions stored in MongoDB Atlas via connect-mongo (survives server restarts)
- **5 Custom Middlewares**:
  - `isLoggedIn` — Protects routes requiring authentication
  - `isOwner` — Only listing owners can edit/delete their listings
  - `isReviewAuthor` — Only review authors can delete their reviews
  - `saveRedirectUrl` — Preserves intended destination across login redirects
  - `validateListing` / `validateReview` — Server-side Joi schema validation

### ⭐ Review System
- **Star Ratings** — 1–5 star ratings via Starability CSS (accessible, animated)
- **Comments** — Text reviews displayed with author attribution
- **Authorization** — Only the review author sees the delete button
- **Cascade Delete** — Reviews auto-deleted when parent listing is removed (Mongoose post-delete hook)

### 📸 Image Upload
- **Cloudinary Integration** — Images uploaded via Multer + multer-storage-cloudinary
- **Cloud Storage** — No local file storage; images served from Cloudinary CDN
- **Edit Preview** — Original image shown as thumbnail on the edit form (with Cloudinary transforms)

### 🛡️ Validation & Error Handling
- **Server-side** — Joi schema validation for listings and reviews (price min:0, required fields)
- **Client-side** — Bootstrap 5 form validation with instant feedback
- **Custom Error Class** — `ExpressError` with status codes for structured HTTP errors
- **Async Wrapper** — `wrapAsync` eliminates repetitive try-catch blocks
- **404 Handler** — Graceful error page for unmatched routes
- **Null Guards** — Middleware checks prevent crashes on deleted/missing resources

### 🎨 UI / UX
- **Responsive** — Bootstrap 5 grid with mobile-friendly navbar
- **Modern Typography** — Plus Jakarta Sans via Google Fonts
- **Interactive Cards** — Hover effects with shadow transitions
- **Flash Messages** — Success/error notifications after actions
- **Consistent Layout** — EJS-Mate boilerplate with shared navbar and footer
- **Category Filters** — Visual filter icons (Trending, Rooms, Mountains, etc.)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js 22 |
| **Framework** | Express.js 5 |
| **Database** | MongoDB Atlas + Mongoose 7 |
| **Views** | EJS + EJS-Mate (layouts) |
| **Styling** | Bootstrap 5 + Custom CSS |
| **Auth** | Passport.js + passport-local-mongoose |
| **Sessions** | express-session + connect-mongo |
| **Validation** | Joi |
| **Maps** | Mapbox GL JS + @mapbox/mapbox-sdk (geocoding) |
| **Image Upload** | Multer + Cloudinary + multer-storage-cloudinary |
| **Deployment** | Render (server) + MongoDB Atlas (database) |
| **Icons** | Font Awesome 7 |
| **Fonts** | Plus Jakarta Sans (Google Fonts) |
| **Ratings** | Starability CSS |

---

## 📂 Project Structure

```
wanderlust/
├── app.js                     # Express app — middleware, sessions, routes, error handlers
├── middleware.js               # 5 custom middlewares (auth, ownership, validation)
├── schema.js                  # Joi validation schemas
├── cloudConfig.js             # Cloudinary + Multer storage configuration
├── package.json
├── .env                       # Environment variables (not tracked)
├── .gitignore
│
├── models/
│   ├── listing.js             # Listing schema (title, image, price, geometry, owner, reviews)
│   ├── review.js              # Review schema (rating, comment, author, createdAt)
│   └── user.js                # User schema (passport-local-mongoose plugin)
│
├── controller/
│   ├── listings.js            # Listing CRUD + geocoding logic
│   ├── reviews.js             # Review create/delete logic
│   └── users.js               # Signup, login, logout handlers
│
├── routes/
│   ├── listing.js             # RESTful listing routes with middleware chains
│   ├── review.js              # Nested review routes (/listings/:id/reviews)
│   └── user.js                # Auth routes (/signup, /login, /logout)
│
├── utils/
│   ├── ExpressError.js        # Custom error class with statusCode
│   └── wrapAsync.js           # Async error handling wrapper
│
├── init/
│   ├── data.js                # 29 sample listings (global destinations)
│   └── index.js               # Seed script — geocodes locations + creates admin user
│
├── views/
│   ├── error.ejs              # Error page template
│   ├── layouts/
│   │   └── boilerplate.ejs    # Main HTML layout (head, scripts, navbar, footer)
│   ├── includes/
│   │   ├── navbar.ejs         # Responsive navbar with search + auth links
│   │   ├── footer.ejs         # Footer with social links
│   │   └── flash.ejs          # Flash message alerts
│   ├── listings/
│   │   ├── index.ejs          # All listings grid with category filters
│   │   ├── show.ejs           # Listing detail + reviews + map
│   │   ├── new.ejs            # Create listing form (with image upload)
│   │   └── edit.ejs           # Edit listing form (with image preview)
│   └── users/
│       ├── login.ejs          # Login form
│       └── signup.ejs         # Registration form
│
└── public/
    ├── css/
    │   ├── style.css          # Custom styles (cards, forms, layout)
    │   └── rating.css         # Starability star rating styles
    └── js/
        ├── script.js          # Client-side form validation
        └── map.js             # Mapbox GL map initialization
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas connection string)
- [Cloudinary Account](https://cloudinary.com/) (free tier)
- [Mapbox Account](https://mapbox.com/) (free tier)

### Environment Variables

Create a `.env` file in the project root:

```env
# Cloudinary (image uploads)
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

# Mapbox (geocoding + maps)
MAP_TOKEN=your_mapbox_public_token

# MongoDB Atlas (production)
ATLASDB_URL=mongodb+srv://user:pass@cluster.mongodb.net/wanderlust

# Session secret
SECRET=your_session_secret_here
```

### Installation

```bash
# Clone the repository
git clone https://github.com/subhamsoni858/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Seed the database (geocodes 29 locations + creates admin user)
node init/index.js

# Start the development server
node app.js
```

The app runs at **http://localhost:8080**

### Seed User Credentials

After seeding, you can log in with:
- **Username:** `admin`
- **Password:** `admin123`

All 29 seed listings are owned by this user.

---

## 🌐 Deployment

The app is deployed and live:

| Service | Purpose |
|---|---|
| **[Render](https://render.com)** | Node.js server hosting |
| **[MongoDB Atlas](https://www.mongodb.com/atlas)** | Cloud database |
| **[Cloudinary](https://cloudinary.com)** | Image CDN |
| **[Mapbox](https://mapbox.com)** | Geocoding + interactive maps |

### Render Configuration

- **Build Command:** `npm install`
- **Start Command:** `node app.js`
- **Environment Variables:** All `.env` variables set in Render dashboard
- **Atlas IP Whitelist:** `0.0.0.0/0` (allows Render's dynamic IPs)

---

## 🏗️ Architecture

```
┌─────────────┐     ┌──────────────────┐     ┌──────────────┐
│   Browser   │────▶│   Express.js 5   │────▶│ MongoDB Atlas│
│  (EJS + BS5)│◀────│  (MVC + Passport)│◀────│  (Mongoose)  │
└─────────────┘     └──────┬───────────┘     └──────────────┘
                           │
                    ┌──────┴───────┐
                    │              │
              ┌─────▼─────┐ ┌─────▼──────┐
              │ Cloudinary │ │  Mapbox SDK│
              │ (Images)   │ │ (Geocoding)│
              └───────────┘ └────────────┘
```

**Key Design Decisions:**
- **Server-Side Rendering (SSR)** — EJS templates rendered on the server, no separate frontend build. Simpler deployment (single service), better SEO, faster initial load.
- **MVC Architecture** — Models (`models/`), Views (`views/`), Controllers (`controller/`) with route files in `routes/` for clean separation.
- **Middleware Chain** — Each route has a clear middleware pipeline: `isLoggedIn → isOwner → upload → validate → controller`.
- **GeoJSON** — Listing coordinates stored as standard GeoJSON for future spatial queries and cluster maps.

---

## 📊 Project Stats

| Metric | Value |
|---|---|
| **Total Source Files** | ~30 |
| **JavaScript** | ~1,000 lines |
| **EJS Templates** | ~630 lines |
| **CSS** | ~310 lines |
| **Seed Listings** | 29 global destinations |
| **Custom Middlewares** | 5 |
| **External APIs** | 3 (Cloudinary, Mapbox, MongoDB Atlas) |
| **Dependencies** | 17 production |

---

## 🗺️ Roadmap

- [ ] Search by title / location
- [ ] Filter by price range / country
- [ ] Pagination on listings index
- [ ] Cluster map on index page (all pins)
- [ ] Category-based filtering (backend)
- [ ] Image deletion from Cloudinary on listing delete
- [ ] Unit tests (Jest / Mocha)

---

## 👤 Author

**Subham Soni**
- GitHub: [@subhamsoni858](https://github.com/subhamsoni858)

---

## 📝 License

This project is licensed under the **ISC License**.
