import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const color = {
  deaths: 'bg-secondary',
  active: 'bg-danger',
  recoveries: 'bg-success',
  total: 'bg-info'
};

const title = {
  deaths: 'DEAD',
  active: 'INFECTED',
  recoveries: 'RECOVERED',
  total: 'TOTAL'
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
      <div className="container">
        <div className="github">
          <a
            id="pr"
            href="https://github.com/sydrawat/react-covid19/pulls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>
              <span>Found something wrong? Open a PR </span>
              <FontAwesomeIcon icon="code-branch" />
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
