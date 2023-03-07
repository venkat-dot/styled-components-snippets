// Theme Example
import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
// // import { ComplexComponent } from './components/ComplexComponent'
// // const StyledButton = styled(Button)`
//   text-transform: capitalize;

import { ThemeProvider } from 'styled-components'
const baseTheme = {
  color: '#ffffcc',
  background: '#ff8c1a',
}
const darkTheme = {
  color: '#ff8c1a',
  background: '#ffffcc',
}
const Container = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  button {
    background-color: #645cff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    display: block;
    width: 200px;
    cursor: pointer;
    padding: 0.25rem;
    text-transform: capitalize;
    margin: 1rem auto;
  }
`
function App() {
  const [BaseTheme, setTheme] = React.useState(true)
  const changeTheme = () => {
    setTheme(!BaseTheme)
  }
  return (
    <ThemeProvider theme={BaseTheme ? baseTheme : darkTheme}>
      <GlobalStyles />

      <Container>
        <h1>Hi Gopi</h1>
        <button onClick={changeTheme}>click me</button>
      </Container>
    </ThemeProvider>
  )
}

// Animation
import styled, { keyframes } from 'styled-components'
const anim = keyframes`
to{
  transform: rotate(360deg);
}
`
const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  border: 3px solid #ccc;
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${anim} 0.5s linear infinite; ;
`
