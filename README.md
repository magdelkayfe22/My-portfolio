# Cybersecurity Portfolio Website

Welcome to your cybersecurity student portfolio! This site is built with React and is designed to showcase your skills, projects, certifications, and resume to recruiters and fellow coders.

---

## 🖥️ What is This Project?
This is a personal website template for cybersecurity students or professionals. It features:
- A techy, dark-themed design
- Home intro banner
- About Me section with a bio and headshot
- Projects page for CTF writeups and Python tools
- Certifications section with badge icons
- Resume download link
- Contact form linking to GitHub and LinkedIn

---

## 📁 Project Structure & Key Files

- **/public/**
  - `index.html` — The main HTML file React injects your app into.
  - `resume.pdf` — (Optional) Place your resume here for download.

- **/src/App.js** — Main app component. Handles navigation and routing between pages.
- **/src/App.css** — Global styles for the whole site (dark theme, layout, etc).
- **/src/assets/**
  - `default-user.svg` — Placeholder headshot image for About Me.
- **/src/components/**
  - `Home.js` / `Home.css` — The homepage banner and intro.
  - `About.js` / `About.css` — Bio and headshot section.
  - `Projects.js` / `Projects.css` — List of projects and writeups.
  - `Certifications.js` / `Certifications.css` — List of certifications with icons.
  - `Resume.js` / `Resume.css` — Resume download section.
  - `Contact.js` / `Contact.css` — Contact form and social links.

- **package.json** — Lists dependencies (like React) and scripts to run the app.

---

## ▶️ How to Run the Project
1. Open a terminal and navigate to your project folder:
   ```sh
   cd /Users/magd04/Workshop_Windsurf/watchlist-organizr
   ```
2. Start the development server:
   ```sh
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ How to Edit Content

- **Your Name & Bio:**
  - Edit `src/components/Home.js` and `src/components/About.js`.
- **Headshot:**
  - Replace `src/assets/default-user.svg` with your own image, or update the `<img src=...>` in `About.js`.
- **Projects:**
  - Edit or add project cards in `src/components/Projects.js`.
- **Certifications:**
  - Update the list and badge images in `src/components/Certifications.js`.
- **Resume:**
  - Replace `public/resume.pdf` with your own resume file.
- **Contact Info:**
  - Update your GitHub and LinkedIn links in `src/components/Contact.js`.

---

## 🎨 How to Change the Design
- **Colors, fonts, layout:**
  - Edit the CSS files in `src/` and `src/components/`.
  - Try changing color codes (like `#0ff` for neon blue) to your favorite colors.
- **Responsive/mobile tweaks:**
  - CSS files use `@media` queries to adjust for mobile screens.

---

## 🛠️ How to Add a New Page or Section
1. Create a new JS file in `src/components/`, e.g., `NewSection.js`.
2. Create a matching CSS file if needed.
3. Import and add a `<Route>` for your new page in `src/App.js`.
4. Add a link to the navbar.

---

## 📚 Learn More
- [React Docs](https://react.dev/learn)
- [MDN Web Docs: HTML, CSS, JS](https://developer.mozilla.org/)
- [Git & GitHub Basics](https://guides.github.com/activities/hello-world/)

---

**Happy hacking! If you have questions, ask your favorite AI assistant or check the docs above.**


This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
