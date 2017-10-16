import React from 'react';

require('./styles.scss') 

class FocusedComponent extends React.Component {

  render() {
    let img_url = '/app' + this.props.show.product_image_url;
    // let img_width =
    return (
      <section id='focused-section'>
        <img src={img_url} width="200px"/>
        <h6>Episodes: {this.props.show.episodes}</h6>
        <h4>{this.props.show.title}</h4>
      </section>
    );
  }

}

export default FocusedComponent;
