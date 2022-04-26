import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 5px;
  color: ${colors.blue};
  font-size: 14px;
`

const Survey = () => {
  const params = useParams()
  const section = parseInt(params.questionId)

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      {params.questionId && params.questionId < 11 && <h2>Question {params.questionId}</h2>}
      <StyledLink to={section > 1 && `/survey/${section - 1}`}>Précédent</StyledLink>
      {section === 10 ? (
        <StyledLink to={'/results'}>Résultats</StyledLink>
      ) : (
        <StyledLink to={`/survey/${section + 1}`}>Suivant</StyledLink>
      )}
    </div>
  )
}

export default Survey
