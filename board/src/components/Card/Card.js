import React from 'react';
import './Card.css'

export default function Card(props) {
  return (
    <div className="card-container">
      <a href="#" class="swap-card">&#8249;</a>
      <p>{props.content}</p>
      <a href="#" className="swap-card">&#8250;</a>
    </div>
  );
}