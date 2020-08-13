import React from 'react';
import PropTypes from 'prop-types';

import { literals } from '../../../utils/constants';

const Card = ({ id, imgSrc, data, isHighlight, isActive, onClick }) => (
  <div className={`col-12 col-md-6 col-xl-${isHighlight ? '3' : '4'}`}>
    <div className={`card${isActive ? ' active' : ''}`}>
      <button type="button" onClick={() => onClick(id)}>
        <div className="card-image">
          <img className="shadow-img" src={imgSrc} alt={literals.userAltImg} />
        </div>
        <div className="card-text">
          {isHighlight ? (
            <h3>{data}</h3>
          ) : (
            <>
              <h4>{data.cardFirstLine}</h4>
              <p>{data.cardSecondLine}</p>
              <p>{data.cardThirdLine}</p>
            </>
          )}
        </div>
        <div />
      </button>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      cardFirstLine: PropTypes.string,
      cardSecondLine: PropTypes.string,
      cardThirdLine: PropTypes.string,
    }),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  isHighlight: PropTypes.bool,
  isActive: PropTypes.bool,
};

Card.defaultProps = {
  isHighlight: false,
  isActive: false,
};

export default Card;
