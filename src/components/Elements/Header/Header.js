import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'rebass';



const Display = styled(Flex)`
    background-color: #9FB5A8;  
    margin-bottom: 15px;

`;
const H1 = styled.h1`
    font-family: 'Georgia', serif;
    margin-left: 10%;
`;


const Header = props => (
//<Link to='/'>
    <Display>
        <H1>{props.title}</H1>
    </Display>
//</Link>
);




export default Header;