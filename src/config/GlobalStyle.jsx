import { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";

export default createGlobalStyle`

body {
background: ${props => props.isDarkTheme ? color.primaryDarkColor : '#ffffff'};

@media (min-width: 1000px) {
    .slide-desktop      {display: block;} 
    path, .slide-mobile {display: none;}
}
@media (max-width: 760px)  { 
    .slide-mobile  {display: block;}
}
}`;