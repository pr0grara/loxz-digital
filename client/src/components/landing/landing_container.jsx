import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Landing from './landing';

const mSTP = state => {
    return {
        content: state.entities
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Landing);
