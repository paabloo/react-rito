import { connect } from 'react-redux';
import Champions from '../components/Champions';
import { getSimpleChampions } from '../store/actions/championsActions';

const mapStateToProps = (state) => {
    return {
      champions: state.champions.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleButtonClick: () => {
        dispatch(getSimpleChampions());
      }
    }
};

const ChampionsCT = connect(
    mapStateToProps,
    mapDispatchToProps
)(Champions);

export default ChampionsCT;
