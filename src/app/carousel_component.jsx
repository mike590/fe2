import React from 'react';
import CarouselShowComponent from './carousel_show_component.jsx';

class CarouselComponent extends React.Component {

  render() {
    return (
      <section id='carousel-section'>
        {this.props.shows.map((show) => {
          return <CarouselShowComponent show={show} key={show.id}/>;
        })}
      </section>
    )
  }

}

export default CarouselComponent;
