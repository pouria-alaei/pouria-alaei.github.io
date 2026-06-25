# Pouria Alaei Portfolio

Personal portfolio website for **Pouria Alaei**, focused on Embedded Linux, Edge AI, industrial embedded systems, and hardware/software integration.

Live website:

```text
https://pouria-alaei.github.io
```

## Overview

This website is a lightweight engineering portfolio presenting selected embedded systems projects, professional background, experience, and contact information.

Current sections:

```text
Home
Projects
About
Experience
Contact
```

## Featured Projects

```text
Video Conference System
Linux Conference and Voting System
MC60 GSM OpenCPU Datalogger
Diesel Generator Controller
Embedded Linux Vending Machine Platform
```

## Tech Stack

```text
Astro
TypeScript
HTML/CSS
GitHub Pages
GitHub Actions
```

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── projects/
│           ├── video-conference-system/
│           ├── linux-conference-voting-system/
│           ├── mc60-gsm-opencpu-datalogger/
│           ├── diesel-generator-controller/
│           └── embedded-linux-vending-machine/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Image Naming Convention

Project images should use simple lowercase filenames:

```text
cover.jpg
01-hardware.jpg
02-altium-pcb.jpg
03-ui.jpg
04-field-test.jpg
```

Example:

```text
public/images/projects/embedded-linux-vending-machine/cover.jpg
public/images/projects/embedded-linux-vending-machine/01-hardware.jpg
public/images/projects/embedded-linux-vending-machine/02-altium-pcb.jpg
```

## Image Review Checklist

Before publishing project images, remove or blur:

```text
Customer names
Customer logos
Serial numbers
IMEI / SIM / MAC addresses
Private IP addresses
Internal server domains
Sensitive PCB details
Payment credentials or configuration
Contract or pricing information
```

## Local Development

Install dependencies:

```sh
npm install
```

Start local development server:

```sh
npm run dev
```

Build production version:

```sh
npm run build
```

Preview production build locally:

```sh
npm run preview
```

## Deployment

The website is deployed to GitHub Pages using GitHub Actions.

Production URL:

```text
https://pouria-alaei.github.io
```

## Planned Improvements

```text
Add real project images
Add Altium screenshots after confidentiality review
Improve project case studies with measurable results
Add downloadable CV
Add Open Graph preview image
Improve project-specific SEO metadata
```

## Contact

```text
Email: pouria.alaei.dev@gmail.com
GitHub: https://github.com/pouria-alaei
LinkedIn: https://www.linkedin.com/in/pouria-alaeinezhad/
Telegram: https://t.me/Pooria_Alaei
```

## 4. Build و commit

```bash
npm run build
git status
git add .
git commit -m "Add project image folders and update README"
git push origin main
```
