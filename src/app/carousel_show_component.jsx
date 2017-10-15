import React from 'react';

class CarouselShowComponent extends React.Component {

  render() {
    let img_url = '/src/app' + this.props.show.product_image_url;
    // let img_width =
    return (
      <article className='carousel-show'>
        <img src={img_url} width="200px"/>
        <h4>{this.props.show.id}</h4>
      </article>
    );
  }

}

export default CarouselShowComponent;
