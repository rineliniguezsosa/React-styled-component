import styled from 'styled-components'

export const Buttonstyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => props.variant === 'outlined' ? 'yellow':'palevioletred'};//<= USING PROPS
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const Extendbutton = styled(Buttonstyled)`
   box-shadow: inset 0px 0px 6px yellow;
`

