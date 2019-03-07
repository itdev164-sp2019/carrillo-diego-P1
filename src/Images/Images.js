import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
    cursor: pointer;
    float: left;
    height: 150px;
    width: 150px;
`;

const Images = props => (
    //<Link to ='/Modal'>
    <Box>
        <Img src={props.img} alt='' />
    </Box>
    //</Link>
);

export default Images;



