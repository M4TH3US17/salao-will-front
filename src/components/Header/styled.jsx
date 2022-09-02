import styled     from "styled-components";
import * as color from "../../config/colors";

export const Header = styled.header`
display:         flex;
justify-content: space-between;
align-items:     center;
padding:         10px;

border-bottom: ${props => props.isDarkTheme ? color.secondaryDarkColor : ''} 0.5px solid;
background:    ${props => props.isDarkTheme ? color.primaryDarkColor     : color.primaryVioletColor};
color:         ${props => props.isDarkTheme ? color.primaryFontDarkColor : color.primaryFontLightColor};
`;