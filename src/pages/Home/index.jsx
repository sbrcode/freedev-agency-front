import styled from 'styled-components'

const HomeContainer = styled.div`
  padding: 48px;
`

const Home = () => {
  return (
    <HomeContainer>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </HomeContainer>
  )
}

export default Home

