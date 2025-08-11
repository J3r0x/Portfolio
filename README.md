# Portfolio Website

A modern and responsive personal portfolio built with React and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience with smooth navigation, interactive hover effects, and accessibility-optimized design.

![Portfolio Preview](public/images/portfolio-preview.png)

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean and professional interface with smooth animations
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Interactive Components**: Hover effects and smooth transitions
- **Accessibility**: WCAG compliant and keyboard navigation support
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router Dom** - Client-side routing
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon components

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Build tool and development server
- **Git** - Version control

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/J3r0x/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
Portfolio/
├── public/
│   ├── images/          # Static images
│   └── vite.svg         # Vite logo
├── src/
│   ├── assets/          # Images and fonts
│   ├── components/      # Reusable React components
│   ├── contexts/        # React contexts (Theme)
│   ├── data/           # Project and experience data
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── styles/         # Global CSS files
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── eslint.config.js    # ESLint configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 📱 Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the app for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🎨 Customization

### Adding New Projects
1. Navigate to `src/data/projects.js`
2. Add your project to the `projects` array with the following structure:
   ```javascript
   {
     id: 3,
     title: "Your Project Name",
     description: "Project description...",
     image: yourProjectImage,
     technologies: ["React", "Node.js", "etc"],
     github: "https://github.com/username/repo",
     demo: "https://your-demo-url.com",
     featured: true
   }
   ```

### Updating Experience
1. Navigate to `src/data/projects.js`
2. Update the `experience` array with your professional experience

### Modifying Skills
1. Navigate to `src/data/projects.js`
2. Update the `skills` object with your technical skills

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/J3r0x/Portfolio/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [@J3r0x](https://github.com/J3r0x)
- **Email**: jer0xrv@gmail.com

---

⭐ Star this repo if you find it helpful!
