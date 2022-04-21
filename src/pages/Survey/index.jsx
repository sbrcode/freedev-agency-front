import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../index.css'

const Survey = () => {
  const params = useParams()
  const section = parseInt(params.questionId)

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      {params.questionId && params.questionId < 11 && <h2>Question {params.questionId}</h2>}
      <Link to={section > 1 && `/survey/${section - 1}`}>Précédent</Link>
      <span id="link">
        {section === 10 ? <Link to={'/results'}>Résultats</Link> : <Link to={`/survey/${section + 1}`}>Suivant</Link>}
      </span>
    </div>
  )
}

export default Survey
