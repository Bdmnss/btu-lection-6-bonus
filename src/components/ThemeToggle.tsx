type ThemeToggleProps = {
    theme: string;

    toggleTheme: () => void;
};

function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
    return (
      <button
        className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
        onClick={toggleTheme}
      >
        Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Theme
      </button>
    );
  }
  
  export default ThemeToggle;