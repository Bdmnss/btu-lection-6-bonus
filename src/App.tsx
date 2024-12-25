import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
      <h1 className="text-2xl font-bold">Theme Toggle App</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;