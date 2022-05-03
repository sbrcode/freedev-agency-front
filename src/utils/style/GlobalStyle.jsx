import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.primary};` : `${colors.light};`)};
    color:  ${({ isDarkMode }) => (isDarkMode ? `${colors.light};` : `${colors.primary};`)};
    text-decoration-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.light};` : `${colors.primary};`)};
    & a {
      color: ${({ isDarkMode }) => (isDarkMode ? `${colors.grey};` : `${colors.red};`)};
    }
    margin: 0;  
  }
`

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
