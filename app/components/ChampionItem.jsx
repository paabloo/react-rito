import React, { PropTypes } from 'react';

const ChampionItem = (props) => {
  return (
    <div>
      Name: {props.name} <br />
      Title: {props.title}
      <hr />
    </div>
  )
};

ChampionItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};

export default ChampionItem;
