# Next.js 15 Project

## Table of Contents
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [SEO Optimizations](#seo-optimizations)
- [WCAG Compliance](#wcag-compliance)

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

To run the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

To build the project for production:
```bash
npm run build
# or
yarn build
```
To start the production server:
```bash
npm run start
# or
yarn start
```

## Folder Structure
```
/project-root
│── src/
│   ├── app/      # Contains Next.js pages and layout components
│   ├── components/  # Reusable UI components
│── public/       # Static assets
│── package.json  # Project dependencies
│── next.config.js  # Next.js configuration
│── README.md     # Project documentation
```

## SEO Optimizations

The project includes the following SEO improvements:
- **Meta Tags**: Dynamically set title, description, and Open Graph tags using Next.js `<Head>` component.
- **Server-Side Rendering (SSR) & Static Site Generation (SSG)**: Improved search engine discoverability.
- **SEO-Friendly URLs**: Implemented clean and meaningful URLs.
- **Schema Markup**: Added structured data for better search engine understanding.
-

## WCAG Compliance

To ensure accessibility and WCAG compliance:
- **Semantic HTML**: Used appropriate HTML elements for structure and meaning.
- **ARIA Attributes**: Added ARIA roles and labels where needed.
- **Keyboard Navigation**: Ensured interactive elements are navigable via keyboard.
- **Color Contrast**: Used accessible color contrast ratios.
- **Alt Text**: Provided descriptive alt attributes for images.
- **Focus Management**: Handled focus for modal and dynamic components.

This project follows WCAG 2.1 AA guidelines to enhance usability for all users.

