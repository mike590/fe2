import React from 'react';

require('./styles.scss')

class FocusedComponent extends React.Component {

  render() {
    let img_url = '/app' + this.props.show.product_image_url;
    return (
      <section id='focused-section'>
        <img src={img_url} width="200px"/>
        <summary id="focused-show-episodes">{this.props.show.episodes} Episodes</summary>
        <summary id="focused-show-title">{this.props.show.title}</summary>
      </section>
    );
  }

}

export default FocusedComponent;
