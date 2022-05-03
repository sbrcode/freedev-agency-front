import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: ${colors.red};
  font-size: 22px;
  font-weight: bold;
`

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.grey};
  color: ${colors.red};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

Card.defaultProps = {
  title: 'Prenom Nom',
}

export default Card
