import React,  { 
    useEffect, 
    useState }from 'react';
import Menu   from './../Menu';
import Search from '../Search/index';
import { Header as Heading } from './styled.jsx';
import './styled.jsx';

export default function Header({isDarkTheme}) {
    return (
    <Heading isDarkTheme={isDarkTheme}>
        <Search isThemeDark={isDarkTheme}/>
        <Menu isDarkTheme={isDarkTheme}/>
    </Heading>);
}