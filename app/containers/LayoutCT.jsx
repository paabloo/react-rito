import { connect } from 'react-redux';
import Layout from '../components/Layout';

const mapStateToProps = (state) => {
    return {
      ui: state.ui
    }
};

const mapDispatchToProps = () => {
    return {}
};

const LayoutCT = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default LayoutCT;
