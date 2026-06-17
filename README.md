# Pak Trends

Pak Trends is a modern static travel showcase for Pakistan, featuring province and city discovery, local highlights, search and filter controls, and live weather integration for city cards.

## Live Demo


[Live Demo](https://paktrends-omega.vercel.app)

## Features

- Province selector with branded province cards
- City discovery grid with animated reveal cards
- Search and filter by city, tags, or province
- City detail modal with highlights and quick facts
- Live weather integration via OpenWeatherMap
- Responsive layout with Bootstrap and custom styling
- Smooth scroll and animated interactions for a polished UX

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5 for layout and responsive design
- Bootstrap Icons for UI iconography
- OpenWeatherMap API for live weather data
- Vercel for deployment

## Project Structure

```
blog web/
│
├── assets/              # Static visual or content assets
├── css/
│   ├── cities.css       # Styles for the cities page
│   ├── culture.css      # Styles for the culture page
│   ├── food.css         # Styles for the food page
│   └── index.css        # Shared and homepage styles
├── images/              # Image assets used throughout the site
├── js/
│   ├── cities.js        # Cities page behavior and weather integration
│   ├── culture.js       # Culture page scripts
│   ├── food.js          # Food page scripts
│   └── index.js         # Shared homepage scripts
├── pages/
│   ├── cities.html      # Cities showcase page
│   ├── culture.html     # Culture showcase page
│   ├── food.html        # Food showcase page
│   └── sign in.html     # Sign-in page UI mockup
├── index.html           # Main landing page
├── README.md            # Project documentation
└── LICENSE              # Project license
```

## How to Use

1. Open `index.html` or `pages/cities.html` in a browser.
2. Use the province filters or search bar to narrow down cities.
3. Click `Explore` on any city card to open the modal.
4. For live weather, add an OpenWeatherMap API key to `js/cities.js`.

## Notes

- The live weather feature requires a valid OpenWeatherMap API key.
- If weather is unavailable, the UI gracefully falls back to hardcoded city temperatures.
- Update the live demo URL in this README once the site is hosted.
