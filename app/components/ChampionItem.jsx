import React, { PropTypes } from 'react';

class ChampionItem extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.name} <br />
        Title: {this.props.title}
        <hr />
      </div>
    )
  }
}

ChampionItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
}

export default ChampionItem;
