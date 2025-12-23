import { create } from "zustand";

const useThemeStore = create((set, get) => ({
    themes: ['black', 'blue', 'red', 'violet'],
    currentTheme: 'black',

    setCurrentTheme: (theme) => {
        set({currentTheme: theme})
    }
}))

export default useThemeStore