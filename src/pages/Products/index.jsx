import Header from '../../components/Header'
import React  from 'react';
import Filter from '../../components/Filter';
import Slide  from '../../components/Slide';
import Card from '../../components/Card';
import Pagination   from '../../components/Pagination';
import {Content, SideBar, Services } from './styled.jsx';
import Agendamentos from '../../components/Modal/Agendamentos';
import './styled.jsx';

export default function Products({isDarkTheme}) {
    return (
        <>
          <Agendamentos isDarkTheme={isDarkTheme}/>
          <Header isDarkTheme={isDarkTheme}/>
          <div className='slide-mobile'><Slide isDarkTheme={isDarkTheme}/></div>

          <Content isDarkTheme={isDarkTheme}>

            <Services className={'container'}>
              <Filter isDarkTheme={isDarkTheme}/>
              <div className="row">
                <Card src={'https://tse4.mm.bing.net/th?id=OIP.GJ1SFTyYMpQianUTOPnp3wHaHa&pid=Api&P=0'}/>
                <Card src={'https://tse4.mm.bing.net/th?id=OIP.jzO9EsdQ2VZ8yOCK8JSiGgHaEj&pid=Api&P=0'}/>
                <Card src={'https://tse3.mm.bing.net/th?id=OIP.1YB4gZ5bI6HN_b6fhVsqRQHaE7&pid=Api&P=0'}/>
                <Card src={'https://tse4.mm.bing.net/th?id=OIP.Pcswsg0b6jSpCwEmNPz1igHaE8&pid=Api&P=0'}/>
                <Card src={'https://tse4.mm.bing.net/th?id=OIP.T-jH68v9qJQ0mN4dy8FC2AHaFV&pid=Api&P=0'}/>
                <Card src={'https://tse1.explicit.bing.net/th?id=OIP.aKV9zg4hfDgBuvtuttoNvAHaE5&pid=Api&P=0'}/>
              </div>
              <Pagination isDarkTheme={isDarkTheme}/>
          </Services>
          
          <SideBar isDarkTheme={isDarkTheme}>
            <h2 className='sidebar-title'>Contato</h2>
            
            <a className={'sidebar-contact'} href='https://www.instagram.com/math3us.css/' target='_blank'>
              <img className='contact-img' alt=''
              src='https://tse2.mm.bing.net/th?id=OIP.1W_BKDho-qc4YbRIGvtNpwHaE7&pid=Api&P=0'/>
              <p className='contact-description'>Siga-nos em nossa página do Instagram </p>
            </a>

            <a className={'sidebar-contact'} href='#' target='_blank'>
              <img className='contact-img' alt=''
              src='https://tse3.mm.bing.net/th?id=OIP.trtVQmrlAFVfWfKqQ4M45AHaE8&pid=Api&P=0'/>
              <p className='contact-description'>Entre em contato (92) 8135-4154</p>
            </a>
              
            <h2 className='sidebar-title'>Anúncios</h2>
            <Slide isDarkTheme={isDarkTheme} className={'slide-desktop'}/>
        </SideBar>
      </Content>
        </>
    );
}