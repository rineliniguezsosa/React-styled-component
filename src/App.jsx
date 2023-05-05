import { Buttonstyled,Extendbutton,AttributesButton } from "./Basic styled component/Button"
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
    <ThemeProvider>
      <h1>BASIC STYLED COMPONENT</h1>
      <button>Button</button>
      <Buttonstyled>Button</Buttonstyled>

      {/* PROPS */}
      <Buttonstyled variant="outlined">Button With Props</Buttonstyled> 
      {/* PROPS */}

      {/* extending styles */}
      <Extendbutton>Button Extended</Extendbutton>
      {/* extending styles */}

      {/* Atributos */}
      <AttributesButton>Atributos</AttributesButton>
      {/* Atributos */}
      </ThemeProvider>
    </>
  )
}

export default App
