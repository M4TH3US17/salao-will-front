import styled from "styled-components";
import * as color from "../../config/colors";

export const Container = styled.div`
width:      100%;
height:     250px;
margin-top: 31px;

.each-slide-effect > div {
    display:         flex;
    align-items:     center;
    justify-content: center;
    background-size: cover;
    height:          350px;
}

.indicator {
    cursor:     pointer;
    padding:    10px;
    text-align: center;
    border:     1px #666 solid;
    margin:     0;
  }
  
  .indicator.active {
    color:      #fff;
    background: #666;
  }

@media (min-width: 1000px) { display: none; }
@media (max-width: 760px) {
  .each-slide-effect > div { 
    height:     200px;
    margin-top: 20px; 
    opacity:    1 !important;
}
}`;

export const Image = styled.img`
height:   244px; 
width:    100%;
position: absolute;
filter:   blur(0.4px);
opacity:  0.4;
`;