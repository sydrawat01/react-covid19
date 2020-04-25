import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const color = {
  deaths: 'bg-secondary',
  active: 'bg-danger',
  recovered: 'bg-success',
  cases: 'bg-info',
};

const title = {
  deaths: 'DEAD',
  active: 'INFECTED',
  recovered: 'RECOVERED',
  cases: 'TOTAL',
};
const Card = (props) => {
  let res = props.data;
  let dataArr = [
    ['active', res.active],
    ['cases', res.cases],
    ['deaths', res.deaths],
    ['recovered', res.recovered],
  ];
  console.log(dataArr);

  return (
    <div className="container">
      {dataArr.map(([key, value]) => (
        <div className={['card', 'text-white', `${color[key]}`]}>
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
            href="https://github.com/sydrawat/react-covid19/issues"
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
