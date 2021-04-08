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
        // debugger
        for (let i = 0; i < faders.length; i++) {
            // debugger
            if (i === faders.length - 1) {
                setTimeout(() => faders[i].classList.add('appear'), 8000);
                return
            } 
            setTimeout(() => faders[i].classList.add('appear'), i * 2000 + 1500);
        }
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
            <Container fluid className='frame'>
                <Row>
                    <Col className='fade-in'>Are you ready...</Col>
                </Row>
                <Row>
                    <Col className='fade-in'>to discover...</Col>
                </Row>
                <Row>
                    <Col className='fade-in'>Machine Learning?</Col>
                </Row>
                <Row>
                    <Button id="take-survey-button" className='fade-in' onClick={this.launchSurvey}>let's go</Button>
                </Row>
            </Container>
        )
    }
}

export default Landing;