import React, { Component } from 'react';

class PopularFunctionsComponent extends Component {
  // Constructor to initialize the component's state
  constructor(props) {
    super(props);

    // State initialization
    this.state = {
      counter: 0,
      inputText: '',
      isVisible: true,
    };
  }

  // Lifecycle method: ComponentDidMount
  componentDidMount() {
    console.log('Component did mount');
  }

  // Lifecycle method: ComponentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  // Lifecycle method: ComponentWillUnmount
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Event handler: Increment the counter
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // Event handler: Decrement the counter
  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  // Event handler: Update the inputText state on input change
  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  // Event handler: Toggle the visibility state
  handleToggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  // Render method: Displays the component UI
  render() {
    console.log('Rendering component');

    // Destructure state variables for easier use
    const { counter, inputText, isVisible } = this.state;

    return (
      <div>
        <h1>React Class Component</h1>

        {/* Counter section */}
        <p>Counter: {counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <br />

        {/* Input section */}
        <input type="text" value={inputText} onChange={this.handleInputChange} />
        <p>Input Text: {inputText}</p>

        <br />

        {/* Visibility toggle section */}
        <button onClick={this.handleToggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Component
        </button>

        {/* Conditional rendering based on visibility */}
        {isVisible && <p>This component is visible!</p>}
      </div>
    );
  }
}

export default PopularFunctionsComponent;
