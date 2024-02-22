import React, { Component } from 'react'
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <section id='home'>
      <div className="content">
          <h3>Start Your Day with a <br/> Fresh Coffee</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, doloremque! 
              <br/>Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button id="btn">Shop Now</button>
      </div>
      </section>
      </div>
    )
  }
}
