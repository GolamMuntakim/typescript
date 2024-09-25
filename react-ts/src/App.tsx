import { createContext, ReactNode, useState } from "react";
import Box from "./Component/Box";
import Reduce from "./Reduce";


type ThemeType =  "light" | "dark"
interface ThemeContextType{
theme : ThemeType;
toggleTheme :()=>void;
}
export const ThemeContext = createContext<ThemeContextType | null>({theme:"light", toggleTheme:()=>{}});

const ThemeProvider = ({children}:{children:ReactNode}) =>{
  const [theme,setTheme] = useState<ThemeType>("light")

  const toggleTheme = () => {
    setTheme(prev=>prev==="light" ? "dark" : "light")
  }
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

function App() {
  return (
   <ThemeProvider>
      <div>hello typescript</div> 
      <Box></Box>
      <Reduce></Reduce>
   </ThemeProvider>
  )
}

export default App
