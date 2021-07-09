import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import SurveyContainer from './survey/survey_container';
import LandingContainer from './landing/landing_container';
// import ReportContainer from './report/report_container';
import ReportsContainer from './reports/reports_container';
import PrivacyContainer from './privacy/privacy_container';

//Header component was renamed from GreetingContainer 
const App = () => {
    return (
        <Switch>
            {/* <Route exact path="/"><LandingContainer /></Route> */}
            <Route exact path="/"><LandingContainer /></Route>
            <Route exact path="/reports"><ReportsContainer /></Route>
            <Route exact path="/privacy-policy"><PrivacyContainer /></Route>
        </Switch>
    )
}

export default App;