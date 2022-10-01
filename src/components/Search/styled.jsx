import styled     from "styled-components";
import * as color from "../../config/colors";

export const Researcher = styled.div`
display: flex;

input {
  padding: 4px;
  width:   300px;
  outline: none;

  color:            ${props => props.isThemeDark ? color.primaryFontLightColor :  color.primaryDarkColor};
  background-color: ${props => props.isThemeDark ? color.secondaryDarkColor : ''};

  border:                     none;
  border-bottom-left-radius:  20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius:     20px;
  border-top-right-radius:    20px;
}

.bi.bi-search {
    position: absolute;
    top:      14px;
    left:     19px;
    color:  ${props => props.isThemeDark ? color.primaryFontDarkColor : color.primaryVioletColor};
}

.btn {
  border: none;
  padding: 0px;
}

@media (max-width: 760px){  
  width: 100%;
  input { width: 380px; }
}
`;