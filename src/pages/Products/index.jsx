import Header from '../../components/Header'
import React  from 'react';
import Slide  from '../../components/Slide';

export default function Products({isDarkTheme}) {
    return (
        <>
          <Header isDarkTheme={isDarkTheme}/>
          <Slide  isDarkTheme={isDarkTheme}/>
        </>
    );
}