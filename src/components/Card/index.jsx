import React from 'react';
import {Card as CardService} from './styled.jsx';
import './styled.jsx';

export default function Card({isDarkTheme, src, isAdmin}) {
    return (
        <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
        <CardService className={'card-service'}>
            <img src={src} alt=''/>

            <div className={'card-description'}>
                <h5 className={"card-title"}>Imagem</h5>
                <p className={"card-subtitle"}>bla bla bla bla</p>
            </div>
        </CardService>
        </div>
    );
};