import styled     from "styled-components";
import * as color from "../../config/colors";

export const Content = styled.section`{
display:         flex;
justify-content: space-between;
height:          92vh;
`;

export const SideBar = styled.div`
  width:       400px; 
  padding:     10px;
  color:       ${props => props.isDarkTheme ? '#ddd' : 'black'};
  border-left: 1px solid ${props => props.isDarkTheme ? color.secondaryDarkColor : '#ddd'};
  background:  ${props => props.isDarkTheme ? color.primaryDarkColor : 'white'};

  .sidebar-title { font-size: 18px; }

  .sidebar-contact {
    display:       flex;
    margin-bottom: 4px;
    border:        1px solid ${props => props.isDarkTheme ? color.secondaryDarkColor : '#ddd'};
    padding:       2px;
    border-radius: 3px;
    color:       ${props => props.isDarkTheme ? '#ddd' : 'black'};
    text-decoration: none;
    background:  ${props => props.isDarkTheme ? 'none' : 'rgba(0,0,0,0.02);'};
  }

  .contact-img {
    width:         100px;
    border-radius: 3px;
  }

  .contact-description { margin-left: 4px; }

  @media (max-width: 760px) {display: none;}
`;

export const Services = styled.div`
width: 100%;

.row { width:98%;}
@media (min-width: 1024px) { overflow-y: scroll; }
`;