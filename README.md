# 🏏 PitchPlanner: AI-Powered Match Scheduling

PitchPlanner is a cutting-edge web application designed to solve complex tournament scheduling problems using advanced algorithms. By leveraging a **Greedy Algorithm**, it optimizes match allocations to minimize travel overhead, resolve venue conflicts, and ensure a balanced schedule for all participating teams.

![PitchPlanner Hero Section](https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop)

## 🚀 Features

- **AI Optimization**: Uses a robust Greedy Algorithm to select the best match schedule from a pool of potential fixtures.
- **Dynamic Dataset Upload**: Support for custom `.csv` match datasets.
- **Real-time Filtering**: Filter optimized schedules by Team, Venue, and Date.
- **Premium UI/UX**: Modern, dark-themed interface built with React and Tailwind CSS, featuring glassmorphism and smooth animations.
- **Analytics Dashboard**: Instant statistics on original, selected, and rejected matches.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile views.

## 🛠️ Technology Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend (Required)**: [Flask](https://flask.palletsprojects.com/) (Python)

## 📂 Project Structure

```text
pitchPlannerFE/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Hero, MatchCard, etc.)
│   ├── pages/           # Main application pages
│   ├── data/            # Static data and constants
│   ├── assets/          # Static assets (images, logos)
│   └── App.jsx          # Root component
├── public/              # Static public files
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/pitchPlannerFE.git
cd pitchPlannerFE
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Backend Setup
Ensure you have the PitchPlanner Backend (Flask) running on `http://localhost:5000`. The frontend communicates with this API to process optimization requests.

## 📊 Dataset Format
The application expects a CSV file with the following headers:
- `MATCH NO`: Unique identifier for the match.
- `HOME TEAM`: Name of the home team.
- `AWAY TEAM`: Name of the away team.
- `VENUE`: The stadium or location.
- `START_TIME`: The scheduled date and time (YYYY-MM-DD HH:MM:SS).

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ for sports analytics and machine learning enthusiasts.
