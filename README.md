# Volunteer Management Website

A user-friendly platform for managing volunteer activities where users can post volunteer needs, update/delete their posts, and join as volunteers in others' posts. This website ensures smooth communication between organizers and volunteers with a responsive design and secure backend.

---

## 🌐 Live Website
[Live Demo Link](https://your-live-site-link.com)

---

## 🎯 Purpose
The purpose of this project is to create a volunteer management platform where:
- Organizers can post volunteer needs with full details.
- Volunteers can request to join events.
- Both parties can manage their posts and requests efficiently.
- The platform works seamlessly on mobile, tablet, and desktop.

---

## ✨ Key Features

### 🔹 Public Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Eye-catching homepage with slider & volunteer need highlights
- View all volunteer need posts with search functionality

### 🔹 Authentication
- Email & Password authentication (Firebase Auth)
- Google login support
- Password validation (Uppercase, Lowercase, Minimum length 6)
- Conditional navbar buttons (Login / Logout)
- Profile image with hover name display

### 🔹 Private Routes
- **Add Volunteer Need Post** – Form to post volunteer requirements
- **Manage My Posts** – View, update, and delete own volunteer posts
- **My Volunteer Requests** – View and cancel own volunteering requests
- **Volunteer Need Details** – See full post details and "Be a Volunteer" button

### 🔹 CRUD Functionalities
- Add new volunteer need post
- Update post data
- Delete post with confirmation
- Volunteer request creation
- Cancel volunteer request with confirmation
- Real-time volunteer count update using `$inc` in MongoDB

### 🔹 Extra Features
- Dynamic page titles
- 404 Not Found page
- Loading spinner for data fetching
- SweetAlert/Toast notifications for all operations
- Secure environment variables for Firebase & MongoDB

---

## 🛠️ Technologies Used

### Frontend
- **React** (Vite)
- **React Router**
- **Firebase Authentication**
- **Tailwind CSS** + **DaisyUI**
- **React Hook Form**
- **React Datepicker**
- **Framer Motion** (Animation)
- **SweetAlert2 / React Hot Toast**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose or Native Driver)
- **Dotenv** (for environment variables)
- **Cors** (for handling cross-origin requests)

---

## 📦 NPM Packages Used

Frontend:
- react
- react-router
- firebase
- tailwindcss
- daisyui
- react-hook-form
- react-hot-toast
- sweetalert2
- framer-motion
- react-datepicker

Backend:
- express
- mongodb
- cors
- dotenv


## Author
Shyama saha

