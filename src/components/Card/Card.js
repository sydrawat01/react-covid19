import React from 'react';
const color = {
  deaths: 'bg-secondary',
  infected: 'bg-danger',
  recovered: 'bg-success',
  total_cases: 'bg-info'
};

const title = {
  deaths: 'DEAD',
  infected: 'INFECTED',
  recovered: 'RECOVERED',
  total_cases: 'TOTAL'
};
const Card = props => {
  return (
    <div className="container">
      {Object.entries(props.data).map(([key, value]) => (
        <div className={['card', 'text-white', `${color[key]}`].join(' ')}>
          <div className="card-body">
            <h5 className="card-title">{[`${title[key]}`]}</h5>
          </div>
          <p className="card-text">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
