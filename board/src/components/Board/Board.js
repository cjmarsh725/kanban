import React, {Component} from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  state = {

  }

  render() {
    return (
      <div className="board-container">
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    )
  }
}

export default Board;