import React, {Component} from 'react';
import './Column.css';
import Card from '../Card/Card';

class Column extends Component {
  state = {

  }

  render() {
    return (
      <div className="column-container">
        <p>Column Title</p>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Column;