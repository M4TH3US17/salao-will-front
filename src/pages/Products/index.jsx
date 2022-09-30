import Header from '../../components/Header'
import React  from 'react';
import Filter from '../../components/Filter';
import Slide  from '../../components/Slide';
import Card   from '../../components/Card';
import UserList   from '../../components/UserList';
import {Listing} from './styled.jsx';
import './styled.jsx';

export default function Products({isDarkTheme}) {
    return (
        <>
          <Header isDarkTheme={isDarkTheme}/>
          <Slide  isDarkTheme={isDarkTheme}/>

          <Listing isDarkTheme={isDarkTheme}>
          <div className={'list-cards container'}>
          <Filter isDarkTheme={isDarkTheme}/>
          <div className="row">
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse3.mm.bing.net/th?id=OIP.pQddbgubkrKauXcz8-Gw8AHaE8&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse3.mm.bing.net/th?id=OIP.AT1nqDRHw_dQ9hAY67wwzwHaEo&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse4.mm.bing.net/th?id=OIP.h6FEzb73WAzGplcGsdn7iQHaEK&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse4.mm.bing.net/th?id=OIP.VZiEDKiRc5oasW9L4hqXKgHaE3&pid=Api&P=0'}/>
            </div>
            
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse1.mm.bing.net/th?id=OIP.-I7pxqh-i5N_t42KDt8oFAHaFj&pid=Api&P=0'}/>
            </div>

            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
              <Card src={'https://tse1.mm.bing.net/th?id=OIP.-I7pxqh-i5N_t42KDt8oFAHaFj&pid=Api&P=0'}/>
            </div>
          </div>

          <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
          </div>

          <div className={'sidebar'}>
            <UserList />
          </div>
          </Listing>
        </>
    );
}