import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Link } from 'react-router-dom';


const Label = styled.label`
    font-family: 'Ariel';
    margin-top: 2px;
    margin: 10px;
`;

const Input = styled.input`
    background-color: #d5e8c2;
`;

const Form = styled.form`
    text-align: center;
    margin-top: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    background-color: #f2c8ab;
    color: black;
    height:30px;
    width: auto;
    margin: 35px;
    

`;

const TextInput = props => (
    <Box>
        <Form>
            <Label name='topLabel'>Top Text:</Label>
            <Input name='topText' placeholder='This is the top text' length='30'/>
            <Label name='bottom text'>Bottom Text:</Label>
            <Input name='bottomText' placeholder='This is the top text' length='30'/> 
         </Form>
         <Button>Download</Button>
        <Link to='/'>
        <Button>Home</Button>
        </Link> 
        
    </Box>
);

export default TextInput;