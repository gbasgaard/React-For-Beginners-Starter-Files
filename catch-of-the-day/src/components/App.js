import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update our state
    // this.state.fishes.fish1 = fish YOU CAN DO IT THIS WAY BUT NOT BEST PRACTICE, YOU SHOULD UPDATE YOUR CURRENT STATE INSTEAD
    const fishes = {...this.state.fishes};
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
          <Order />
          <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
