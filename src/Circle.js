import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorRandom: ''
    }
    this.toggleColor = this.toggleColor.bind(this);
    this.circle = React.createRef();
    console.log(this.circle);
    this.interval = null;
  }

  toggleColor() {
    const colors = ['blue', 'orange', 'green', 'yellow', 'brown'];
    const newColor = colors[Math.floor(Math.random() * 5)];
    this.setState({
      colorRandom: newColor
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.circle);
    this.interval = setInterval(() => {
      console.log(1);
      this.toggleColor();
    }, 2000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    const { bg } = this.props;
    const { colorRandom } = this.state;
    const styles = {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: (colorRandom || bg)
    };
    return (
      <div ref={this.circle} style={styles} onClick={this.toggleColor}>

      </div>
    );
  }
}

export default Circle;
