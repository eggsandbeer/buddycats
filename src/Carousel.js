import * as React from 'react';
import Swipeable from 'react-swipeable';

const Carousel = (props) =>
  <div
    className="CarouselOverflow clearfix"
    style={{
      width: `${window.innerWidth * (props.images.length+2) }px`
    }}
  >
    <div className="FakeImage left" />
    {props.images.map((image, i) =>
      <Swipeable
        className="left ImageContainer"
        onSwiped={props.handleSwipe.bind(this)}
        key={`image-${i}`}
        
      >
        <div
          className="block mx-auto Image"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />
      </Swipeable>
    )}
    <div className="FakeImage left" />
  </div>

export default Carousel;
