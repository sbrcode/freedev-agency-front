import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary}`}
`

const Header = () => {
  return (
    <nav>
      <div className="navBar">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="survey/1" $isFullLink>
          Questionnaire
        </StyledLink>
        <StyledLink to="freelances">Profils</StyledLink>
      </div>
    </nav>
  )
}

export default Header
