import React from 'react';

/*
Navigation menu bar that is placed at the top of the dashboard page 
*/ 
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Trivia App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">LeaderBoard</a>
          <a className="nav-item nav-link active" href="#">GameStats</a>
          <a className="nav-item nav-link active" href="#">Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;