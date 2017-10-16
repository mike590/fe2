import React from 'react';
import FocusedComponent from './focused_component.jsx';
import CarouselComponent from './carousel_component.jsx';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    let showId = parseInt(props.match.params.id) || 1;
    this.state = {'focusedShow': this.findShowById(showId)};
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id !== this.props.match.params.id) {
        this.setState(this.handleIdChange);
    }
  }

  findShowById(showId) {
    let focusedShow = this.props.shows.filter((show) => {
      return show.id === showId
    })[0];
    return focusedShow
  }

  handleIdChange(prevState, props) {
    let showId = parseInt(props.match.params.id) || 1;
    return {'focusedShow': this.findShowById(showId)}
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
