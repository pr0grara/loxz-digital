import React from 'react';
import * as typeformEmbed from '@typeform/embed'
import { Container, Row } from 'react-bootstrap';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.reference = () => {};
        this.launchSurvey = this.launchSurvey.bind(this);
    }
    
    componentDidMount() {
        let faders = document.querySelectorAll('.fade-in');
        // let shadow = document.querySelector('#take-survey');
        let delay = 0;

        for (let i = 0; i < faders.length; i++) {
            delay = delay + parseInt(faders[i].dataset.delay);
            // debugger
            setTimeout(() => faders[i].classList.add('appear'), delay);
            // setTimeout(() => faders[i].classList.remove('appear'), i * 35 + 3000);
        }

        // setTimeout(() => {
        //     shadow.style.boxShadow = "#0d6efd 0px 0px 1000px 1000px";
        // }, 2000);

        // setTimeout(() => this.launchSurvey(), 3000);
    }
    
    launchSurvey() {
        // let closeButton = document.createElement('div');
        // closeButton.className = 'close';
        // closeButton.innerText = 'close';
        const reference = typeformEmbed.createSlider(
        //    'AhCdegfT', //secondary
           'xF6ZyWUR', //primary
           {
               mode: 'drawer_left',
            //    autoClose: 5,
            //    hideHeaders: true,
            //    hideFooters: true,
           }
       )   
       // setTimeout(function () {
       //     reference.close()
       // }, 10000)
        reference.open();
        // closeButton.onclick = () => reference.close();
        // document.querySelector('.frame').append(closeButton)
    }

    render() {
        
        return (
            <Container className='frame'>
                <div className="paragraph-container">
                    <div className="paragraph">
                        {/* <div className="fade-in" data-delay="500">Welcome to Loxz Digital!  We are a machine learning collective based in Berkeley, CA.</div>
                        <div className="fade-in" data-delay="2000">These days it’s all about the data... and it helps if your organization can confidently analyze and extract meaningful insights from that data.</div>
                        <div className="fade-in" data-delay="4500">At Loxz, our team of data scientists and solutions engineers are developing a toolkit to help you understand your data, identify your unique problem statement and efficiently create and deploy Machine Learning Models.</div>
                        <div className="fade-in" data-delay="6000">To assist you further, we have designed an assessment that helps us better understand your level of exposure to Machine Learning and will soon provide you with targeted recommendations.</div>
                        <div className='fade-in' data-delay="6000">Here is the link to take your ML Readiness Assessment. Thanks.</div> */}
                        <div className="fade-in" data-delay="750">The Loxz Digital Organizational Machine Learning Readiness survey is the premiere organizational assessment to understand your machine learning readiness.</div>
                        <div className="fade-in" data-delay="4000">Whether you are a seasoned leader showcasing your strengths, an innovator seeking insightful benchmarking intelligence, a performer who is trying to take their machine learning to the next level, or an observer wondering where to begin - The Loxz Digital Organizational Machine Learning Readiness survey is for you!</div>
                        <div className="fade-in button-container" data-delay="2500">
                            <div className="button" onClick={this.launchSurvey}>Lets Go!</div>
                        </div>
                    </div>
                    <div id='div-sentence'>
                        {/* <div className='fade-in'>P</div>
                        <div className='fade-in'>r</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>p</div>
                        <div className='fade-in'>a</div>
                        <div className='fade-in'>r</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>&nbsp;</div>
                        <div className='fade-in'>t</div>
                        <div className='fade-in'>o</div>
                        <div className='fade-in'>&nbsp;</div>
                        <div className='fade-in'>(</div>
                        <div className='fade-in'>r</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>)</div>
                        <div className='fade-in'>d</div>
                        <div className='fade-in'>i</div>
                        <div className='fade-in'>s</div>
                        <div className='fade-in'>c</div>
                        <div className='fade-in'>o</div>
                        <div className='fade-in'>v</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>r</div>
                        <div className='fade-in'>&nbsp;</div>
                        <div className='fade-in'>M</div>
                        <div className='fade-in'>a</div>
                        <div className='fade-in'>c</div>
                        <div className='fade-in'>h</div>
                        <div className='fade-in'>i</div>
                        <div className='fade-in'>n</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>&nbsp;</div>
                        <div className='fade-in'>L</div>
                        <div className='fade-in'>e</div>
                        <div className='fade-in'>a</div>
                        <div className='fade-in'>r</div>
                        <div className='fade-in'>n</div>
                        <div className='fade-in'>i</div>
                        <div className='fade-in'>n</div>
                        <div className='fade-in'>g</div>
                        <div className='fade-in'>.</div>
                        <div className='fade-in'>.</div>
                        <div className='fade-in'>.</div> */}
                    </div>
                </div>
                <Row>
                    <div id='take-survey'></div>                    
                </Row>
            </Container>
        )
    }
}

export default Landing;