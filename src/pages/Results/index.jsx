import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader, LoaderWrapper } from '../../utils/style/Atoms'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? colors.fontLight : colors.fontDark)};
  font-weight: bold;
  font-size: 28px;
  max-width: 70%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.fontLight : colors.fontDark)};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${colors.darkGrey};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

export const formatFetchParams = (answers) => {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export const formatJobList = (title, listLength, index) => {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

const Results = () => {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)

  const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${fetchParams}`)

  if (error) {
    return <span>Il y a eu un problème. Veuillez raffraîchir votre page svp</span>
  }

  const resultsData = data?.resultsData

  return isLoading ? (
    <LoaderWrapper>
      <Loader theme={theme} />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle key={`result-title-${index}-${result.title}`} theme={theme}>
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink theme={theme} to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription theme={theme} key={`result-detail-${index}-${result.title}`}>
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
