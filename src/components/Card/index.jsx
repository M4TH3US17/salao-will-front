import React from 'react';
import {Card as CardService} from './styled.jsx';
import './styled.jsx';

export default function Card({isDarkTheme, src, isAdmin}) {
    return (
        <CardService>
            <img src={src} alt=''/>

            <div className={'card-description'}>
                <h5 className={"card-title"}>Imagem</h5>
                <p className={"card-subtitle"}>bla bla bla bla</p>
            </div>
        </CardService>
    );
};