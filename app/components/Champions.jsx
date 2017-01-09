import React, { PropTypes } from 'react';

import ChampionItem from './ChampionItem';

class Champions extends React.Component {

  render() {
    let champs = this.props.champions ? Object.keys(this.props.champions).map(k => this.props.champions[k]).map(c => <ChampionItem {...c} />) : null;
    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.props.getSimpleChampions()}>Fetch champs</button>
        <hr />
        {champs}
      </div>
    )
  }
}

Champions.propTypes = {
  getSimpleChampions: PropTypes.func,
  champions: PropTypes.object
}

export default Champions;
