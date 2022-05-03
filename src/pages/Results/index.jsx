import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

const Results = () => {
  const { answers } = useContext(SurveyContext)

  return (
    <div>
      <h1>Results</h1>
      <ol>
        {answers !== {} && Object.values(answers).map((answer, index) => <li key={index}>{answer.toString()}</li>)}
      </ol>
    </div>
  )
}

export default Results
