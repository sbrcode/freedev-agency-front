import { Link } from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <nav>
      <div className="navBar">
        <Link to="/">Accueil</Link>
        <span id="link">
          <Link to="survey/1">Questionnaire</Link>
        </span>
        <span id="link">
          <Link to="freelances">Freelances</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header
