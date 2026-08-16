# Randhir Gupta — Personal Portfolio & Cybersecurity Showcase

A portfolio website for **Randhir Gupta**, a third-year B.Tech Computer Science and Business Systems (CSBS) student focused on **Cybersecurity, Cloud Security, AI/ML, and Web Development**.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactions & Canvas**: Custom HTML5 Canvas network simulation + CSS Cyber Grid

---

## 📁 Directory Architecture

```text
├── index.html                    # SEO metadata, OpenGraph tags, and Google Fonts
├── src/
│   ├── App.tsx                   # Root application container & modal coordinators
│   ├── main.tsx                  # React DOM root entry point
│   ├── index.css                 # Cyber-grid patterns, glassmorphic styles, scanlines
│   ├── types.ts                  # Shared TypeScript interfaces (Projects, Skills, etc.)
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for all projects, experiences, links
│   └── components/
│       ├── Navbar.tsx            # Sticky glass navigation with mobile drawer & active indicator
│       ├── NetworkBackground.tsx # Interactive HTML5 network node & signal flow canvas
│       ├── Hero.tsx              # Cinematic hero section & quick telemetry metrics
│       ├── About.tsx             # 3rd-year CSBS identity, pillars, toolchips & metric cards
│       ├── ResearchSection.tsx   # Dedicated TLS Fingerprinting (JA3/JA4) interactive pipeline & sandbox
│       ├── ProjectsSection.tsx   # Filterable showcase (All, Cyber, AI/ML, Cloud, Web)
│       ├── ProjectModal.tsx      # Modal for inspecting project architectures & problem solved
│       ├── SkillsSection.tsx     # Categorized skills matrix with real-time search & level badges
│       ├── ExperienceSection.tsx # Vertical chronological timeline (ServiceNow, Netrinix, etc.)
│       ├── CertificationsSection.tsx # Verified credential cards with detailed preview modal
│       ├── BeyondResumeSection.tsx   # Bento grid for leadership, research, and initiatives
│       ├── GithubSection.tsx     # "Building in Public" GitHub repositories & heatmap
│       ├── ResumeSection.tsx     # Resume CTA section with direct download
│       ├── ResumeModal.tsx       # In-browser printable resume viewer
│       ├── ContactSection.tsx    # Responsive contact form & instant email copy
│       ├── Footer.tsx            # Minimalist footer & back-to-top button
│       ├── CommandPalette.tsx    # Quick jump command bar (Cmd/Ctrl + K)
│       └── ImageWithFallback.tsx # High-tech cyber SVG fallback loader
└── public/
    └── resume.pdf                # Replaceable PDF resume file
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

---

## 🛠️ How to Customize & Update Information

### 1. Updating Personal Details, Links, and Bios
All content is cleanly separated in `src/data/portfolioData.ts`. You can modify:
- Name, Headline, Bio, and Education status in `personalInfo`.
- Email, GitHub URL, and LinkedIn URL.
- Featured projects, tags, problem statements, and architecture steps in `projectsData`.
- Skills and tool proficiency classifications in `skillCategories`.
- Experience milestones in `experienceData`.
- Certifications and issuer links in `certificationsData`.

### 2. Adding Images
Place your project screenshots or certificate images in:
- `public/images/projects/`
- `public/images/certificates/`
- `public/images/profile/`

Update the `image` property in `src/data/portfolioData.ts` to match your filenames. If an image is not provided or fails to load, `ImageWithFallback.tsx` automatically renders a high-tech cybersecurity SVG preview.

### 3. Adding Your PDF Resume
Place your updated resume as `resume.pdf` inside the `public/` directory (e.g. `public/resume.pdf`). The download buttons in the Hero, Navbar, Resume Section, and In-Browser Viewer will automatically point to it.

---

## 🌐 Deploying to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Randhir Gupta Portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Your portfolio will be live with full SSL and global CDN!

---

## 🔒 License & Credits

Designed and built for **Randhir Gupta**.
Licensed under the Apache-2.0 License.
