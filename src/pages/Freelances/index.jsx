import styled from 'styled-components'

import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import { ErrorStyle, Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  margin-left: 20px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`

const Freelances = () => {
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)
  const { freelancersList } = data

  if (error) {
    return <ErrorStyle>Il y a eu un problème. Veuillez raffraîchir votre page svp</ErrorStyle>
  }
  return (
    <CardsContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {freelancersList.map((profile) => (
            <Card
              key={profile.id}
              label={profile.job}
              picture={profile.picture || DefaultPicture}
              title={profile.name}
            />
          ))}
        </>
      )}
    </CardsContainer>
  )
}

export default Freelances
