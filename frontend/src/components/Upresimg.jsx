import React, { useState, useEffect } from 'react';
import '../styles/Upresimg.css';
import axios from 'axios';


// import pic from '/Users/lordvoldemort/django_react/Nebula/frontend/src/images/Upsampled/rashmika.png'


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputImage,setInputImage] = useState();
  const [outImage, setOutImage] = useState();



  const path = '/Users/lordvoldemort/django_react/Nebula/frontend/src/images/Upsampled/';

  useEffect(()=>{
    async function geturl(){
      try{
        const outImage = await axios.get('http://localhost:8000/supres/')
        console.log(outImage.data[outImage.data.length-1]['inp'].slice(7))
        console.log(typeof outImage.data[outImage.data.length-1]['inp'])
        console.log(path+outImage.data[outImage.data.length-1]['inp'].slice(7))
        setOutImage(outImage.data[outImage.data.length-1]['inp'].slice(7))
        
        
        
      } catch(error){
        console.log(error)
      }
    } geturl();

    const interval = setInterval(()=>{
      geturl();
  },60000);
  return()=> clearInterval(interval);

  },[])

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setInputImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission or further processing here
    // For example, you can send the selectedImage to a server
    let formfield= new FormData()
    formfield.append('inp',inputImage)
    axios.post('http://localhost:8000/supres/',formfield)
    console.log('Submitted:', inputImage);
  };

  console.log(outImage)
  console.log(typeof outImage)

  return (
    <>
    <div className="image-uploader">
      <form onSubmit={handleSubmit}>
        <div className="image-preview">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
        <div className="file-input">
          <input type="file" accept="image/*" onChange={handleImageChange} id="file" />
          <label htmlFor="file">Select Image</label>
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>

    <div className="out">
      <h3 className="hd">Last Resolution Revived Image</h3>
      
      {/* <img src={require(`../images/Upsampled/kiara.jpeg`)} alt="Processing..." /> */}
      <img src={`../images/Upsampled/${outImage}`} alt="Processing..." />
      {/* <img src={outImage} alt="Processing..."></img> */}
    </div>
    </>
  );
};

export default ImageUploader;
