import React from 'react';
import report from '../../pdfs/21Q2Report.pdf';
import Q22021 from '../../images/Q2-2021.png';
import right from '../../icons/yumi-arrow.png';
import { Helmet } from 'react-helmet';

class Q2_2021 extends React.Component {
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
                        <div className="publish-date">Published 7/7/2021</div>
                        <div className="reports-header-container">
                            <div className="report-header">Welcome to Loxz. Each quarter we release our findings from our ML Readiness Survey. This report released on July 7, 2021, focuses on whether a company is ready for the implementation of machine learning in their organization and is structured to help you define four major barriers to assist in your efforts.</div>
                            <div className="report-signature">-Chen Song, Lead Contributor,  Data Scientist</div>
                            <div className="cta-container">
                                <a href={report} className="link cta">
                                    <div className="cta-text">Go to Report</div>
                                    <img src={right} alt="" className="cta-img" />
                                </a>
                            </div>
                        </div>
                    <a href={report} className="report-link"><img src={Q22021} alt="Q2 2021" className="report-cover" /></a>
                    </div>
                </div>
            </>
        )
    }
}

export default Q2_2021;