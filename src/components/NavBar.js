import React from 'react' 
import { Link } from 'react-router-dom'


const NavBar = () => {


  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/">🎬</Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="has-text-white" to="/movies">Movie Index</Link>
          </div>
      
       
          <div className="select is-link is-small">
            <select>
              <option value="genres">Genres</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
          <div className="navbar-end">
            <div className="navbar-item"><Link className="has-text-white" to="/favourites">🍿 Favourites</Link></div>
          </div>

        </div>
      </div>

    </nav>


  )
}

export default NavBar