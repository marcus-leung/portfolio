# Marcus Leung Portfolio Website

Welcome to my portfolio website! This website showcases my projects, skills, and experiences.
Link: [marcusleung.net](https://marcusleung.net/)

## Description

My portfolio website serves as a comprehensive showcase of my professional background, featuring sections for experience, education, projects, and a messaging system for direct communication.

## Built With

- Next.js: React framework with static site generation for crawler/AI-readable HTML output.
- React: For building UI components.
- Tailwind CSS: Utility-first CSS framework for responsive styling.
- Framer Motion: Animations and transitions.

## Features

- Work Experience: Discover my professional history, exploring past roles and the diverse array of responsibilities I undertook throughout my career journey.
- Leadership & Extracurricular Activities: Displays my experience in clubs and activities.
- Projects: View my latest projects with descriptions, filterable by category.
- Skills: Explore my skills and expertise in various technologies.
- Contact: Get in touch through the contact form or LinkedIn.
- Device Compatibility: Responsive for mobile and desktop devices.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (GitHub Pages)

The site is statically exported to the `out/` directory and hosted on GitHub Pages.

To deploy after making changes:

```bash
git add .
git commit -m "your message"
npm run deploy
```

`npm run deploy` runs `next build` (outputs to `out/`) then pushes to the `gh-pages` branch via `gh-pages`.

The custom domain (`marcusleung.net`) is configured via `public/CNAME` and is included automatically in every build.

Note: Icons from https://devicon.dev/
