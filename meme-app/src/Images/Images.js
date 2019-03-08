import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

var Img = styled.img`
    cursor: pointer;
    Float: left;
    height: 200px;
    width: 200px;
    margin:40px;
    
`;

const Images = props => (
    <Link to ='/Meme'>
    <Box alignImgs='center'>
        <Img src={props.img} alt='' />
    </Box>
    </Link>
);

export default Images;



