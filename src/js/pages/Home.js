import React from "react";

import Header from '../components/home/Header'
import About from '../components/home/About'
import Skills from '../components/home/Skills'

export default class Home extends React.Component {

  render() {
    return (
      <div>
        
        {/** Header Component - Contains Title & Subtitle. */}
        <Header />

        {/** About Component - Contains an About Me. */}
        <About />

        {/** Skills Component - Contains Rated Programming Skills. */}
        { /** <Skills /> */}

      </div>
    );
  }
}
