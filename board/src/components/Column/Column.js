import React, {Component} from 'react';
import './Column.css';
import Card from '../Card/Card';

class Column extends Component {
  state = {
    title: "Column " + (Number(this.props.index) + 1)
  }

  addCard = () => {
    const content = prompt("Please enter card's content:");
    const card = {
      id: this.props.maxId + 1,
      content: content,
      index: Number(this.props.index)
    }
    this.props.addCard(card);
  }

  changeTitle = () => {
    const title = prompt("Please enter a new title:");
    this.setState({title});
  }

  render() {
    return (
      <div className="column-container">
        <div className="column-title" onClick={this.changeTitle}>
          <p>{this.state.title}</p>
        </div>
        {this.props.cards.map(c => <Card key={c.id} card={c} index={this.props.index} swap={this.props.swap} />)}
        <div className="add-card-container">
          <a className="add-card" onClick={this.addCard}>Add Item</a>
        </div>
      </div>
    )
  }
}

export default Column;