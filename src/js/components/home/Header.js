import React from "react";

import '../../../scss/header.scss';

export default class Header extends React.Component {

  scroll() {
    smoothScroll.animateScroll( '#about-container' );
  }

  render() {
    return (
      <div>
        <div id='title-container'>
          <h1 class='title animated fadeInDownBig'>LUCA MARCHAL.</h1>
          <h1 class='subtitle animated fadeInLeftBig'><i>WEB DEVELOPER. PROJECT MAKER. GRAPHIC DESIGNER.</i></h1>
        </div>
        <i class="fa fa-angle-down animated fadeIn" onClick={this.scroll.bind(this)}></i>
      </div>
    );
  }
}
