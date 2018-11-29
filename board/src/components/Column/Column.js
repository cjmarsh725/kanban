import React, {Component} from 'react';
import './Column.css';
import Card from '../Card/Card';

class Column extends Component {
  state = {

  }

  render() {
    return (
      <div className="column-container">
        <div className="column-title">
          <p>{this.props.title}</p>
        </div>
        {this.props.cards.map(c => <Card content={c} index={this.props.index} swap={this.props.swap} />)}
      </div>
    )
  }
}

export default Column;