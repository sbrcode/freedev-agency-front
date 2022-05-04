import { useTheme } from '../../utils/hooks'
import { createGlobalStyle } from 'styled-components'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  body {
    background-color: ${({ theme }) => (theme ? `${colors.primary};` : `${colors.light};`)};
    color:  ${({ theme }) => (theme ? `${colors.light};` : `${colors.primary};`)};
    text-decoration-color: ${({ theme }) => (theme ? `${colors.light};` : `${colors.primary};`)};
    & a {
      color: ${({ theme }) => (theme ? `${colors.grey};` : `${colors.red};`)};
    }
    margin: 0;  
  }
`

const GlobalStyle = () => {
  const { theme } = useTheme()

  return <StyledGlobalStyle theme={theme === 'light'} />
}

export default GlobalStyle
