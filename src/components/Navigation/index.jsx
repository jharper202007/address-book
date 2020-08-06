import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const performSearch = (e) => {
    e.preventDefault();

    history.push({
      pathname: 'search',
      search: `?q=${searchTerm}`
    })
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavLink to="/">
            <li className="nav-item" style={{ color: '#FFF' }}>Home</li>
          </NavLink>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value) } />
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={performSearch}>Search</button>
      </form>
    </nav>
  )
}

export default Navigation;
