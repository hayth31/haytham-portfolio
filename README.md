# Haytham R A — Data Analyst & Developer Portfolio

A responsive, production-ready portfolio website built with **React**, **Vite**, and **Pure Custom CSS** (zero external UI dependencies).

Designed with a sleek, minimalist dark mode aesthetic featuring deep pitch-black (`#080808`), stark white typography (`#FFFFFF`), muted gray secondary text (`#888888`), and electric neon cyan (`#00E5FF`) accents.

---

## 🚀 Quick Start

From the project root:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

The dev server will run at `http://localhost:3000`.

---

## 📁 Project Structure

```
haytham-portfolio/
├── public/
│   ├── favicon.svg             # Neon cyan geometric HRA monogram
│   ├── Haytham_RA_Resume.pdf   # Valid downloadable resume PDF
│   └── resume.pdf              # Symlink/copy for resume download
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Glass navbar with mobile drawer
│   │   ├── Hero.jsx            # Headline, CTAs, social links, monogram badge
│   │   ├── About.jsx           # Dual-focus bio, education, internship experience
│   │   ├── Skills.jsx          # High-contrast visual badge grid (Python, SQL, Analytics, Management)
│   │   ├── Projects.jsx        # Project showcase grid
│   │   ├── ProjectCard.jsx     # Reusable project card with tags & action links
│   │   ├── AnalyticsWidget.jsx # Interactive CSS/SVG data dashboard widget (Olist)
│   │   ├── Contact.jsx         # Minimalist form with validation & success state
│   │   ├── Footer.jsx          # Copyright, status badge & back-to-top button
│   │   └── Icons.jsx           # Zero-dependency scalable SVG icons
│   ├── App.jsx                 # Main application layout coordinator
│   ├── index.css               # Design system tokens, variables & responsive rules
│   └── main.jsx                # React 18 root entrypoint
├── index.html                  # HTML template with typography & SEO meta
├── package.json
└── vite.config.js
```

---

## 🎨 Design Tokens

- **Background:** `#080808` (Primary), `#111111` (Surface), `#161616` (Elevated)
- **Primary Text:** `#FFFFFF`
- **Secondary Text:** `#888888`
- **Accent:** `#00E5FF` (Electric Neon Cyan)
- **Accent Glow:** `rgba(0, 229, 255, 0.22)`
- **Borders:** `rgba(255, 255, 255, 0.08)` / `rgba(0, 229, 255, 0.35)`

---

## 🔗 Integrated Links

- **GitHub:** [https://github.com/hayth31](https://github.com/hayth31)
- **LinkedIn:** [https://www.linkedin.com/in/haytham-reeza/](https://www.linkedin.com/in/haytham-reeza/)
- **Email:** [haythamreeza31@gmail.com](mailto:haythamreeza31@gmail.com)
- **Olist Demo:** [https://olist-query-app.streamlit.app/](https://olist-query-app.streamlit.app/)
- **Olist Repo:** [https://github.com/hayth31/olist-ecommerce-analytics-](https://github.com/hayth31/olist-ecommerce-analytics-)
- **WearGAN Repo:** [https://github.com/hayth31/WearGAN-AI-Powered-Text-to-Image-Fashion-Synthesis](https://github.com/hayth31/WearGAN-AI-Powered-Text-to-Image-Fashion-Synthesis)
- **Tessera Demo:** [https://cube-round3-pod-gvfq.vercel.app](https://cube-round3-pod-gvfq.vercel.app)
- **Tessera Repo:** [https://github.com/hayth31/Tessera-multiagent-recovery](https://github.com/hayth31/Tessera-multiagent-recovery)
