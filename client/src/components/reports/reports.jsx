import React from 'react';
// import ReportContainer from '../report/report_container'
import report from '../../pdfs/21Q2Report.pdf';
import Q22021 from '../../images/Q2-2021.png';
import right from '../../icons/right-arrow.png';

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
        document.addEventListener('keypress', this.handlekeypress)
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
            <div className="ctas-container">
                <div className="cta-container">
                    <a href="https://survey.loxz.com" className="link cta">
                        <div className="cta-text">take the survey</div>
                        <img src={right} alt="" className="cta-img" />
                    </a>
                </div>
            </div>
            <div className="reports-container">
                <div className="reports-header-container">
                    <div className="reports-header">Welcome to Loxz.  Each quarter we release our findings from our ML Readiness Survey. This report released on July 7, 2021, focuses on whether a company is ready for the implementation of machine learning in their organization and is structured to help you define four major barriers to assist in your efforts.</div>
                    <div className="reports-signature">-Chen Song, Lead Contributor,  Data Scientist</div>
                </div>
                {/* {!this.clicked 
                ? 
                    <div className="report-container" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
                    <img src={Q22021} alt="Q2 2021" onClick={this.onclick} className="report-cover" />
                    <div className="report-details-container hidden">
                            <a href={report} className="download-link"><img src={download} alt="download" className="report-detail" /></a>
                    </div>
                </div> 
                : 
                <ReportContainer />
                } */}
                <div className="report-container">
                    <a href={report} className="report-link"><img src={Q22021} alt="Q2 2021" className="report-cover" /></a>
                </div>
            </div>
            <div className="privacy-cta-container">
                    <div className="cta-container">
                        <a href="https://survey.loxz.com/#/privacy-policy" className="link cta">
                            <div className="cta-text">privacy policy</div>
                            {/* <img src={right} alt="" className="cta-img" /> */}
                        </a>
                    </div>
            </div>
            </>
        )
    }
}

export default Reports;