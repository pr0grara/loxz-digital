import { combineReducers } from 'redux';
import surveysReducer from './surveys_reducer';

const entitiesReducer = combineReducers({
    surveys: surveysReducer
})

export default entitiesReducer