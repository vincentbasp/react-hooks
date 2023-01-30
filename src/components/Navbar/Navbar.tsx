import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/exo1">Exo1</Link>
            </li>
            <li>
              <Link to="/exo2">Exo2</Link>
            </li>
            <li>
              <Link to="/exo3">Exo3</Link>
            </li>
            <li>
              <Link to="/exo4">Exo4</Link>
            </li>
            <li>
              <Link to="/exo5">Exo5</Link>
            </li>
            <li>
              <Link to="/exo6">Exo6</Link>
            </li>
            <li>
              <Link to="/exo7">Exo7</Link>
            </li>
            <li>
              <Link to="/exo8">Exo8</Link>
            </li>
            <li>
              <Link to="/exo9">Exo9</Link>
            </li>
            <li>
              <Link to="/exo10">Exo10</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}