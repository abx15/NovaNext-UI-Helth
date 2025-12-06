# Dr. Serena Blake - Therapist Website

This project is an internship assignment to build a clean, mobile-friendly website for an imaginary therapist, Dr. Serena Blake. The website is built using Next.js 14 (App Router) and Tailwind CSS, with a focus on closely matching a provided design inspiration.

## Site is Live on :

https://gmt-asgn.vercel.app/

## Table of Contents

- [Features](#features)
- [Design Inspiration](#design-inspiration)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Contact Form Validation](#contact-form-validation)
- [Reflection](#reflection)

## Features

The website includes the following main sections, populated with Dr. Serena Blake's details:

-   **Hero Section:** Full-screen background, prominent headline, sub-headline, and a call-to-action button.
-   **About Section:** Dr. Blake's bio, experience, and location, accompanied by a headshot.
-   **Services Section:** Detailed descriptions and relevant images for each service offered (Anxiety & Stress Management, Relationship Counseling, Trauma Recovery), along with session fees.
-   **FAQ Section:** An interactive accordion UI displaying frequently asked questions and their answers.
-   **Contact Section:** A comprehensive contact form with required fields and client-side validation, alongside Dr. Blake's contact information and office hours.
-   **Navigation & Footer:** A fixed navigation bar for easy section access and a simple copyright footer.

## Design Inspiration

The design of this website is heavily inspired by:
-   [drjenniferhahm.com](https://www.drjenniferhahm.com/)

Efforts were made to match the theme, spacing, layout, and overall look and feel, including custom color palettes and font choices to approximate the reference design.

## Tech Stack

-   **Framework:** Next.js 14 (App Router)
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Form Management:** `react-hook-form`
-   **Schema Validation:** `zod`
-   **Zod Resolver:** `@hookform/resolvers/zod`

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    \`\`\`bash
    git clone <your-github-repo-url>
    cd <your-repo-name>
    \`\`\`
2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`
    This will install Next.js, Tailwind CSS, shadcn/ui, and the form validation libraries.

## Running the Project

Once the dependencies are installed, you can run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Contact Form Validation

The contact form includes client-side validation using `react-hook-form` and `zod`. All fields are required, and specific formats are enforced for phone numbers and email addresses. Inline error messages are displayed for invalid inputs. Upon successful submission, the form data is logged to the console, and an alert message is shown.

## Reflection

The most interesting part of this assignment was definitely the challenge of replicating the design from `drjenniferhahm.com` using Tailwind CSS and shadcn/ui. It was a great exercise in paying close attention to spacing, typography, and color palettes to achieve a similar aesthetic. The most challenging aspect was fine-tuning the visual details to match the reference site's subtle nuances, as direct pixel-perfect recreation without inspecting the original CSS requires a keen eye and iterative adjustments.