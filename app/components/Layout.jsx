import React, {PropTypes} from 'react';

import Header from './Header';

class Layout extends React.Component {
  render() {
    let container = this.props.ui && this.props.ui.apiLoading ? 'Loading...' : this.props.children;
    return (
      <div>
        <Header />
        {container}
        foot<br />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  ui: PropTypes.object
}

export default Layout;
