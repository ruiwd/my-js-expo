import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import white from '../projectAssets/threeDCard/bootWhite.png';
import black from '../projectAssets/threeDCard/bootBlack.png';
import croc from '../projectAssets/threeDCard/bootCroc.png';
import gold from '../projectAssets/threeDCard/bootGold.png';
import grey from '../projectAssets/threeDCard/bootGrey.png';
import red from '../projectAssets/threeDCard/bootRed.png';
import snake from '../projectAssets/threeDCard/bootSnake.png';
import snakeB from '../projectAssets/threeDCard/bootSnakeB.png';
import snakeP from '../projectAssets/threeDCard/bootSnakeP.png';
import snakeW from '../projectAssets/threeDCard/bootSnakeW.png';

function ThreeDCard () {

  const [shoeColor, setShoeColor] = useState('white');
  const [shoeSize, setShoeSize] = useState('5');

  useEffect(()=>{
    document.querySelector(`.colorContainer button[data-color='${shoeColor}']`).classList.add('active');
    document.querySelector(`.sizeContainer button[data-size='${shoeSize}']`).classList.add('active');
    document.getElementById(shoeColor).classList.add('show')
  });

  useEffect(()=> {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
    const circle = document.querySelector('.shoe .circle');
    const title = document.querySelector('.info h1');
    const description = document.querySelector('.info h3');
    const color = document.querySelector('.info .color');
    const sizes = document.querySelector('.info .sizes');
    const purchase = document.querySelector('.info .purchase button');
    const shoe = document.querySelectorAll('.shoe img');

    container.addEventListener('mousemove', e => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });

    container.addEventListener('mouseenter', e => {
      card.style.transition = `none`;
      circle.style.transform = `translateZ(150px)`;
      title.style.transform = `translateZ(200px)`;
      description.style.transform = `translateZ(150px)`;
      color.style.transform = `translateZ(150px)`;
      sizes.style.transform = `translateZ(150px)`;
      purchase.style.transform = `translateZ(200px)`;
      shoe.forEach(img => {
        img.style.transform = `translateZ(250px) rotateZ(-25deg)`;
      }) 
    });

    container.addEventListener('mouseleave', e => {
      card.style.transform = `none`;
      card.style.transition = `all 0.75s ease`;
      circle.style.transform = `translateZ(0px)`;
      title.style.transform = `translateZ(0px)`;
      description.style.transform = `translateZ(0px)`;
      color.style.transform = `translateZ(0px)`;
      sizes.style.transform = `translateZ(0px)`;
      purchase.style.transform = `translateZ(0px)`;
      shoe.forEach(img => {
        img.style.transform = `translateZ(0px) rotateZ(0deg)`;
      }) 
    });

    document.querySelectorAll('.color button').forEach(button => {
      button.addEventListener('click', () => {
        if (document.querySelector('.colorContainer button.active')) {
          document.querySelector('.colorContainer button.active').classList.remove('active');
        };

        document.querySelector('.shoe img.show').classList.remove('show');

        
        const userColor = button.dataset.color;
        setShoeColor(userColor);
      })
    })

    document.querySelectorAll('.sizes button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.sizeContainer button.active').classList.remove('active');

        const userSize = button.dataset.size;
        setShoeSize(userSize);
      })
    })
  },[])

 return(
   <div className="threeDCard">
     <div className="container">
       <div className="card">         
        <div className="shoe">
          <div className="circle"></div>
          <img id="white" src={white} alt="Marc Fisher Ulani Heeled Bootie" className="show"/>
          <img id="black" src={black} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="grey" src={grey} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="gold" src={gold} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="red" src={red} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="croc" src={croc} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="snake" src={snake} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="snakeB" src={snakeB} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="snakeW" src={snakeP} alt="Marc Fisher Ulani Heeled Bootie"/>
          <img id="snakeP" src={snakeW} alt="Marc Fisher Ulani Heeled Bootie"/>
        </div>
        <div className="info">
          <h1>Ulani Heeled Bootie</h1>
          <h3>A pointed toe and elongated upper style the sleek Ulani boot, finished with an inner zipper.</h3>
          <div className="color selection">
            <h4>Color:</h4>
            <div className="colorContainer buttonContainer">
              <button data-color="white">White Leather</button>
              <button data-color="black">Black Leather</button>
              <button data-color="grey">Grey Leather</button>
              <button data-color="red">Dark Red Leather</button>
              <button data-color="gold">Gold Leather</button>
              <button data-color="croc">Natural Croc</button>
              <button data-color="snake">Snake</button>
              <button data-color="snakeB">Black Snake</button>
              <button data-color="snakeW">White/Grey Snake</button>
              <button data-color="snakeP">Pink Snake</button>
            </div>
          </div>
          <div className="sizes selection">
            <h4>Size:</h4>
            <div className="sizeContainer buttonContainer">
              <button data-size="5">5</button>
              <button data-size="6">6</button>
              <button data-size="7">7</button>
              <button data-size="8">8</button>
              <button data-size="9">9</button>
            </div>
          </div>
          <div className="purchase">
            <button>Purchase</button>
          </div>
        </div>
       </div>
     </div>
   </div>
 )
}

export default ThreeDCard;