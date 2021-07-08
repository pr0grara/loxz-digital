import { connect } from 'react-redux';
import Report from './report';

const mSTP = state => {
    return {
        content: state.entities.article
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Report);
