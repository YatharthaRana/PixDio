import React from 'react';
import Img from '../images/Img.jpg';
import Aud from '../images/Aud.jpg';
import Vid from '../images/Vid.jpg';
import Card from 'react-bootstrap/Card';
import '../styles/Services.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Services() {
  return (
    <>
      <div className="card">
      <Card>
      <Card.Header>
      <h4 className='hed'>
        Pixel Alchemy
        </h4>
        </Card.Header>
        <img className='serimg' src={Img} />
        <Card.Body>
          <Card.Text>
            <p className="descr">
            Discover a world of transformative possibilities with our AI-powered toolkit. From Text to 
            Image, where ideas come alive in stunning visual form, to Face Rejuvenation, unveiling a 
            refreshed version of yourself, and Face Swap, allowing playful transformations at the click 
            of a button. Enhance your presence with Body Posture suggestions, upscale image details for 
            impeccable clarity, and colorize monochrome memories for vibrant nostalgia. Unleash your 
            creativity and immerse yourself in a realm where imagination merges seamlessly with AI 
            technology, redefining the way you experience and share visuals.
            </p>
          </Card.Text>
          <Link to='/images'>
          <Button variant="primary">Explore</Button>
          </Link>
          
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Header>
      <h4 className='hed'>
        Neural Notes
        </h4>
        </Card.Header>
        <img className='serimg' src={Aud} />
        <Card.Body>
          <Card.Text>
            <p className="descr">
            Immerse yourself in a world of transformative audio experiences powered by AI. From 
            effortlessly converting spoken words into written text with Speech-to-Text, to generating 
            natural-sounding voices with Voice Synthesis. Explore the depths of creativity with Music 
            Generation, composing original melodies tailored to your desired style, and enhance your 
            audio quality with Audio Enhancement, fine-tuning volume, equalization, and spatial effects. 
            Embrace the boundless possibilities as our AI-powered toolkit revolutionizes the way you 
            interact with sound, unleashing a new realm of immersive and captivating audio experiences.
            </p>
          </Card.Text>
          <Link to='/audio'>
          <Button variant="primary">Explore</Button>
          </Link>
          
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Header>
        <h4 className='hed'>
        Robo Cinematics
        </h4>
        </Card.Header>
        <img className='serimg' src={Vid} />
        <Card.Body>
          <Card.Text>
            <p className="descr">
            Immerse yourself in a realm of transformative video experiences powered by AI. Elevate 
            accessibility and engagement with Video Captioning, automatically generating accurate and 
            synchronized captions for seamless comprehension. Unlock advanced analysis and organization 
            capabilities with Video Object Detection, identifying objects and elements within videos 
            with precision. Unleash your creativity with Deep Fake Video, seamlessly swapping faces and 
            altering appearances to create captivating and imaginative visual narratives. Experience 
            the power of enhancement with Video Upscaling, intelligently improving resolution, clarity, 
            and detail for breathtaking visual quality. Embrace the boundless possibilities as our 
            AI-powered video features redefine storytelling, engagement, and visual excellence, 
            transforming the way you perceive and interact with video content.
            </p>
          </Card.Text>
          <Link to= '/video'>
          <Button variant="danger">Explore</Button>
          </Link>
          
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default Services