import React from 'react';
import report from '../../pdfs/ML Readiness Scoring Methodology Report.pdf';
import img from '../../images/ML Readiness Scoring Img.png';
import right from '../../icons/yumi-arrow.png';
import { Helmet } from 'react-helmet';

class ScoringMethodology extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>ML Readiness Report for Q2 2021</title>
                    <meta property="og:image" content="%PUBLIC_URL%/Q2-2021.png" />
                </Helmet>
                <div className="footer-container">
                    <div className="privacy-cta-container">
                        <div className="cta-container">
                            <a href="https://survey.loxz.com/#/privacy-policy" className="link cta report-link">
                                <div className="cta-text">privacy policy</div>
                                {/* <img src={right} alt="" className="cta-img" /> */}
                            </a>
                        </div>
                    </div>
                    <div className="ctas-container">
                        <div className="cta-container">
                            <a href="https://survey.loxz.com" className="link cta">
                                <div className="cta-text">take the survey</div>
                                <img src={right} alt="" className="cta-img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="reports-container solo-report">
                    <div className="report-container">
                        <div className="reports-header-container">
                            <div className="report-header">In this 16-page report , we focus on Introducing the Loxz Digital ML Readiness Scoring Methodology</div>
                            <div className="report-body">The Loxz Digital survey is not just a survey, it’s a diagnostic assessment which uses a tightly vetted answer
                                key system to simultaneously increase accuracy while reducing bias. It is meant to assess the readiness of an organization that is considering building ML Models. Areas of focus in the report include, our updated scoring methodology, data summaries of respondents, conclusions that help you take the next step in your ML Journey, and a preview on what to expect in our Q3 Report.</div>
                            <div className="report-signature">-Chen Song, Lead Contributor,  Data Scientist</div>
                            <div className="cta-container">
                                <a href={report} className="link cta">
                                    <div className="cta-text">Go to Report</div>
                                    <img src={right} alt="" className="cta-img" />
                                </a>
                            </div>
                        </div>
                    <a href={report} className="report-link"><img src={img} alt="Q2 2021" className="report-cover" /></a>
                    </div>
                </div>
            </>
        )
    }
}

export default ScoringMethodology;