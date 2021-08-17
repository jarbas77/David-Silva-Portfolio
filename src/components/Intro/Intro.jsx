import "./Intro.scss";
import { init } from 'ityped';
import { useEffect,useRef } from "react";

export default function Intro() {
    //Used for ityped packaged

    const textRef = useRef();

    useEffect(()=>{
            init(textRef.current, { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Web Developer', 'UI/UX Designer', 'Software Developer'] 
            });
        },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/eu.png" alt="It's me but I don't take photos"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, My name is </h2>
                    <h1>David Silva</h1>
                    <h3>and I'm a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="downarrow"/>
                </a>   
            </div>
        </div>
    )
}
