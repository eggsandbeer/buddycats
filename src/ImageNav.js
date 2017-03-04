import * as React from 'react';

function handleActiveClass(index, activeIndex) {
  if(index === activeIndex){
    return {
      borderBottom: '8px solid rgb(1, 255, 194)'
    }
  }
}

const ImageNav = (props) =>
  <div className="nav clearfix flex">
    {props.images.map((image, i) =>
      <div key={`nav-item-${i}`} >
        <img
          className="fit"
          style={handleActiveClass(i, props.activeImageIndex)}
          alt={image.tag + 'as a nav item'}
          src={image.src}
          onClick={() => props.handleNavClick(i) }
        />
      </div>
    )}
  </div>

export default ImageNav;
