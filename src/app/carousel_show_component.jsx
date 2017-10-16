import React from 'react';
import { Link } from 'react-router-dom'

class CarouselShowComponent extends React.Component {

  render() {
    let img_url = '/app' + this.props.show.product_image_url;
    let linkTo = '/' + this.props.show.id;
    // let img_width =
    return (
      <Link to={linkTo} className='carousel-show'>
        <img src={img_url} width="200px"/>
        <h4>{this.props.show.id}</h4>
      </Link>
    );
  }

}

export default CarouselShowComponent;
