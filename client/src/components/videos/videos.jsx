import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.server = window.location.href.split("/#/")[0];
    }
    
    componentDidMount() {
        console.log(this.server)
    }
    
    render() {
        
        return (
            <Container className='frame'>
                <Row>
                    <div className="videos-container">
                        <video controls src={this.server + "/api/videos/video/?title=file_example_MP4_480_1_5MG.mp4"} className="video"></video>
                    </div>                    
                </Row>
            </Container>
        )
    }
}

export default Video;