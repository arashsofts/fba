import React from "react";
import PropTypes from "prop-types";

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span>
      <img src={game.thumbnail} alt="" />
    </div>
    <div className="content">
      <a href="" className="header">
        {game.name}
      </a>
      <div className="meta">
        <i className="icon users" />
        &nbsp;{game.players} &nbsp;
        <i className="icon wait" />
        &nbsp;
        {game.duration}
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

export default GameCard;
