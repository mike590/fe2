import React from 'react';
import FocusedComponent from './focused_component.jsx';
import CarouselComponent from './carousel_component.jsx';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'focusedShow': this.findShowById()};
  }

  findShowById() {
    let showId = parseInt(this.props.match.params.id) || 1;
    return this.props.shows.filter((show) => {
      return show.id === showId
    })[0]
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
};

export default AppComponent;
