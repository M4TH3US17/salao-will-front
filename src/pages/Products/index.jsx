import Header     from '../../components/Header'
import Categories from '../../components/Users';
import React  from 'react';

export default function Products({isDarkTheme}) {
    return (
        <>
          <Header isDarkTheme={isDarkTheme}/>
          <Categories isDarkTheme={isDarkTheme}/>
        </>
    );
}