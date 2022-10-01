import React  from 'react';
import {Pagination as Btn, Container} from './styled.jsx';
import './styled.jsx';


export default function Pagination({isDarkTheme}) {
    return (
      <Container>
    <Btn aria-label="Page navigation example" isDarkTheme={isDarkTheme}>
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</Btn>
</Container>);
}