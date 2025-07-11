# Cybersecurity Portfolio
Created by: Magd Elkayfe

This web app is a modern, responsive portfolio built to showcase my skills, certifications, and projects in cybersecurity. It combines a dark, neon-accented theme with smooth UI features to create a professional and engaging online presence.

---

## Features

**Responsive Navigation Bar**
- Desktop navigation and a mobile-friendly menu.
- Navigation links to About, Projects, Certifications, and Contact.

**Animated Hacker Background**
- Subtle, animated "hacker" effects for a cyber-inspired feel.

**About Section**
- Bio, headshot, and introduction.
- Downloadable resume button.

**Projects Section**
- Displays cybersecurity projects, CTF writeups, and tools.
- Each project card includes a title, description, and links (e.g., GitHub, demo).

**Certifications Section**
- Showcases industry certifications with large, clear badge images.
- Consistent, visually appealing layout.

**Contact Section**
- Simple contact form for direct messages.
- Social media links (GitHub, LinkedIn) with secure external linking.

**Neon Blue Section Titles**
- All major section headings use a glowing neon blue style for high contrast and a modern cyber look.

**Smooth Animations & Transitions**
- Section transitions and hover effects for interactive, polished UX.

**Consistent Color Theme & Typography**
- Uses a dark background with neon blue highlights and easy-to-read mono fonts.

**Accessibility & Usability**
- Keyboard-accessible navigation and forms.
- Responsive design for all screen sizes.

---

## Project Structure & Key Files

- **/public/**
  - `index.html` — Main HTML entry point.
  - `resume.pdf` — Downloadable resume.
- **/src/App.js** — Main app component for routing and layout.
- **/src/App.css** — Global styles and footer.
- **/src/assets/** — Headshot and certification badge images.
- **/src/components/**
  - `About.js` / `About.css` — About section.
  - `Projects.js` / `Projects.css` — Projects section.
  - `Certifications.js` / `Certifications.css` — Certifications section.
  - `Contact.js` / `Contact.css` — Contact form and links.
  - `HackerTransition.js` / `HackerTransition.css` — Animated background effect.
- **package.json** — Dependencies and scripts.

---

## How to Run the Project
1. Clone this repository:
   ```sh
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Customize
- **Bio, Headshot, and Resume:** Edit `About.js` and replace `headshot.jpg` and `resume.pdf`.
- **Projects:** Add or edit project cards in `Projects.js`.
- **Certifications:** Update badges and info in `Certifications.js` and `assets/`.
- **Contact Info:** Edit links and form in `Contact.js`.
- **Colors & Styles:** Tweak CSS files for your preferred theme.

---

## Accessibility & Best Practices
- All external links use `rel="noopener noreferrer"` for security.
- The site is responsive and keyboard accessible.

---

**Built with React. MIT Licensed.**

---

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
