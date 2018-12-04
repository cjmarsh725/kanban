import React from 'react';
import './Card.css'

const getNextIndex = index => {
  if (index === 3) return 0;
  else return index + 1;
}

const getPrevIndex = index => {
  if (index === 0) return 3;
  else return index - 1;
}

export default function Card(props) {
  return (
    <div className="card-container">
      <a href="#" className="swap-card" onClick={() => props.swap(props.card.id, getPrevIndex(Number(props.index)))}>&#8249;</a>
      <p>{props.card.content}</p>
      <a href="#" className="swap-card" onClick={() => props.swap(props.card.id, getNextIndex(Number(props.index)))}>&#8250;</a>
    </div>
  );
}