import {
    RECEIVE_SURVEY,
} from '../actions/survey_actions';

const _nullSurvey = Object.freeze({
    survey: null
});

const sessionReducer = (state = _nullSurvey, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SURVEY:
            return { };
        default:
            return state;
    }
};

export default sessionReducer;
