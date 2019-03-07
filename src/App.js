import React, { Component } from 'react';
import  styled from 'styled-components';
import Header from '../src/components/Elements/Header/Header';
import Footer from '../src/components/Elements/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom'
import { imageFile } from './ImgSource'
import Images from './Images/Images';

import './App.css';

const Collection = props => (
  props.memes.map((img, value) => (
    <Images img={img} click={props.click} index={value} />
  ))
);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        images: [
          imageFile.meme1.source,
          imageFile.meme2.source,
          imageFile.meme3.source,
          imageFile.meme4.source,
          imageFile.meme5.source,
          imageFile.meme6.source,
          imageFile.meme7.source,
          imageFile.meme8.source,
          imageFile.meme9.source
        ],
        index: 0
      },
      title: 'Meme Generator',
      Ftitle: 'Carrillo LLC'
    };
  }


  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
         <p>
           Hello World
           <Collection memes={this.state.images.images} />
         </p>
          

        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      <Footer Ftitle={this.state.Ftitle}/>
      </div>
    );
  }
}

export default App;






  
