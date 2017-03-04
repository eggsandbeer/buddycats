import * as React from 'react';

const NavButtons = (props) =>
  <div className="clearfix mb2">
    <div className="col col-6">
      <button className="btn block right p2 mr1" onClick={props.handlePrevEvent.bind(this)}>
        PREV
      </button>
    </div>
    <div className="col col-6">
      <button className="btn left p2 ml1" onClick={props.handleNextEvent.bind(this)}>
        NEXT
      </button>
    </div>
  </div>

export default NavButtons;
