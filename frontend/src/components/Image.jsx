import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Textimg from '../images/StableDiffusion GAN girl.png';
import '../styles/Image.css';
import Age from '../images/agechange.png';
import faceswap from '../images/Faceswap.png';
import bodypose from '../images/bodypost.png';
import enhance from '../images/Upres.jpg';
import bw from '../images/bandw.jpg';

function Image() {
  return (
    <>
    <div className='cards'>
    <CardGroup>
      <Card>
        <Card.Img src={Textimg}  />
        {/* <img classname='thumbnail' src={Textimg} /> */}
        <Card.Body>
            <Link to= '/textimg'>
            <Button variant="primary">Word Canvas</Button>
            </Link>
        
          <Card.Text>
          <p className='info'>
            Unleash your imagination with our Text to Image feature. Transform written ideas
            into stunning visual representations. Simply input your descriptive text, and watch 
            as our AI-powered technology brings your words to life, generating vibrant and 
            captivating images that match your imagination.
            </p>
          </Card.Text>
        </Card.Body>
    
      </Card>
      {/* <Card>
        <Card.Img src={Age} />
      {/* <img classname='thumbnail' src={Age} /> 
        <Card.Body>
          <Card.Title>
          <Link to= '/youthold'>
            <Button variant="danger">Youthful Vistage</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Rediscover your youthful glow with our Face Rejuvenation feature. Our advanced AI 
            technology analyzes your facial features and applies intelligent enhancements to 
            reduce signs of aging, smooth out wrinkles, and rejuvenate your appearance. Let our 
            algorithms help you achieve a refreshed and youthful look in your photos.
            </p>
          </Card.Text>
        </Card.Body>
      </Card> */}

      <Card>
      <img classname='thumbnail' src={faceswap} />
        <Card.Body>
          <Card.Title>
          <Link to= '/faceswap'>
            <Button variant="danger">Face Morphix</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Step into someone else's shoes, or rather, someone else's face, with our Face Swap feature. 
            Seamlessly exchange faces in photos with just a few clicks. Whether you want to have some 
            fun with friends or explore the possibilities of a different look, our AI-driven Face Swap 
            technology allows you to effortlessly switch faces while maintaining realistic and convincing results.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <img classname='thumbnail' src={bw} />
        <Card.Body>
          <Card.Title>
          <Link to= '/colorize'>
            <Button variant="danger">Chroma Magic</Button>
            </Link>
            </Card.Title>
          <Card.Text>
            <p className="info">
            Transform your black and white memories into vibrant and colorful experiences with our 
            Colorization of Image feature. Our cutting-edge AI technology adds rich and realistic 
            colors to grayscale images, breathing life into moments captured in the past. Reimagine 
            history and relive cherished memories as you witness monochrome photos blossom into vivid 
            compositions.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
    <img classname='thumbnail' src={enhance} />
        <Card.Body>
          <Link to= '/upsimg'>
            <Button variant="primary">Reso Revive</Button>
            </Link>
            <Card.Text>
            <p className='info'>
            Unlock the power of detail with our Upscale Image feature. Watch your low-resolution or 
            pixelated images come to life with enhanced clarity and sharpness. Our AI algorithms 
            employ advanced upscaling techniques to intelligently analyze and reconstruct image 
            details, resulting in high-resolution visuals that breathe new life into your photos.
            </p>
            </Card.Text>
        </Card.Body>
      </Card>


    </CardGroup>

    <CardGroup>
    {/* <Card>
    <img classname='thumbnail' src={bodypose} />
        <Card.Body>
          <Card.Title>
          <Link to= '/bodyposture'>
            <Button variant="danger">Pose Perfecto</Button>
            </Link>

            </Card.Title>
          <Card.Text>
            <p className="info">
            Present yourself with confidence and poise using our Body Posture feature. Our AI-powered 
            system analyzes your body posture in photos and offers intuitive suggestions to improve 
            your stance, body language, and overall appearance. Enhance your presence in photos and 
            exude self-assurance with our intelligent body posture optimization.
            </p>
          </Card.Text>
        </Card.Body>
      </Card> */}

    
      
    </CardGroup>
    </div>
    </>
  )
}

export default Image