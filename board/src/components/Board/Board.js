import React, {Component} from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
      <div className="board-container">
        <Column title="Column 1" />
        <Column title="Column 2" />
        <Column title="Column 3" />
        <Column title="Column 4" />
      </div>
    )
  }
}

export default Board;