import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import '../styles/HelloWorld.css';


const HelloWorld = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setImageUrl('https://covers.openlibrary.org/b/isbn/'+ inputValue +'-L.jpg');
    setInputValue('');
  };

  return (
    <div>
      <h1 className="heading">
        <span>B</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span>-</span>
        <span>C</span>
        <span>o</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span>-</span>
        <span>G</span>
        <span>e</span>
        <span>n</span>
        <span>e</span>
        <span>r</span>
        <span>a</span>
        <span>t</span>
        <span>o</span>
        <span>r</span>
      </h1>
      <div>
        <div className='QueryComponents'>
          <input
            id="change_image"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder='ISBN'
          />
          <button onClick={handleSubmit}>Bring up image</button>
        </div>
        <img src={imageUrl}/>
      </div>
      <br />
      <Link href="/">Take me back, I hate it here.</Link>
    </div>
  );
};

export default HelloWorld;
