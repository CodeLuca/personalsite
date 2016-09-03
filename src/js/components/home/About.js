import React from "react";

import '../../../scss/about.scss';

export default class About extends React.Component {

  render() {
    return (
      <div id='about-container'>
        <div class='row'>
          
          {/** Image on Left Side */}
          <div class='col-sm-4 about-photo-container'>
            <img src='https://pbs.twimg.com/profile_images/765962694562373632/ZhOryrQV_400x400.jpg'/> 
          </div>

          {/** About Me Text */}
          <div class='col-sm-8 about-text-container'>
            <h1>A LITTLE BIT ABOUT ME.</h1>
            <h2>I'm Luca. a 15 year old developer who's been programming for around 5 years. My general interest in technology, has lead me to be interested in working on learning new things everyday. In the time I should be doing homework, I'm: Designing things on Photoshop and Sketch, Programming projects, Livestreaming on livecoding.tv, Tweeting: @CodeLuca.</h2>
          </div>
        </div>
      </div>
    );
  }
}