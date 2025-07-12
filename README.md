
# 🎓 College Booking Web Application

This is a full-stack MERN web application that allows general users to explore colleges, book admission, view college details, submit reviews, and manage their profile — all through a clean, user-friendly interface.

---

## 🚀 Features

- 🔍 Search for colleges by name
- 🏫 View all college information, ratings, and events
- 📝 Apply for college admission through a structured form
- 📋 Save admission data and view it on "My College" page
- 🌟 Add ratings and reviews for colleges
- 🧠 Explore research papers and photo galleries
- 🔐 Authentication using Email/Password, Google, and Social login
- 🔁 Password reset functionality
- 👤 View and edit user profile
- ❌ 404 page for invalid routes
- 📱 Fully responsive (mobile-first)

---

## 🧑‍💻 Tech Stack

| Frontend      | Backend       | Styling        | Deployment  |
|---------------|---------------|----------------|-------------|
| Next.js       | Express.js    | Tailwind CSS   | Vercel / Netlify |
| React Hook Form | MongoDB Atlas | DaisyUI / Custom | Firebase (Auth) |
| Axios / React Query | Node.js       |                |             |

---

## 📂 Project Structure

```bash
├── app/
│   ├── page.js                 # Home page
│   ├── colleges/               # All colleges route
│   ├── admission/              # Admission form
│   ├── my-college/             # User’s college data
│   ├── profile/                # User profile
│   └── api/                    # Server API routes
├── components/                 # Shared components (Navbar, Footer, etc.)
├── lib/                        # Database and auth utilities
├── public/assets/             # Images
├── styles/                    # Global styling
└── README.md
```

---

## 📸 Key Pages and Features

### 🔹 Home Page
- Contains:
  - College search field
  - 3 featured college cards
  - College image gallery
  - Research paper links
  - Reviews section

### 🔹 Colleges Page
- Displays 5–6 college cards with:
  - Image, Name, Rating, Research Count, Admission Date
  - "Details" button to view extended info

### 🔹 Admission Page
- Allows filling a form:
  - Candidate Name, Subject, Email, Phone, Address, DOB, Image
  - On submission, data is saved to the "My College" route

### 🔹 My College Page
- Displays submitted admission info
- Allows user to add a review with a rating

### 🔹 Profile Page
- Displays user info (Name, Email, University, Address)
- Editable via "Edit" and "Save" button

### 🔹 Authentication
- Register/Login with:
  - Email/Password
  - Google & Social Media (if configured)
- Password reset supported
- Protected Routes:
  - College details and review submission restricted for unauthenticated users

### 🔹 404 Page
- Creative "Page Not Found" route with navigation option

---

## 🛠 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/bornilshopno/admission-aid_nextjs
   cd college-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root and add credentials collect from me

 

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Backend (if separate)**
   ```bash
   cd server
   npm install
   npm run dev
   ```

---

## 📦 Deployment

- Frontend: Deployed to **Vercel**
- Authentication: Managed via **Firebase Auth**
- Database: **MongoDB Atlas**

---

## 🌟 Future Improvements (Optional Ideas)

- Admin panel to manage colleges, events, and users
- Pagination and filtering for college lists
- Chat support or FAQs
- Notifications on admission confirmation
- Review moderation system

---

## 🤝 License

This project is for educational and job evaluation purposes. You are free to customize and expand it.

---

## 🙋‍♂️ Author

Md Ashraf Hossain (Manna)  
Full-Stack Web Developer  
📞 +880 1911199697  
✉️ optimisticashraf@gmail.com  
🌐 [Portfolio Website](https://ashraf-hossain.netlify.app/)  
🔗 [GitHub](https://github.com/bornilshopno)
