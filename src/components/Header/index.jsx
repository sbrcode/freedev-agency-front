import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  margin: 5px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  ${({ isdarkmode }) =>
    isdarkmode === 'dark'
      ? `color: ${colors.primary};  background-color: ${colors.secondary};`
      : `color: ${colors.secondary};  background-color: ${colors.primary};`}
`

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <nav>
      <div className="navBar">
        <StyledLink to="/" isdarkmode={theme}>
          Accueil
        </StyledLink>
        <StyledLink to="survey/1" isdarkmode={theme}>
          Questionnaire
        </StyledLink>
        <StyledLink to="freelances" isdarkmode={theme}>
          Profils
        </StyledLink>
      </div>
    </nav>
  )
}

export default Header
