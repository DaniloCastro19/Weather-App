import { createContext, useContext } from "react";
import type { ThemeContextType } from "../models/ThemeModels";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("")
    }
    return context;
}
