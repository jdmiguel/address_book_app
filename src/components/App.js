import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from './layout';
import Card from './core/Card';
import Modal from './core/Modal';

import {
  userThumbSrc,
  userImgSrc,
  userCardData,
  userModalData,
  modalIcons,
} from '../utils/constants';

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
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
          {/* nationalities.map((nationality) => (
            <Card
              key={nationality.text}
              id={nationality.text}
              imgSrc={nationality.img}
              data={nationality.text}
              onClick={(id) => {
                console.log(id);
              }}
              isHighlight
              isActive={nationality.active}
            />
            )) */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ nationalities }) => ({ nationalities });

export default connect(mapStateToProps)(App);
