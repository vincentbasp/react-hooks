import { createContext, useCallback, useContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}
const THEMES = {
    dark:{
        background: '#000',
        color: '#FFF',
        border: '1px solid #000'
    },
    light:{
        background: '#FFF',
        color: '#000',
        border: '1px solid #DDD'
    }
}
const ThemeContext = createContext(THEMES.dark)

const SearchForm = () => {
    return  (
        <div>
            <input />
            <ThemedButton>M'inscrire</ThemedButton>
        </div>
    )
}

const Toolbar = () => {
    return  (
        <div>
            <SearchForm />
            <ThemedButton>M'inscrire</ThemedButton>
        </div>
    )
}

const ThemedButton = ({children}: Props) => {
    const value = useContext(ThemeContext)
    return  (
        <button style={value}>{children}</button>
    )
}
export const Exo10 = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = useCallback(() => {
        setTheme( t => t === 'light' ? 'dark' : 'light')
    }, [])
    const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark
    return (
        <div>
           <ThemeContext.Provider value={currentTheme}>
                <Toolbar/>
           </ThemeContext.Provider>
           <button onClick={toggleTheme}>Changer Thème</button>
        </div>
    )
}