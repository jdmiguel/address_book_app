import React, { useState } from 'react';

import Layout from '../../layout';
import Card from '../../core/Card';
import Modal from '../../core/Modal';

import {
  userThumbSrc,
  userImgSrc,
  userCardData,
  userModalData,
  modalIcons,
} from '../../../utils/constants';

const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout withFinder>
      <Modal
        userImgSrc={userImgSrc}
        data={userModalData}
        icons={modalIcons}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className="container">
        <div className="row">
          <Card
            key={userCardData.cardFirstLine}
            id={userCardData.cardFirstLine}
            imgSrc={userThumbSrc}
            data={userCardData}
            onClick={(id) => {
              console.log(id);
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
