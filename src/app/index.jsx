import React from 'react';
import {render} from 'react-dom';
import FocusedComponent from './focused_component.jsx';
import CarouselComponent from './carousel_component.jsx';
import shows from './shows.js';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {focusedShow: props.shows[0]};
  }

  // needs to set current show id in state from url
  // needs a function to go through shows and select one based on id
  // need to store the id? or just the show?

  render () {
    return (
      <main>
        <CarouselComponent shows={this.props.shows}/>
        <FocusedComponent show={this.state.focusedShow}/>
      </main>
    );
  }
}

render(<AppComponent shows={shows}/>, document.getElementById('app'));
