import { Buttonstyled,Extendbutton,AttributesButton } from "./Basic styled component/Button"


function App() {
  return (
    <>
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
    </>
  )
}

export default App
