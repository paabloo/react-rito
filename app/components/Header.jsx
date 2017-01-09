import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/'>
              <span className="navbar-brand">RitoAPP</span>
            </Link>
            <Link to='/champions'>
              <button type="button" className="btn btn-default navbar-btn">Champions</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
