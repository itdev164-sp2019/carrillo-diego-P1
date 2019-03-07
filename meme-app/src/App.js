import React, { Component } from 'react';
import  styled from 'styled-components';
import Header from '../src/components/Elements/Header/Header';
import Footer from '../src/components/Elements/Footer/Footer';
//import { BrowserRouter, Route } from 'react-router-dom'
import { imageFile } from './ImgSource'

import './App.css';

class App extends Component {
   constructor (props) {
     super(props);
   
      this.state = {
        images: {
          images: [
              imageFile.image1.source
          ],
        },
        title: 'Meme Generator',
        Ftitle: 'Carrillo LLC' 
      }
   
   
    }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            //className="App-link"
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
