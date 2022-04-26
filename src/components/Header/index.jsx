import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  margin: 5px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const Header = () => {
  return (
    <nav>
      <div className="navBar">
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="survey/1" $isFullLink>
          Questionnaire
        </StyledLink>
        <StyledLink to="freelances" $isFullLink>
          Profils
        </StyledLink>
      </div>
    </nav>
  )
}

export default Header
