import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const Base = styled(Box)`
    background-color: #9FB5A8;
    height: 80px;
    width: 100%;
    margin-top: 1px;
    bottom: 0px;
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
