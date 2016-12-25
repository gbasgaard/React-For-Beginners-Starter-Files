import React from 'react';

class StorePicker extends React.Component {
  render() {
    // You can comment normally like this outside of JSX
    return (
      <form className="store-selector">
        {/* This is how you write a comment in React JS. Make sure to put them inside the actual element you're returning*/}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
