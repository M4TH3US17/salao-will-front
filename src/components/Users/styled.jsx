import styled from "styled-components";
import * as color from '../../config/colors';

export const Users = styled.section`
padding: 9px;
display: flex;

background: ${props => props.isDarkTheme ? color.primaryDarkColor : 
'linear-gradient(180deg,'+color.primaryFontLightColor+', #f6f6f6)'};

@media (max-width: 760px) {
    margin-top:      25px;
}
`;

export const User = styled.div`
height:       40px;
width:        40px;
cursor:       pointer;
padding:      1px;
margin-right: 8px;

background: ${props => props.isDarkTheme ? 'black' : color.darkThemeGradient_2};

border-top-left-radius:     50%;
border-top-right-radius:    50%;
border-bottom-left-radius:  50%;
border-bottom-right-radius: 50%;

img {
height: 100%;
width:  100%;
border-radius: 50%;
}

animation:       border-gradient-dark 2s;
animation-delay: 1s;
animation-iteration-count: 3;

@keyframes border-gradient-dark {
    0%   { background: ${color.darkThemeGradient_1} }
    25%  { background: ${color.darkThemeGradient_2} }
    50%  { background: ${color.darkThemeGradient_3} }
    100% { background: ${color.darkThemeGradient_4} }
}
`;

export const Animation = styled.div`
display: flex;
@keyframes pass-users {
    0% {}
    25% {}
    50% {}
    
}
`;