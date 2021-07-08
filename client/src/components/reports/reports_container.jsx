import { connect } from 'react-redux';
import Reports from './reports';

const mSTP = state => {
    return {
        content: state.entities.article
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Reports);
