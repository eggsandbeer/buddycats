import React, { Component } from 'react';
import images from './images';
import Carousel from './Carousel';
import ImageNav from './ImageNav';
import NavButtons from './NavButtons';
import scrollTo from './scrollTo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImageIndex: 0,
      scrollSpeed: 250,
    }
  }
  handleNextEvent(){
    let index;

    // Handle End of Images index edge case
    if(this.state.activeImageIndex === images.length - 1) {
      index = 0;
      const distanceToGoOver = (images.length+1) * window.innerWidth;

      scrollTo(this.mainImageContainer, distanceToGoOver , this.state.scrollSpeed, (() => {
        this.mainImageContainer.scrollLeft = 0;
        const distanceToComeBack = (index+1) * window.innerWidth;

        scrollTo(this.mainImageContainer, distanceToComeBack, this.state.scrollSpeed);
      }));

    } else {
      index = this.state.activeImageIndex+1;
      scrollTo(this.mainImageContainer, (index+1) * window.innerWidth, this.state.scrollSpeed);
    }

    this.setState({
      activeImageIndex: index,
    });
  }
  handlePrevEvent(){
    let index;

    // Handle 0 index edge case
    if(this.state.activeImageIndex === 0) {
      index = images.length-1;

      scrollTo(this.mainImageContainer, 0, this.state.scrollSpeed, (() => {
        this.mainImageContainer.scrollLeft = (index + 2) * window.innerWidth;
        const distanceToComeBack = (index + 1) * window.innerWidth;

        scrollTo(this.mainImageContainer, distanceToComeBack, this.state.scrollSpeed);
      }));

    } else {
      index = this.state.activeImageIndex-1;
      scrollTo(this.mainImageContainer, (index+1) * window.innerWidth, this.state.scrollSpeed);
    }

    this.setState({
      activeImageIndex: index,
    });
  }
  handleSwipe(e, x){
    if(x < -100 || x > 100 ){
      if(x < 0){
        this.handlePrevEvent();
      } else {
        this.handleNextEvent();
      }
    } else {
      scrollTo(this.mainImageContainer, (this.state.activeImageIndex+1) * window.innerWidth, this.state.scrollSpeed);
    }
  }
  handleImageNavClick(index){
    this.setState({
      activeImageIndex: index,
    });

    scrollTo(this.mainImageContainer, (index+1) * window.innerWidth, this.state.scrollSpeed);
  }
  componentDidMount(){
    scrollTo(this.mainImageContainer, this.state.activeImageIndex+1 * window.innerWidth, this.state.scrollSpeed);
  }
  render() {
    return (
      <div className="MasterContainer mt2">
        <div
          className="Carousel mb2"
          ref={(mainImageContainer) => {this.mainImageContainer = mainImageContainer;}}
        >
          <Carousel
            images={images}
            handleSwipe={this.handleSwipe.bind(this)}
          />
        </div>
        <NavButtons
          handlePrevEvent={this.handlePrevEvent.bind(this)}
          handleNextEvent={this.handleNextEvent.bind(this)}
        />
        <ImageNav
          images={images}
          activeImageIndex={this.state.activeImageIndex}
          handleNavClick={this.handleImageNavClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
