import Header from '../../components/Header'
import React  from 'react';
import Filter from '../../components/Filter';
import Slide  from '../../components/Slide';
import Card   from '../../components/Card';
import {Listing} from './styled.jsx';
import './styled.jsx';

export default function Products({isDarkTheme}) {
    return (
        <>
          <Header isDarkTheme={isDarkTheme}/>
          <Slide  isDarkTheme={isDarkTheme}/>
          <Filter isDarkTheme={isDarkTheme}/>

          <Listing>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse3.mm.bing.net/th?id=OIP.pQddbgubkrKauXcz8-Gw8AHaE8&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse3.mm.bing.net/th?id=OIP.AT1nqDRHw_dQ9hAY67wwzwHaEo&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse4.mm.bing.net/th?id=OIP.h6FEzb73WAzGplcGsdn7iQHaEK&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse1.mm.bing.net/th?id=OIP.03Ci5zQEBG5MCbsNxKBuswHaFj&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse4.mm.bing.net/th?id=OIP.VZiEDKiRc5oasW9L4hqXKgHaE3&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <Card src={'https://tse1.mm.bing.net/th?id=OIP.-I7pxqh-i5N_t42KDt8oFAHaFj&pid=Api&P=0'}/>
            </div>
          </div>
          </Listing>
        </>
    );
}