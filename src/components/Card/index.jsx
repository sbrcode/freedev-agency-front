import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: ${colors.fontLight};
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
  background-color: ${colors.secondary};
  color: ${colors.fontLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const Card = ({ label, title, picture, id }) => {
  // const [isFavorite, setIsFavorite] = useState(false)
  // const star = isFavorite ? '⭐️' : ''
  const navigate = useNavigate()
  return (
    // <CardWrapper onClick={() => setIsFavorite(!isFavorite)}>
    <CardWrapper onClick={() => navigate(`/freelances/${id}`)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>
        {title}
        {/* {star} {title} {star} */}
      </span>
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
