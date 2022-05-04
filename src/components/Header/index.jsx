import { useTheme } from '../../utils/hooks'
import { StyledLink } from '../../utils/style/Atoms'

const Header = () => {
  const { theme } = useTheme()
  return (
    <nav>
      <div className="navBar">
        <StyledLink to="/" theme={theme}>
          Accueil
        </StyledLink>
        <StyledLink to="survey/1" theme={theme}>
          Questionnaire
        </StyledLink>
        <StyledLink to="freelances" theme={theme}>
          Profils
        </StyledLink>
      </div>
    </nav>
  )
}

export default Header
