import { createContext, useContext } from "react";

export const TheamContext = createContext({
    theme: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})

export const TheamProvider = TheamContext.Provider

export default function useTheme() {
    return useContext(TheamContext)
}