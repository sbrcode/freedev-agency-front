import { useEffect, useState, useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) => (props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none')};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Survey = () => {
  const params = useParams()
  const questionNumber = parseInt(params.questionId)
  const prevQuestionNumber = questionNumber === 1 ? 1 : questionNumber - 1
  const nextQuestionNumber = questionNumber + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const { answers, saveAnswers } = useContext(SurveyContext)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setDataLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/survey`)
      const { surveyData } = await response.json()
      setSurveyData(surveyData)
      setDataLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer })
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? <Loader /> : <QuestionContent>{surveyData[questionNumber]} </QuestionContent>}
      <ReplyWrapper>
        <ReplyBox onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true}>
          Oui
        </ReplyBox>
        <ReplyBox onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false}>
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
