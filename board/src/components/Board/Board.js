import React, {Component} from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards : [
        ["Test Card 1", "Test Card 2", "Test Card 3"],
        ["Test Card 1", "Test Card 2", "Test Card 3"],
        ["Test Card 1", "Test Card 2", "Test Card 3"],
        ["Test Card 1", "Test Card 2", "Test Card 3"]
      ]
    };
  }

  swapCards = (destColIndex, colIndex, cardIndex) => {
    const cards = this.state.cards;
    const cardContent = cards[colIndex][cardIndex];
    cards[colIndex].splice(cardIndex, 1);
    cards[destColIndex].push(cardContent);
    this.setState({cards});
  }

  render() {
    return (
      <div className="board-container">
        <Column title="Column 1" index="0" cards={this.state.cards[0]} swap={this.swapCards} />
        <Column title="Column 2" index="1" cards={this.state.cards[1]} swap={this.swapCards} />
        <Column title="Column 3" index="2" cards={this.state.cards[2]} swap={this.swapCards} />
        <Column title="Column 4" index="3" cards={this.state.cards[3]} swap={this.swapCards} />
      </div>
    )
  }
}

export default Board;