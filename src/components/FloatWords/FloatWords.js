import React from 'react';
import Link from 'gatsby-link';

import './FloatWords.scss';

class FloatWords extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      top1: 0
    };

    this.top = this.top.bind(this);
    this.repeat = this.repeat.bind(this);
  }

  componentDidMount() {
    this.repeat();
  }

  top() {
    let y = Math.floor(Math.random() * 550);
    let y1 = Math.floor(Math.random() * 550);
    this.setState({
      top: y + 'px',
      top1: y1 + 'px'
    });
  }
  repeat() {
    setInterval(this.top, 2500);
  }
  render() {
    console.log(this.state);
    const style = {
      position: `absolute`,
      top: `90%`,
      left: `10%`,
      // transition: `1s`,
      fontSize: `2.5em`
    };

    return (
      <div className="floats">
        <div style={{ left: '9%', animationDuration: '9s', animationTimingFunction: 'linear' }}>html5</div>
        <div style={{ left: '18%', animationDuration: '15s', animationTimingFunction: 'ease-in-out' }}>react</div>
        <div style={{ left: '27%', animationDuration: '16s', animationTimingFunction: 'ease-out' }}>javascript</div>
        <div style={{ left: '36%', animationDuration: '7s', animationTimingFunction: 'ease-in' }}>css3</div>
        <div style={{ left: '45%', animationDuration: '10s', animationTimingFunction: 'linear' }}>es6</div>
        <div style={{ left: '54%', animationDuration: '9s', animationTimingFunction: 'ease-out' }}>json</div>
        <div style={{ left: '63%', animationDuration: '10s', animationTimingFunction: 'ease-in' }}>git</div>
        <div style={{ left: '72%', animationDuration: '11s', animationTimingFunction: 'ease-in-out' }}>
          front-end developer
        </div>
        <div style={{ left: '81%', animationDuration: '8s', animationTimingFunction: 'linear' }}>passion</div>
        <div style={{ left: '90%', animationDuration: '15s', animationTimingFunction: 'ease' }}>sass</div>
      </div>
    );
  }
}
export default FloatWords;
