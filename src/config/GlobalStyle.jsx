import { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";

export default createGlobalStyle`

body {
background: ${props => props.isDarkTheme ? color.primaryDarkColor : '#ffffff'};
}`;