import styled from 'styled-components'

import { useTheme } from '../../utils/hooks'
import { StyledLink } from '../../utils/style/Atoms'

const Navbar = styled.nav`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Header = () => {
  const { theme } = useTheme()
  return (
    <Navbar>
      <StyledLink to="/" theme={theme}>
        Accueil
      </StyledLink>
      <StyledLink to="survey/1" theme={theme}>
        Questionnaire
      </StyledLink>
      <StyledLink to="freelances" theme={theme}>
        Profils
      </StyledLink>
    </Navbar>
  )
}

export default Header
