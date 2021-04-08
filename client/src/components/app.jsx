import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SurveyContainer from './survey/survey_container';
import LandingContainer from './landing/landing_container';

//Header component was renamed from GreetingContainer 
const App = () => {
    return (
        <LandingContainer />        
    )
}

export default App;