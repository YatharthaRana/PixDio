import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import "../styles/Audio.css";
import audenhnce from "../images/AudioEnhnce.jpg";
import speech from "../images/SpeechText.png";
import musgen from '../images/MusicGen.jpg';
import voice from "../images/VoiceGen.jpg";

function Audio() {
  return (
    <>
    <div className='audcards'>
    <CardGroup>
      <Card>
        <Card.Img src={speech}  />
        {/* <img classname='thumbnail' src={Textimg} /> */}
        <Card.Body>
            <Link to= '/textaud'>
            <Button variant="danger">VoxScribe</Button>
            </Link>
        
          <Card.Text>
          <p className='info'>
          With our Speech-to-Text feature, effortlessly convert spoken words or audio recordings into 
          accurate written text. Seamlessly transcribe interviews, lectures, podcasts, and more, 
          enabling easy accessibility and efficient content creation.
            </p>
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        <Card.Img src={voice} />
      {/* <img classname='thumbnail' src={Age} /> */}
        <Card.Body>
          <Card.Title>
          <Link to= '/makevoice'>
            <Button variant="danger">Vox Genius</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Experience the magic of Voice Synthesis as our advanced algorithms generate natural-sounding, 
            lifelike voices. Whether for audiobooks, voice-overs, or personalized voice assistants, 
            immerse yourself in a world where AI breathes life into speech, capturing the nuances and 
            inflections of human expression.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <img classname='thumbnail' src={musgen} />
        <Card.Body>
          <Card.Title>
          <Link to= '/maketune'>
            <Button variant="primary">Sound Alchemy</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Enter a realm of musical creativity with our Music Generation feature. Let AI compose 
            original melodies or generate music tailored to your desired genre, mood, or style. Unleash 
            the power of AI-driven composition, fueling your projects with captivating soundscapes and 
            harmonious tunes.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <img classname='thumbnail' src={audenhnce} />
        <Card.Body>
          <Card.Title>
          <Link to= '/upaud'>
            <Button variant="danger">Aud Revive</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Elevate your audio quality with our Audio Enhancement feature. AI algorithms analyze and 
            adjust parameters such as volume, equalization, and spatial effects, breathing new life 
            into your recordings. Experience crystal-clear sound and immersive audio that captivates 
            and engages your audience.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>

    
    </div>
    </>
  )
}

export default Audio