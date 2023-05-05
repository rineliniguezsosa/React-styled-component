import styled from 'styled-components'

const buttonstyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function App() {
  return (
    <>
      <h1>BASIC STYLED COMPONENT</h1>
      <button>Button</button>
      <buttonstyled>Button</buttonstyled>
    </>
  )
}

export default App
