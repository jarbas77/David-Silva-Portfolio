import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    
    //grabs data on id, icon, title, description, a (link) and image.
    {
        id: "1",
        icon: "./assets/house.png",
        title: "Palumbo Design",
        desc:"Palumbo Design has earned its reputation as a premier modern home designer and development company in California. ",
        a:"https://palumbodesign.netlify.app/",
        img:"assets/Home.jpg",
    },
    {
        id: "2",
        icon: "./assets/phone.png",
        title: "Ocean Bank",
        desc:"Ocean Bank Inc it's not just a bank, it's your friend who will help you grow financially in any way.",
        a:"https://oceanbankinc.netlify.app/",
        img:"assets/Ocean.png",
    },
    {
        id: "3",
        icon: "./assets/www.png",
        title: "ISMT 2020 Website",
        desc:"Website made for ISMT Multimedia degree for the year 2020.",
        img:"assets/ismt.png",
    },
  ];

  //starts always with the left image, if way is 0 (currentslide as it's the beginning), right is 1 and 2. if left is -1 goes to 2. 
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);      
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Phone Icon" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Latest Projects</span>
                </div>
              </div>
              <div className="right">        
                <a href={d.a}>
                    <img src={d.img}/>
                </a>  
              </div>
            </div>
          </div>
          ))}
      </div>
        <img src="assets/arrow.png" className="arrow left" alt="Arrow" onClick={() => handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="Arrow" onClick={() => handleClick()}/>
    </div>
  );
}