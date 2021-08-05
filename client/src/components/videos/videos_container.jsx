import { connect } from 'react-redux';
import Video from './videos';

const mSTP = state => {
    return {
        content: state.entities
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Video);
