import { useTheme } from "../../utilities/ContextContainer"
import './themeToggleBtn.css'

export default function ThemeToggleBtn() {
    const {theme, toggleTheme} = useTheme();
  return (
    <button onClick={toggleTheme}>
        Switch to: {theme == "light" ? "Dark Mode" : "Light Mode" }
    </button>
  )
}
