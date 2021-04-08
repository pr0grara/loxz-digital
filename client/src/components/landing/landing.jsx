import React from 'react';
import * as typeformEmbed from '@typeform/embed'
import { Button, Container, Row, Col } from 'react-bootstrap';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.reference = () => {};
        this.launchSurvey = this.launchSurvey.bind(this);
    }

    display() {

    }

    
    async componentDidMount() {
        let faders = document.querySelectorAll('.fade-in');
        let shadow = document.querySelector('#take-survey-button');
        // debugger
        for (let i = 0; i < faders.length; i++) {
            // debugger
            // if (i === faders.length - 1) {
            //     setTimeout(() => faders[i].classList.add('appear'), 4000);
            //     return
            // } 
            setTimeout(() => faders[i].classList.add('appear'), i * 2000 + 1500);
        }
        setTimeout(() => {
            shadow.style.boxShadow = "#0d6efd 0px 0px 1000px 1000px";
        }, 4000)
        setTimeout(() => this.launchSurvey(), 7000)
    }
    
    launchSurvey() {
        let closeButton = document.createElement('div');
        closeButton.className = 'close';
        closeButton.innerText = 'close';
        const reference = typeformEmbed.createSlider(
           'xF6ZyWUR',
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
        closeButton.onclick = () => reference.close();
        document.querySelector('.frame').append(closeButton)
    }

    render() {
        
        return (
            <Container className='frame'>
                <Row>
                    <Col xs={6} className='fade-in'>Get ready to (re)discover Machine Learning...</Col>
                </Row>
                {/* <Row>
                    <Col xs={6} className='fade-in'>to (re)discover...</Col>
                </Row>
                <Row>
                    <Col className='fade-in'>Machine Learning?</Col>
                </Row> */}
                <Row>
                    <div id='take-survey-button' className='fade-in'></div>
                    
                    {/* <button id="take-survey-button" className='fade-in' onClick={this.launchSurvey}>let's go</button> */}
                </Row>
            </Container>
            // <div className='fade-in'>hello</div>
        )
    }
}

export default Landing;