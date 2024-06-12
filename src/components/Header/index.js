import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import './index.css'

const Header = () => (
  <nav className="header_Ctn">
    <Link to="/" className="linkEl">
      <h1 className="logo_Text">Emmanuel Dass</h1>
    </Link>
    <ul className="nav_items_Ctn">
      <Link to="/" className="linkEl">
        <li>Home</li>
      </Link>
      <Link to="/about" className="linkEl">
        <li>About</li>
      </Link>
      <Link to="/projects" className="linkEl">
        <li>Projects</li>
      </Link>
      <Button type="button" variant="contained">
        Contact Me
      </Button>
    </ul>
  </nav>
)

export default Header
