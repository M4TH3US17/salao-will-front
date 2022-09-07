import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Container, Image } from './styled';
import { Slide as Slides } from 'react-slideshow-image';

const indicators = (index) => (<div className="indicator">{index + 1}</div>);

export default function Slide() {
    const images = [
        "https://tse2.mm.bing.net/th?id=OIP.E5E8wvh-NWXDCdGERy1sMgHaEo&pid=Api&P=0",
        "https://tse4.mm.bing.net/th?id=OIP.eP08W1BxOK4wyxtqAWuSpgHaE8&pid=Api&P=0",
        "https://tse2.mm.bing.net/th?id=OIP.M-JCEt41MtuhuwvnZ7hA2QHaEo&pid=Api&P=0"
    ]; 

    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    return (
        <Container className='slide-container'>
            <Image src={images[0]} />

            
            <Slides {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`}}></div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`}}></div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}></div>
            </div>
            </Slides>
        </Container>
    );
}