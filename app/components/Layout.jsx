import React, {PropTypes} from 'react';

import Header from './Header';

class Layout extends React.Component {
  render() {
    const loaderStyles = {
      position:'fixed',
      top:0,
      bottom:0,
      left:0,
      right:0,
      zIndex: 1000,
      background:'rgba(0,0,0,.4)'
    };
    const iconStyles = {
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,
      margin:'auto',
      height: 120,
      width: 120,
      fontSize: '120px',
      color:'white'
    }
    let loader = this.props.loading ? (
        <div style={loaderStyles}>
          <span style={iconStyles}>
            <i className="glyphicon glyphicon-download-alt"></i>
          </span>
        </div>
    ) : null;
    return (
      <div>
        <Header />
        {loader}
        <div className="container">
          {this.props.children}
          foot<br />
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
}

export default Layout;
