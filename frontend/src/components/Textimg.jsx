import React, { useState, useEffect } from 'react';
import '../styles/Textimg.css';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [urldata, setURLData] = useState('');

  useEffect(()=>{
    async function geturl(){
      try{
        const urldata = await axios.get('http://localhost:8000/texttoimage/')
        console.log(urldata.data[urldata.data.length -1]['url'])
        setURLData(urldata.data[urldata.data.length-1])
      } catch(error){
        console.log(error)
      }
    } geturl();

    const interval = setInterval(()=>{
      geturl();
  },60000);
  return()=> clearInterval(interval);

  },[])

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  function handleSearch(event){
    event.preventDefault();
    let formfield = new FormData()
    formfield.append('description',searchTerm)

    axios.post('http://localhost:8000/texttoimage/', formfield)
    console.log('Done')


  }

  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      <div className='searchbutton'>
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className='outputimg'>
        <h2>Our Last Generated Image</h2>
        <h3>{urldata['description']}</h3>
        <img src={urldata['url']} alt="Generating" />
      </div>
      </>
    
  );
};

export default SearchBar;
