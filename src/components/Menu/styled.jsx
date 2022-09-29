import styled     from "styled-components";
import * as color from "../../config/colors";

export const Menu = styled.nav`
display:         flex;
justify-content: space-between;

.bi.bi-list:hover + div { display: block}

.menu-item { margin-right: 20px; }

.menu-item:hover {
    cursor:  pointer;
    color:   ${props => props.isDarkTheme ? color.secondaryFontDarkColor : color.secondaryFontLightColor};
}

.menu-icon { font-size: 20px; }

@media (max-width: 760px) {
    width:    100%;
    position: absolute;
    left:     0px;
    top:      52px;

    border-top:       ${props => props.isDarkTheme ? color.secondaryDarkColor : color.primaryVioletColor} 0.5px solid;
    border-bottom:    ${props => props.isDarkTheme ? color.secondaryDarkColor : ''} 0.5px solid;
    background-color: ${props => props.isDarkTheme ? color.primaryDarkColor : color.primaryVioletColor};
    justify-content:  space-between;
    justify-content:  space-around !important;
}
`;

export const MenuList = styled.div`
display:  none;
position: absolute;
top:      52px;
right:    0px;
padding:  9px;
width:    200px;
z-index:  11;

box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.10);
border:     ${props => props.isDarkTheme ? color.secondaryDarkColor : '#ececec'} 0.5px solid;
background: ${props => props.isDarkTheme ? color.primaryDarkColor   : color.secondaryVioletColor};

.menuList-item { color: ${props => props.isDarkTheme ? color.primaryFontLightColor : 'black'}; }

.menuList-item:hover {
    cursor:        pointer;
    background:    ${props => props.isDarkTheme ? color.secondaryDarkColor : color.primaryFontLightColor};
    border-radius: 2px;
}

header {
    font-size:   20px;
    font-weight: 600;
    color:         ${props => props.isDarkTheme ? color.primaryFontLightColor : 'black'};
    border-bottom: ${props => props.isDarkTheme ? color.secondaryDarkColor : '#ddd'} 1px solid;
}

@media (max-width: 760px) { top: 83px; }
`;