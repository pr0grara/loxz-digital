import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Survey from './survey';

const mSTP = state => {
    return {
        content: state.entities.article
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Survey);
