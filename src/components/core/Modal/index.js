import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import { literals } from '../../../utils/constants';
import { iconModel } from '../../../utils/models';

const CustomModal = ({
  data: {
    imgSrc,
    firstText,
    secondText,
    thirdText,
    fourthText,
    fifthText,
    sixthText,
    seventhText,
    eighthText,
    ninethText,
    tenthText,
  },
  icons: { firstIcon, secondIcon, thirdIcon },
  isOpen,
  closeModal,
}) => (
  <Modal
    testId="custom-modal"
    overlayClassName="modal-overlay"
    className="modal"
    isOpen={isOpen}
    onRequestClose={closeModal}
  >
    <div className="modal-close">
      <button type="button" onClick={closeModal}>
        x
      </button>
    </div>
    <div className="modal-content">
      <div>
        <img
          width="90px"
          height="90px"
          className="shadow-img"
          src={imgSrc}
          alt={literals.userAltImg}
        />
        <div>
          <h3>{firstText}</h3>
          <p>{secondText}</p>
          <p>{thirdText}</p>
        </div>
      </div>
      <div>
        <p>
          <img src={firstIcon.src} alt={firstIcon.alt} />
          {`${fourthText}, ${fifthText}`}
        </p>
        <p>
          <img src={secondIcon.src} alt={secondIcon.alt} />
          {`${sixthText} (${seventhText}), ${eighthText}`}
        </p>
        <p>
          <img src={thirdIcon.src} alt={thirdIcon.alt} />
          {`${ninethText}, ${tenthText}`}
        </p>
      </div>
    </div>
  </Modal>
);

CustomModal.propTypes = {
  data: PropTypes.shape({
    imgSrc: PropTypes.string,
    firstText: PropTypes.string,
    secondText: PropTypes.string,
    thirdText: PropTypes.string,
    fourthText: PropTypes.string,
    fifthText: PropTypes.string,
    sixthText: PropTypes.string,
    seventhText: PropTypes.string,
    eighthText: PropTypes.string,
    ninethText: PropTypes.string,
    tenthText: PropTypes.string,
  }).isRequired,
  icons: PropTypes.shape({
    firstIcon: iconModel,
    secondIcon: iconModel,
    thirdIcon: iconModel,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.setAppElement(document.querySelector('body'));

export default CustomModal;
