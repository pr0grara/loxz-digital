import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import SurveyContainer from './survey/survey_container';
import LandingContainer from './landing/landing_container';
// import ReportContainer from './report/report_container';
import ReportsContainer from './reports/reports_container';
import PrivacyContainer from './privacy/privacy_container';
import VideosContainer from './videos/videos_container';
import Q2_2021 from './QuarterlyReports/2021-Q2';
import ScoringMethodology from './QuarterlyReports/ML Readiness Scoring Methodology Report';
import RiskPerspective from './QuarterlyReports/riskPerspective';

//Header component was renamed from GreetingContainer 
const App = () => {
    return (
        <Switch>
            {/* <Route exact path="/"><LandingContainer /></Route> */}
            <Route exact path="/"><LandingContainer /></Route>
            <Route exact path="/reports"><ReportsContainer /></Route>
            <Route exact path="/reports/2021-Q2"><Q2_2021 /></Route>
            <Route exact path="/reports/scoring-methodology"><ScoringMethodology /></Route>
            <Route exact path="/reports/risk-perspective"><RiskPerspective /></Route>
            <Route exact path="/privacy-policy"><PrivacyContainer /></Route>
            <Route exact path="/videos"><VideosContainer /></Route>
        </Switch>
    )
}

export default App;