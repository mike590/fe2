import React from 'react';
import {render} from 'react-dom';
import CarouselComponent from './carousel_component.jsx';
import FocusedComponent from './focused_component.jsx';
import shows from './shows.js';

class AppComponent extends React.Component {



  render () {
    return (
      <div>
        <CarouselComponent shows={this.props.shows}/>
        <FocusedComponent show={this.props.shows[0]}/>
      </div>
    );
  }
}

render(<AppComponent shows={shows}/>, document.getElementById('app'));
