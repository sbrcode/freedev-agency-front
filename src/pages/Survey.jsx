import { useParams } from 'react-router-dom'

const Survey = () => {
  const params = useParams()

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      {params.questionNumber && <h2>Question {params.questionNumber}</h2>}
    </div>
  )
}

export default Survey
