import styled     from "styled-components";
import * as color from "../../../config/colors";

export const ModalAgendamento = styled.div`
display:        flex;
flex-direction: column;
padding:        10px;
max-width:      600px;
position:       fixed;
top:            130px;
left:           28%;
z-index:        3000;
border-radius:  5px;
max-height:     310px;
box-shadow:     0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

background: ${props => props.isDarkTheme ? color.primaryDarkColor : 'white'};
color:      ${props => props.isDarkTheme ? color.primaryFontLightColor  : 'black'};
th {
color:      ${props => props.isDarkTheme ? 'white'  : 'black'};
background: ${props => props.isDarkTheme ? color.secondaryDarkColor  : '#f1f1f1'};
border-bottom: #ddd 1px solid;
}
td { 
    color:      ${props => props.isDarkTheme ? '#ddd'  : 'black'};
    background: ${props => props.isDarkTheme ? ''  : 'rgba(0,0,0,0.02);'};
}

.bi.bi-sliders { margin-right: 10px; cursor: pointer; }

.btn-clear { padding: 1px 5px 1px 5px; }
.btn_close { padding-left:25px; padding-right:25px; margin-top: 4px;}

.scroll { overflow-y: scroll;}

@media (max-width: 760px) { left: 0px; }

animation: open-modal-animation 220ms;

@keyframes open-modal-animation {
    0% { 
        transform:  translateY(-9%); 
        transition: 0.4s;
        opacity:    0.2;
    }

    100% { 
        transform: translateY(0%); 
        opacity:   1;
        transition: 0.1s;
    }
}
`;

export const ModalEffect = styled.div`
height: 100vh;
width:  100vw;
z-index: 4;
position: fixed;

background: rgba(0, 0, 0, 0.3);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(0.7px);
-webkit-backdrop-filter: blur(0.7px);

animation: open-modalEffect-animation 220ms;

@keyframes open-modalEffect-animation {
    0% {
        opacity:         0.8;
        backdrop-filter: blur(0.2px);
    }

    100% { 
        backdrop-filter: blur(0.7px);
        opacity:         1;
        transition:      0.4s;
    }
}
`;