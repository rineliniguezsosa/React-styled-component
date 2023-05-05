import { Buttonstyled,Extendbutton,AttributesButton } from "./Basic styled component/Button"
import { ThemeProvider } from 'styled-components'

const theme = {
  dark:{
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:"#fff",
    text:'#000'
  }
}
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
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
