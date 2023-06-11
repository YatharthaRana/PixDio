import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import "../styles/Video.css";

import capt from "../images/Captions.jpeg";
import obje from "../images/Object.jpg";
import deep from "../images/deepfake.png";
import upvi from "../images/UpVid.png";

function Video() {
  return (
    <>
    <div className='vidcards'>
    <CardGroup>
      <Card>
        <Card.Img src={capt}  />
        {/* <img classname='thumbnail' src={Textimg} /> */}
        <Card.Body>
            <Link to= '/textvid'>
            <Button variant="danger">Caption Sense</Button>
            </Link>
        
          <Card.Text>
          <p className='info'>
          Elevate the accessibility and user experience of your videos with our Video Captioning 
          feature. Automatically generate accurate and synchronized captions for your video content, 
          ensuring that viewers can easily follow along, comprehend the dialogue, and engage with the 
          material, regardless of their hearing abilities or language preferences.
            </p>
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        <Card.Img src={obje} />
      {/* <img classname='thumbnail' src={Age} /> */}
        <Card.Body>
          <Card.Title>
          <Link to= '/objdet'>
            <Button variant="danger">Vision Detect</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Unleash the power of AI-driven video analysis with our Video Object Detection feature. 
            Seamlessly detect and identify objects or specific elements within your videos, enabling
            automated tagging, indexing, and advanced search functionalities. From identifying people, 
            animals, or vehicles to recognizing specific actions or events, unlock a wealth of 
            possibilities for content organization and video analysis.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <img classname='thumbnail' src={deep} />
        <Card.Body>
          <Card.Title>
          <Link to= '/deepfake'>
            <Button variant="danger">Meta Morph</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Enter a realm of visual storytelling possibilities with our Deep Fake Video feature. 
            Blend realities and unleash your creativity by seamlessly swapping faces or altering 
            appearances within videos. Whether for entertainment, special effects, or creative 
            expression, dive into the captivating world of deep fake technology, where the line 
            between imagination and reality is beautifully blurred.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <img classname='thumbnail' src={upvi} />
        <Card.Body>
          <Card.Title>
          <Link to= '/upvid'>
            <Button variant="primary">Ultra Vision</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Breathe new life into your videos with our Video Upscaling feature. Unlock the true 
            potential of low-resolution footage as AI algorithms intelligently analyze and enhance 
            the visual quality, increasing resolution, improving clarity, and enriching details. 
            Transform your videos into stunning high-definition creations that captivate and engage 
            viewers with unparalleled visual impact.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>

    
    </div>
    </>
  )
}

export default Video