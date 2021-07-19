import React from 'react';
// import ReportContainer from '../report/report_container'
import report from '../../pdfs/21Q2Report.pdf';
import risk from '../../pdfs/RiskPerspective.pdf';
import Q22021 from '../../images/Q2-2021.png';
import riskImg from '../../images/riskImg.png';
import right from '../../icons/yumi-arrow.png';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.clicked = false;
        this.onclick = this.onclick.bind(this);
        this.handlekeypress = this.handlekeypress.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.details = false;
    }

    componentDidMount() {
        // document.addEventListener('keypress', this.handlekeypress)
    }

    handlekeypress(e) {
        console.log(e.key)
        if (e.key === "d") debugger
    }

    onclick() {
        this.clicked = !this.clicked;
        this.setState(() => this.clicked)
    }

    mouseEnter() {
        let details = document.querySelector('.report-details-container')
        details.style.transform = "translateY(0px)";
                
    }
    
    mouseLeave() {
        let details = document.querySelector('.report-details-container')
        details.style.transform = "translateY(-30px)";
    }

    render() {
        return (
            <>
            <div className="footer-container">
                <div className="privacy-cta-container">
                    <div className="cta-container">
                        <a href="https://survey.loxz.com/#/privacy-policy" className="link cta report-link">
                            <div className="cta-text">privacy policy</div>
                            {/* <img src={right} alt="" className="cta-img" /> */}
                        </a>
                    </div>
                </div>
                <div className="launching-soon">Launching Soon</div>
                <div className="ctas-container">
                    <div className="cta-container">
                        <a href="https://survey.loxz.com" className="link cta">
                            <div className="cta-text">take the survey</div>
                            <img src={right} alt="" className="cta-img" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="reports-container">
                <div className="blocker-component">&nbsp;</div>
                <div className="reports-header">Welcome to Loxz. Each quarter we release our findings from our ML Readiness Survey. You can find all reports here.</div>
                <div className="report-container">
                    <a href={report} className="report-link"><img src={Q22021} alt="Q2 2021" className="report-cover" /></a>
                    <div className="reports-header-container">
                        <div className="report-header">This report released on July 7, 2021, focuses on whether a company is ready for the implementation of machine learning in their organization and is structured to help you define four major barriers to assist in your efforts.</div>
                        <div className="report-signature">-Chen Song, Lead Contributor, Data Scientist</div>
                        <div className="cta-container">
                            <a href={report} className="link cta">
                                <div className="cta-text">Go to Report</div>
                                <img src={right} alt="" className="cta-img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="report-container">
                    <a href={risk} className="report-link"><img src={riskImg} alt="Q2 2021" className="report-cover" /></a>
                    <div className="reports-header-container">
                            <div className="report-header">In this 2-page report discover whether your company segment takes enough risk when building models. Leaders tend to be more conservative while start ups take more risk.</div>
                        <div className="report-signature">-Chen Song, Data Scientist</div>
                        <div className="cta-container">
                            <a href={risk} className="link cta">
                                <div className="cta-text">Go to Report</div>
                                <img src={right} alt="" className="cta-img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Reports;