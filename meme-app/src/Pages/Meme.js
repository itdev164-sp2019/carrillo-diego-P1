import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../TextInput/TextInput';
import { Box } from 'rebass';



const Display = styled(Box)`
    background-color: #fff;
    text-align: center;
    width: 70%;
`;

var Canvas = styled.canvas`
    text-align: center;
    width: 70%;
    border: 1px;
    margin-top: 1px;
    
`;

var SelMeme= styled.img`
`;

class Meme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.img,
            top: '',
            bottom: ''
            
            
        };
        
    }

    onload = () => {
        var c = document.getElementById.canvas;
        var ctx = c.getContext('2d');
        var img = document.getElementById.image;
        ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
        ctx.font = "Comic Sans MS 40px";
        ctx.fillStyle = "black";
        ctx.fillText(this.state.top, 130, 50);
        ctx.fillText(this.state.bottom, 130, 300 );

        };
    

    changeText = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

        
    
    render() {
        return(
            <Display>
                <Canvas ref='canvas' width={window.innerHeight} width={window.innerWidth}/>
                <SelMeme ref='image' src={this.state.image} />
                <Box>
                    <Input changeText={this.state.changeText} />
                </Box>
            </Display>
        )
    }

}

export default Meme;