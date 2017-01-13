import { connect } from 'react-redux';
import Layout from '../components/Layout';


const mapStateToProps = (state) => {
    return {
      loading: state.ui.apiLoading
    }
};

const LayoutCT = connect(
    mapStateToProps
)(Layout);

export default LayoutCT;
