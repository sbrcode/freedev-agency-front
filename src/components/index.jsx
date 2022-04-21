import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <br />
      <Link to="survey">Questionnaire</Link>
      <br />
      <Link to="freelances">Résultats</Link>
    </nav>
  )
}

export default Header
