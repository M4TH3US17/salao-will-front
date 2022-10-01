import styled     from "styled-components";
import * as color from "../../config/colors";

export const Pagination = styled.nav`
.page-link {
    border:     1px solid gray;
    color:      ${props => props.isDarkTheme ? color.secondaryFontDarkColor : ''};
    background: ${props => props.isDarkTheme ? color.primaryDarkColor : 'white'};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.01), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.page-link:hover { color: ${props => props.isDarkTheme ? '#ddd' : ''}; }
`;

export const Container = styled.div`
display:         flex;
align-items:     center;
justify-content: center;
`;