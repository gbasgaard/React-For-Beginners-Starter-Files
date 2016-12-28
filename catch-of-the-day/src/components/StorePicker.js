import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL.')
    // first grab the text from the box
    console.log(this.storeInput.value);
    // second transition from / to /stores/:storeId
  }
  render() {
    // You can comment normally like this outside of JSX
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is how you write a comment in React JS. Make sure to put them inside the actual element you're returning*/}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
