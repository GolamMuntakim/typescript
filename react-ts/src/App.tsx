import { useState } from "react"
import Box from "./Component/Box"


function App() {
  const [value, setValue] = useState<string>("")
  return (
    <>
      <div>
      <Box label="Search" value={value} setter={setValue} >
       
      </Box>
      </div>
     
    </>
  )
}

export default App
