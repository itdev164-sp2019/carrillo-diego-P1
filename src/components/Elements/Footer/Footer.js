import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const Base = styled(Flex)`
    background-color: #9FB5A8;
    height: 100px;
    margin-top: 40px;
`;
const H2 = styled.h2`
    font-family: 'Georgia', serif;
    margin-left: 10%;;
`;


const Footer = props => (
    <Base>
    <H2>{props.Ftitle}</H2>
    </Base>
);

export default Footer;
