import React, { PropTypes } from 'react';

import ChampionItem from './ChampionItem';

class Champions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      champions: props.champions,
      visibleChampions: null
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.mapChampsToArray(this.state.champions);
  }

  componentWillReceiveProps(props) {
    this.mapChampsToArray(props.champions);
  }

  mapChampsToArray(propChampions) {
    const champions = Object.keys(propChampions).map(k => propChampions[k]);
    this.setState({
      champions,
      visibleChampions: champions
    });
    this.filterChampions(true);
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value
    });
    this.filterChampions();
  }

  filterChampions(force) {
    const timer = force ? 0 : 500;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      const filteredChamps = this.state.champions.filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()));
      this.setState({
        visibleChampions: filteredChamps
      })
    }, timer);
  }

  render() {
    const champs = this.state.visibleChampions.map(c => <ChampionItem {...c} />);
    return (
      <div>
        <input className="form-control" value={this.state.search} onChange={this.handleSearchChange} disabled={!this.state.champions.length} />
        <div className="btn-group btn-group-lg" style={{margin: '10px auto'}}>
          <button className="btn btn-primary" onClick={() => this.props.handleButtonClick()}>Fetch champs</button>
          <button className="btn btn-success">Button</button>
        </div>
        <hr />
        Results: {this.state.visibleChampions.length}
        <hr />
        {champs}
      </div>
    )
  }
}

Champions.propTypes = {
  handleButtonClick: PropTypes.func,
  champions: PropTypes.object
};

export default Champions;
