import React, { useState } from 'react';
import "./Product.css";
const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };


  return (
    <div className='product-page'>
      
  <div className='company'>
<div className='header'>
      <h1>AKIO</h1>
      <ul className='list'>
            <li>
        <a href="#" className='list1'>Home</a>
            </li>
            <li>
            <a href="#" className='list2'>Cart</a>

            </li>
            <li>
            <a href="#" className='list3'>Filter</a>
            </li>
        </ul>
        </div>
     </div>
     <div className='content-container'>
      <div className='image-container'>
      {selectedColor  && <img src={'tshirt/tshirt-' + selectedColor + '.jpg'} 
      alt={'T-shirt in ' + selectedColor } />}     
       </div>
       <div className='info-container'>
      <div className='btn-container'> 
      <h2>Casual T-Shirt</h2>
      <p>lorem ipsum brand is a unisex wear offered by AKIO </p>
      
      <h3>Mega sale is on live</h3>
      <div className='color-type'> 
        <h2> Select Color:</h2>
        <button className='red_btn' onClick={() => handleColorChange('red')}>R</button>
        <button className='blue_btn' onClick={() => handleColorChange('blue')}>B</button>
        <button className='black_btn' onClick={() => handleColorChange('black')}>G</button>
          <button className='yellow_btn' onClick={() => handleColorChange('yellow')}>Y</button>
          </div>
          <div className='size'>
        <h2 >Select Size: </h2>
      
      <button  className='btn-size'>S</button>
        <button  className='btn-size'>M</button>
        <button  className='btn-size'>L</button>
        <button>XL</button>
        </div>
        
        </div>

  <div className='quan'>
    <h2>Quantity:</h2>
      <select>
       
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      </div>
    <div className="price">
          <p>Price: $20  <button className='buy'>Buynow</button></p>
        
    
    </div>
    </div>
    </div>
    </div>
  

  );
};

export default ProductPage;