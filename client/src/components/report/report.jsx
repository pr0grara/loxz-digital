import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import report from '../../pdfs/21Q2Report.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.pageNumber = 1;
        this.scroll = this.scroll.bind(this);
        this.keydown = this.keydown.bind(this);
        this.scrollTime = Date.now();
        this.width = 1500;
        this.height = 0;
        this.format = "";
    }

    display() {

    }

    componentDidMount() {
        this.format = ((window.innerHeight / window.innerWidth) < 0.57) ?  "HEIGHT" : "WIDTH";
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.setState(() => this.height)
        this.setState(() => this.width)
        this.setState(() => this.format)
        document.addEventListener('wheel', this.scroll)
        document.addEventListener('keydown', this.keydown)
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.scroll)
        document.removeEventListener('keydown', this.keydown)
    }

    keydown(e) {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") this.onForward()
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") this.onBackward()
    }

    scroll(e) {
        if (e.wheelDeltaY < 0 && e.wheelDeltaY > -30) return;
        if (e.wheelDeltaY > 0 && e.wheelDeltaY < 30) return;
        let now = Date.now();
        if (now - this.scrollTime < 1000) return;
        this.scrollTime = now;
        if (e.wheelDeltaY < 0) {
            this.onForward(e)
        } else if (e.wheelDeltaY > 0) {
            this.onBackward(e)
        }
    }

    onForward(e) {
        if (this.pageNumber > 23) return;
        this.pageNumber = this.pageNumber + 1;
        this.setState(() => this.pageNumber);
    }

    onBackward(e) {
        if (this.pageNumber < 2) return;
        this.pageNumber = this.pageNumber - 1;
        this.setState(() => this.pageNumber);
    }

    render() {
        return (
            <div className="pdf-container">
                <Document file={report} onLoadError={console.error} >
                    <Page pageNumber={this.pageNumber} width={this.format === "WIDTH" ? this.width : 0} height={this.format === "HEIGHT" ? this.height : 0}/>
                </Document>
            </div>
        )
    }
}

export default Report;