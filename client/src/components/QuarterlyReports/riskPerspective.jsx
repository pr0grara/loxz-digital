import React from 'react';
import risk from '../../pdfs/RiskPerspective.pdf';
import riskImg from '../../images/riskImg.png';
import right from '../../icons/yumi-arrow.png';
import { Helmet } from 'react-helmet';

class Q2_2021 extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Risk Perspective for Machine Learning</title>
                    <meta property="og:image" content="%PUBLIC_URL%/riskImg.png" />
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
                            <div className="report-header">In the 2-page report discover whether your company segment takes enough risk when building models. Leaders tend to be more conservative while start ups take more risk.</div>
                            <div className="report-signature">-Chen Song, Data Scientist</div>
                            <div className="cta-container">
                                <a href={risk} className="link cta">
                                    <div className="cta-text">Go to Report</div>
                                    <img src={right} alt="" className="cta-img" />
                                </a>
                            </div>
                        </div>
                        <a href={risk} className="report-link"><img src={riskImg} alt="Q2 2021" className="report-cover" /></a>
                    </div>
                </div>
            </>
        )
    }
}

export default Q2_2021;