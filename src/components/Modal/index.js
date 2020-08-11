import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

const CustomModal = ({
  userImgSrc,
  data: {
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
        <img className="shadow-img" src={userImgSrc} alt="detail img" />
        <div>
          <h3>{firstText}</h3>
          <p>{secondText}</p>
          <p>{thirdText}</p>
        </div>
      </div>
      <div>
        <p>
          <img src={firstIcon} alt="icon" />
          {`${fourthText}, ${fifthText}`}
        </p>
        <p>
          <img src={secondIcon} alt="icon" />
          {`${sixthText} (${seventhText}), ${eighthText}`}
        </p>
        <p>
          <img src={thirdIcon} alt="icon" />
          {`${ninethText}, ${tenthText}`}
        </p>
      </div>
    </div>
  </Modal>
);

CustomModal.propTypes = {
  userImgSrc: PropTypes.string.isRequired,
  data: PropTypes.shape({
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
    firstIcon: PropTypes.string,
    secondIcon: PropTypes.string,
    thirdIcon: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.setAppElement(document.querySelector('body'));

export default CustomModal;
