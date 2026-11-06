# 🏥 Dr. Hassam Bin Munawar — Healthcare & Medical Clinic Web Application

> **General & Family Physician & Consultant Diabetologist**  
> *Alfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Near Wamiq Hospital, Sahiwal*  
> 📞 0333-6922404 / 0303-7528713

---

## 🌟 Overview

A modern, production-ready, ultra-fast healthcare web portal crafted with **React (Vite + TypeScript)**, **Tailwind CSS v4**, and **Lucide Icons**, inspired by high-end clinical web portals (Mayo Clinic, Cleveland Clinic, One Medical). 

Features a soothing **Soft Medical Mint & Porcelain ambient design system**, centralized configuration (`src/data/clinicConfig.ts`), demo mode sales controls, and an integrated **Gemini AI Patient Support Chatbot** ready for seamless Vercel Serverless deployment.

---

## 🎨 Design System & Reference Palette

- **Soothing Mint Backgrounds**: `#EAF6F3`, `#F4FBF9`, `#EFF9F6`, `#EBF7F4` (Eye-comfort porcelain ambient tints)
- **Primary Brand Medical Teal**: `#0E6F66` & `#13857B` (Buttons, active navigation states, medical badges)
- **Crisp Cards**: `bg-white/95` with diffused shadows, rounded-3xl corners, and delicate `#CDE8E2` borders
- **Crimson Red**: `#DC2626` (Thalassemia support & Anemia alerts)
- **Emerald Green**: `#16A34A` (Humanitarian Welfare & Sunday Free Camp)
- **Deep Clinical Navy**: `#0F2942` (High-contrast typography and grounding executive footer)

---

## 📁 Project Directory Structure

```
dr-hassam-clinic/
├── .env.local                    # Configured Gemini AI API key (local dev)
├── .env.example                  # Environment template for team/deployment
├── .gitignore                    # Git rules (excludes node_modules, *.local, dist)
├── api/
│   └── chat.ts                   # Vercel Serverless Function (Gemini 2.0 Flash)
├── public/
│   ├── doctor-hassam.jpg         # Configurable doctor portrait
│   ├── favicon.svg               # Medical heart cross SVG favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── AIChatbot.tsx          # Real-time Gemini AI receptionist widget
│   │   ├── AnemiaHub.tsx          # Interactive microscopic RBC comparison & checker
│   │   ├── AppointmentBooking.tsx # Live ticket pass & direct WhatsApp dispatch
│   │   ├── DemoBanner.tsx         # Live preview sales watermarks
│   │   ├── DemoControlsModal.tsx  # Dynamic photo upload & demo number switcher
│   │   ├── DiabetesCareCenter.tsx # 6 diabetes types, 5 organ shields & 3 pillars
│   │   ├── DiscountModal.tsx      # 20% discount voucher claim modal
│   │   ├── Footer.tsx             # Clinical hours, Google Maps link, full specialties
│   │   ├── HeroSection.tsx        # Centered hero layout & clinical photo showcase
│   │   ├── Navbar.tsx             # Sticky navbar with live search & autocomplete
│   │   ├── RevealOnScroll.tsx     # Smooth IntersectionObserver scroll fade-up
│   │   ├── SpecialtiesSection.tsx # Filterable outpatient clinical specialties
│   │   └── WelfareCare.tsx        # Free Thalassemia care, Sunday camp, 20% discount
│   ├── context/
│   │   └── ClinicContext.tsx      # Global clinic state & WhatsApp generator
│   ├── data/
│   │   ├── clinicConfig.ts        # Single centralized clinic configuration file
│   │   └── clinicData.ts          # Extracted clinical specialties & organ warnings
│   ├── utils/
│   │   └── helpers.ts             # Smooth scrolling & phone formatters
│   ├── App.tsx                    # Main layout wrapper with ambient mint styling
│   ├── index.css                  # Tailwind styles and smooth scrolling
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML shell with Google fonts & meta tags
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript compiler settings
├── vercel.json                    # Vercel serverless routing configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## ⚡ Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, production-ready build in `dist/`.

---

## 🤖 Gemini AI Patient Support Chatbot Setup

The project includes an intelligent clinical AI receptionist powered by **Google Gemini 2.0 Flash** with a built-in clinical system prompt for Dr. Hassam's clinic.

### Environment Variable
The project is pre-configured with a `.env.local` file:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
```

---

## 🚀 How to Export to GitHub

1. Initialize Git in the project root:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern healthcare web portal for Dr. Hassam Bin Munawar"
   ```

2. Create a new repository on your GitHub account (e.g. `dr-hassam-clinic`).

3. Link and push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dr-hassam-clinic.git
   git push -u origin main
   ```
   *(Note: `.env.local` is listed in `.gitignore` so your secret key is never leaked publicly).*

---

## ☁️ How to Deploy to Vercel

1. **Import Project into Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New Project"** $\rightarrow$ select your imported GitHub repository `dr-hassam-clinic`.

2. **Configure Environment Variables in Vercel:**
   - In the project settings before clicking deploy, open **Environment Variables**.
   - Add:
     - **Key:** `GOOGLE_GENERATIVE_AI_API_KEY`
     - **Value:** your Gemini API key

3. **Deploy:**
   - Click **"Deploy"**. Vercel will automatically build the React Vite application and deploy the serverless Gemini AI function at `/api/chat`.

---

## ⚙️ Centralized Clinic Configuration (`src/data/clinicConfig.ts`)

Once Dr. Hassam approves the demo:
- Set `DEMO_MODE: false` to remove all preview watermarks and developer controls.
- Set `ACTIVE_WHATSAPP_NUMBER` to switch between preview number and Dr. Hassam's official clinical lines.
