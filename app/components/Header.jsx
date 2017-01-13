import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  handleClose() {
    this.setState({menuOpen: false});
  }

  render() {
    const links = [
        {
            to: '/',
            label: 'RitoApp'
        },
        {
            to: '/champions',
            label: 'Champions'
        },
        {
            to: '/test',
            label: 'not working link with very long label'
        }
    ];
    return (
      <div>
        <AppBar
            title="RitoApp"
            onLeftIconButtonTouchTap={this.handleToggle}
            />
        <Drawer
            docked={false}
            width={200}
            open={this.state.menuOpen}
            onRequestChange={(menuOpen) => this.setState({menuOpen})}
            >
          {links.map((e) => (
              <MenuItem
                  key={e.to}
                  onTouchTap={this.handleClose}
                  containerElement={<Link to={e.to} />}
                  >
                  {e.label}
              </MenuItem>
          ))}
        </Drawer>
        {/*
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
        */}
      </div>

    )
  }
}

export default Header;
