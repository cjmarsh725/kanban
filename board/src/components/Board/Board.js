import React, {Component} from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards : [
        {
          id: 1,
          content : "Test Card 1",
          index: 0
        },
        {
          id: 2,
          content : "Test Card 2",
          index: 0
        },
        {
          id: 3,
          content : "Test Card 3",
          index: 0
        },
        {
          id: 4,
          content : "Test Card 1",
          index: 1
        },
        {
          id: 5,
          content : "Test Card 2",
          index: 1
        },
        {
          id: 6,
          content : "Test Card 3",
          index: 1
        },
      ]
    };
  }

  swapCards = (cardId, colIndex) => {
    const cards = this.state.cards;
    cards.forEach(c => {
      if (c.id === cardId) c.index = colIndex;
    });
    this.setState({cards});
  }

  addCard = card => {
    const cards = this.state.cards;
    cards.push(card);
    console.log(cards);
    this.setState({cards});
  }

  render() {
    const maxId = Math.max.apply(Math, this.state.cards.map(function(o) { return o.id; }));
    return (
      <div className="board-container">
        <Column title="Column 1" index="0" maxId={maxId} addCard={this.addCard} cards={this.state.cards.filter(c => c.index === 0)} swap={this.swapCards} />
        <Column title="Column 2" index="1" maxId={maxId} addCard={this.addCard} cards={this.state.cards.filter(c => c.index === 1)} swap={this.swapCards} />
        <Column title="Column 3" index="2" maxId={maxId} addCard={this.addCard} cards={this.state.cards.filter(c => c.index === 2)} swap={this.swapCards} />
        <Column title="Column 4" index="3" maxId={maxId} addCard={this.addCard} cards={this.state.cards.filter(c => c.index === 3)} swap={this.swapCards} />
      </div>
    )
  }
}

export default Board;