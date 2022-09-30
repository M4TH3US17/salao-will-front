import styled     from "styled-components";
import * as color from "../../config/colors";

export const NavService = styled.nav`
display:         flex;
justify-content: space-between;
align-items:     center;
color:           ${props => props.isDarkTheme ? color.primaryFontLightColor : 'black'};
span {
    font-weight: ${props => props.isDarkTheme ? 'none' : '500'};
}

.btn-agendamento:hover {
    color:      black;
    background: ${props => props.isDarkTheme ? '#8ab4f8' : '#20c997'};
    border:     none;
}

.btn:hover { border:none; }

@media (min-width: 1000px) { 
    margin:   8px 0px 5px 0px;
    padding:  0px 100px 0px 100px;
    .description-filter { 
        display:    none; 
        position:   absolute; 
        margin-top: 2px;
        z-index:    1;
    }
    button:hover .description-filter{ display:block; }
 }
 @media (max-width: 760px) { 
    padding:  0px 17px 0px 15px;
    .description-filter {display: none;} margin-bottom: 8px; }
`;

export const ButtonFilter = styled.button`
height:    30px;
width:     50px; 
padding:   0px;
font-size: 11px;
color:     ${props => props.isDarkTheme ? color.primaryFontLightColor : 'black'};
background: none;
border:     none;

i {
    font-size: 16px;
    cursor:    pointer;
}
`;

export const ButtonAgendamento = styled.button`
height:    27px;
width:     89px;
font-size: 11px;
padding:   0px;
border:    none;

background: ${props => props.isDarkTheme ? '#8ab4f8' : '#20c997'};
`;