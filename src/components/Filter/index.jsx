import React from 'react';
import {ButtonFilter, ButtonAgendamento, NavService} from './styled.jsx';
import './styled.jsx';

export default function Filter({isDarkTheme}) {
    return (
        <NavService isDarkTheme={isDarkTheme}>
            <span>Serviços</span>

            <div className={'d-flex align-items-center'}>

               <ButtonFilter
               isDarkTheme={isDarkTheme}> 
               <i className="bi bi-sliders"></i>
               <div className="description-filter">Filtro de serviços</div>
               </ButtonFilter>

               <ButtonAgendamento 
               className={'btn btn-agendamento'} 
               isDarkTheme={isDarkTheme}>
                Agendamentos
               </ButtonAgendamento>
            </div>
        </NavService>);
};