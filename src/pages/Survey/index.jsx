import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SurveyContext } from '../../utils/context'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { ErrorStyle } from '../../utils/style/Atoms'

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
  height: 80px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) => (props.isSelected ? `0px 0px 0px 2px ${colors.red} inset` : 'none')};
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
  const { theme } = useTheme()
  const params = useParams()
  const questionNumber = parseInt(params.questionId)
  const prevQuestionNumber = questionNumber - 1
  const nextQuestionNumber = questionNumber + 1
  const { answers, saveAnswers } = useContext(SurveyContext)
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const { surveyData } = data

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer })
  }

  if (error) {
    return <ErrorStyle>Il y a eu un problème. Veuillez raffraîchir votre page svp</ErrorStyle>
  }
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader theme={theme} />
      ) : (
        <QuestionContent>{surveyData && surveyData[questionNumber]}</QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true}>
          Oui
        </ReplyBox>
        <ReplyBox onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false}>
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        {prevQuestionNumber !== 0 && <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>}
        {surveyData && surveyData[questionNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          prevQuestionNumber !== 0 && <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
