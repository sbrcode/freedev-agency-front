import { useTheme } from '../../utils/hooks'
import { createGlobalStyle } from 'styled-components'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  body {
    background-color: ${({ theme }) => (theme ? `${colors.backgroundDark};` : `${colors.backgroundLight};`)};
    color:  ${({ theme }) => (theme ? `${colors.fontDark};` : `${colors.fontLight};`)};
    text-decoration-color: ${({ theme }) => (theme ? `${colors.fontDark};` : `${colors.fontLight};`)};
    & a {
      color: ${({ theme }) => (theme ? `${colors.fontDark};` : `${colors.fontLight};`)};
    }
    margin: 0;  
  }
`

const GlobalStyle = () => {
  const { theme } = useTheme()

  return <StyledGlobalStyle theme={theme === 'dark'} />
}

export default GlobalStyle
