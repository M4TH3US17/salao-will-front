import styled     from "styled-components";
import * as color from "../../config/colors";

export const Card = styled.div`
width:    300px;
height:   200px;
color:    white; 
position: relative;
cursor:   pointer;

margin-left: 10px;

.card-description {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.02));
    position:   absolute;
    bottom:     0px;
    width:      100%;

    border-bottom-left-radius:  3px;
    border-bottom-right-radius: 3px;
}

img {
    width:     100%;
    height:        100%;
    border-radius: 3px;
}

.card-title, .card-subtitle {
margin-left: 10px; 
opacity: 0.9;
}
`;