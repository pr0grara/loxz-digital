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
        let shadow = document.querySelector('#take-survey');
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
           'AhCdegfT', //secondary
        //    'xF6ZyWUR', //primary
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
                        <div className="fade-in" data-delay="500">These days it's all about the data... but it only really helps us if we can properly analyze it to extract meaningfull insights...</div>
                        <div className="fade-in" data-delay="4000">So how can we determine if we are ready to leverage our data with technologies like Machine Learning?</div>
                        <div className="fade-in" data-delay="3000">At Loxz, we are building a suite of tools not only to deploy ML models but also to understand if you are ready to use these powerful tools.</div>
                        <div className="fade-in" data-delay="4500">We have developed an assesment which helps us understand your companies level of readiness and will soon provide you with reccomendations!</div>
                        <div className='fade-in' data-delay="4500">Please take 5 min and use our free ML readiness assesment!</div>
                        <div className="fade-in button-container" data-delay="1000">
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