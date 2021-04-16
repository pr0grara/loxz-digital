import React from 'react';
import * as typeformEmbed from '@typeform/embed'
import { Button, Container, Row, Col } from 'react-bootstrap';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.reference = () => {};
        this.launchSurvey = this.launchSurvey.bind(this);
    }
    
    componentDidMount() {
        let faders = document.querySelectorAll('.fade-in');
        let shadow = document.querySelector('#take-survey');

        for (let i = 0; i < faders.length; i++) {
            setTimeout(() => faders[i].classList.add('appear'), i * 35);
            setTimeout(() => faders[i].classList.remove('appear'), i * 35 + 3000);
        }

        setTimeout(() => {
            shadow.style.boxShadow = "#0d6efd 0px 0px 1000px 1000px";
        }, 2000);

        setTimeout(() => this.launchSurvey(), 3000);
    }
    
    launchSurvey() {
        // let closeButton = document.createElement('div');
        // closeButton.className = 'close';
        // closeButton.innerText = 'close';
        const reference = typeformEmbed.createSlider(
           'AhCdegfT',
        //    'xF6ZyWUR',
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
                <Row>
                    <div id='div-sentence'>
                        <div className='fade-in'>Prepare to harness the Power of Machine Learning in less than 7 minutes?</div>
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
                </Row>
                <Row>
                    <div id='take-survey'></div>                    
                </Row>
            </Container>
        )
    }
}

export default Landing;