import { connect } from 'react-redux';
import Privacy from './privacy';

const mSTP = state => {
    return {
        content: state.entities.article
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Privacy);
