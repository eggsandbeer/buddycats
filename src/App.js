import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import images from './images';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageIndex: 0,
    }
  }
  handleNextEvent(){
    let index;

    if(this.state.activeImageIndex === images.length - 1) {
      index = 0;
    } else {
      index = this.state.activeImageIndex+1;
    }

    this.setState({
      activeImageIndex: index,
    });
  }
  handlePrevEvent(){
    let index;

    if(this.state.activeImageIndex === 0) {
      index = images.length-1;
    } else {
      index = this.state.activeImageIndex-1;
    }

    this.setState({
      activeImageIndex: index,
    });
  }
  handleImageNavClick(index){
    this.setState({
      activeImageIndex: index,
    });
  }
  handleActiveClass(index){
    if(index === this.state.activeImageIndex){
      return {
        borderBottom: '8px solid rgb(1, 255, 194)'
      }
    }
  }
  render() {
    return (
      <div>
        <div className="clearfix mt1 mb1">
          <Swipeable
            className="col col-12"
            onSwipedRight={this.handlePrevEvent.bind(this)}
            onSwipedLeft={this.handleNextEvent.bind(this)}
          >
          {/*
            So, normally here I would bring in some css modules or postcss
            to handle my js inline styles here, but create-react-app is a
            little limited in it's styling and doesn't give me a a good
            webpack entry point, so it's bit hacky..
          */}
            <div
              className="block mx-auto"
              style={{
                height: '300px',
                backgroundImage: `url(${images[this.state.activeImageIndex].src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }}
              alt={images[this.state.activeImageIndex].tag}
              src={images[this.state.activeImageIndex].src}
            />
          </Swipeable>
        </div>
        <div className="clearfix mb2">
          <div className="col col-6">
            <button className="btn block right p2 mr1" onClick={this.handlePrevEvent.bind(this)}>
              PREV
            </button>
          </div>
          <div className="col col-6">
            <button className="btn left p2 ml1" onClick={this.handleNextEvent.bind(this)}>
              NEXT
            </button>
          </div>
        </div>
        <div className="nav clearfix flex">
        {images.map((image, i) =>
          <div key={`nav-item-${i}`} >
            <img
              className="fit"
              style={this.handleActiveClass(i)}
              alt={image.tag + 'as a nav item'}
              src={image.src}
              onClick={()=> this.handleImageNavClick(i) }
            />
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default App;
