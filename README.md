# Rishi Pandey — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build for production
```bash
npm run build
```
Output goes to `dist/` — deploy that folder to Vercel, Netlify, or GitHub Pages.

## Deploy in 2 minutes (Vercel)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.

## Edit your content
Everything — name, projects, skills, links — lives in `src/data.js`.
You don't need to touch any component to update your info.

## Project structure
```
src/
  data.js                  ← all your content (edit this)
  App.jsx                  ← wires everything together
  styles.css                ← the whole visual system
  hooks/
    useActiveSection.js     ← scroll-spy for sidebar/tabs
    useReveal.js
  components/
    Boot.jsx                ← the boot/compile animation
    Sidebar.jsx
    TabBar.jsx
    Terminal.jsx            ← the interactive command terminal
    sections/
      Home.jsx, About.jsx, Skills.jsx, Projects.jsx, Experience.jsx, Contact.jsx
```
