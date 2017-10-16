import React from 'react';
import { Link } from 'react-router-dom'

class CarouselShowComponent extends React.Component {

  render() {
    let img_url = '/app' + this.props.show.product_image_url;
    let linkTo = '/' + this.props.show.id;
    return (
      <Link to={linkTo} className='carousel-show'>
        <figure>
          <img src={img_url} />
        </figure>
        <summary class='carousel-id'>{this.props.show.id}</summary>
      </Link>
    );
  }

}

export default CarouselShowComponent;
