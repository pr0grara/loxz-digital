import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import SurveyContainer from './survey/survey_container';
import LandingContainer from './landing/landing_container';
import ReportContainer from './report/report_container';

//Header component was renamed from GreetingContainer 
const App = () => {
    return (
        <Switch>
            {/* <Route exact path="/"><LandingContainer /></Route> */}
            <Route exact path="/Q22021"><ReportContainer /></Route>
            <Route path="/"><LandingContainer /></Route>
        </Switch>
    )
}

export default App;