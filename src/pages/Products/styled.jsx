import styled     from "styled-components";
import * as color from "../../config/colors";

export const Listing = styled.section`{
display:    flex;
justify-content: space-between;
height:     92vh; 

.list-cards { width: 100%; }

.sidebar { 
  width:       400px; 
  border-left: 1px solid ${props => props.isDarkTheme ? color.secondaryDarkColor : '#ddd'};
  background:  ${props => props.isDarkTheme ? color.primaryDarkColor : 'white'};
}

.row {
 width:98%;
}

@media (max-width: 760px) { .sidebar {display: none} }
@media (min-width: 1024px) {.list-cards { overflow-y: scroll; }}
`;