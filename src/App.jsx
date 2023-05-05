import { Buttonstyled,Extendbutton } from "./Basic styled component/Button"


function App() {
  return (
    <>
      <h1>BASIC STYLED COMPONENT</h1>
      <button>Button</button>
      <Buttonstyled>Button</Buttonstyled>
      <Buttonstyled variant="outlined">Button With Props</Buttonstyled> 
      {/* PROPS */}

      {/* extending styles */}
      <Extendbutton>Button Extended</Extendbutton>
      {/* extending styles */}
    </>
  )
}

export default App
