import React, {useState, useEffect} from 'react';
import {ModalAgendamento, ModalEffect} from './styled.jsx';
import './styled.jsx';

export default function Agendamentos({isDarkTheme}) {
    const [show, setShow] = useState('none');
    
    document.addEventListener('click', e => {
        const click = e.target;
        
        if(click.classList.contains('btn-agendamento')) setShow('');
        if(click.classList.contains('btn_close'))       setShow('none');
    });

    return (
        <>
        <ModalEffect style={{display: show}}/>
        <ModalAgendamento className={'container'} isDarkTheme={isDarkTheme} style={{display: show}}>
            <div className='d-flex justify-content-between'>
                <h5>Agendamentos</h5>

                <div>
                    <i className="bi bi-sliders"></i>
                    <button className='btn btn-danger btn-clear'>Limpar</button>
                </div>
            </div>

            <div className='scroll'>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Data/Hora</th>
                        <th scope="col">Serviço</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>C1</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S2</td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td>C1</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>C2</td>
                        <td>dd-mm-yyyy HH:mm</td>
                        <td>S1</td>
                        <td></td>
                    </tr>
            </tbody>
        </table>
        </div>

        <div className='d-flex justify-content-center'><button className='btn btn-danger btn_close'>Fechar</button></div>
    </ModalAgendamento>
    </>);
};