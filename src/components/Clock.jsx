import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      name: 'John',
      date: new Date().toLocaleTimeString(),
      darkMode: false,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // React Component Life cycle
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    // document.querySelector('input').removeEventListener();
  }

  tick() {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  handleClick = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <div>
        <h3>{this.state.date}</h3>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <h2>Class component {this.state.name}</h2>
        <button onClick={this.handleClick}>Click Me</button>
        <p style={{ backgroundColor: this.state.darkMode && 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis
          aliquam, odit explicabo amet quaerat totam expedita, accusantium
          praesentium magnam architecto commodi quam voluptatibus quia doloribus
          consequuntur voluptatum? Voluptas, iure!
        </p>
      </div>
    );
  }
}

export default Clock;
