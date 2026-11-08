# TEDxDianiBeach website

React + Vite multi-page site modelled on the structure of tedxnairobi.co.ke
(Home, About, Sponsors, Speakers, Our Team, Past Events, Contact).

## Run
```
npm install
npm run dev
```

## Build and deploy
```
npm run build
```
Upload `dist/` to any static host (it uses hash routing, so no server rules are needed), or import the repo into Vercel or Netlify.

## Project structure
- `src/data/site.js` contains event, speaker, team, partner and contact information.
- `src/pages/` contains the site's page components.
- `src/styles.css` contains the visual styles.
- `public/images/` contains the event, portrait and partner images.

The contact form opens the visitor's email app. The footer includes the TEDx licence notice.
