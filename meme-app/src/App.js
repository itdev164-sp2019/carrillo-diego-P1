import React, { Component } from 'react';
import Header from '../src/components/Elements/Header/Header';
import Footer from '../src/components/Elements/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom'
import { imageFile } from './ImgSource'
import Images from './Images/Images';
import Meme from './Pages/Meme'
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

  Click = index => {
    let state = this.state.images;
    state.index = index;
    this.setState({ state });
  };


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header title={this.state.title} />
         <div className="Home">
        <h2>Select Image and Create Meme</h2>
        <Route  path='/' exact={true}
        render={() => (
          <Collection memes={this.state.images.images} click={this.Click} />
        )}
        />
        <Route path='/Meme' exact={true}
        render={() => (
          <Meme img={this.state.images.images[this.state.images.index]} />  
        )}
          />
          </div>
      <Footer Ftitle={this.state.Ftitle}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;






  
