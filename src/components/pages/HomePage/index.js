import React, { useState, useEffect } from 'react';

import Layout from '../../layout';
import Card from '../../core/Card';
import Modal from '../../core/Modal';

import {
  literals,
  userImgSrc,
  userModalData,
  modalIcons,
} from '../../../utils/constants';

import getUsers from '../../../services/api';

const Loader = ({ active }) => (
  <div className={`loader${active ? ' active' : ''}`}>
    <div />
    <div>{literals.loadingText}</div>
  </div>
);

const HomePage = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentUsers.length > 0) {
      setIsLoading(false);
    }
  }, [currentUsers]);

  useEffect(() => {
    getUsers().then((users) => {
      const {
        info: { page },
        results,
      } = users;
      const formattedUsers = results.map((user) => {
        const { picture, name, login, email, location, phone, cell } = user;

        return {
          img: picture.medium,
          name: `${name.first} ${name.last}`,
          id: login.uuid,
          username: login.username,
          email,
          streetName: location.street.name,
          streetNumber: location.street.number,
          city: location.city,
          state: location.state,
          postcode: location.postcode,
          phone,
          cell,
        };
      });
      setCurrentUsers(formattedUsers);
      setPage(page);
    });
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout withFinder withSettings withWarning={showWarning}>
      <Modal
        userImgSrc={userImgSrc}
        data={userModalData}
        icons={modalIcons}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className="container">
        <div className="row">
          <Loader active={isLoading} />
        </div>
        <div className="row">
          {currentUsers.length > 0 &&
            currentUsers.map((currentUser) => (
              <Card
                key={currentUser.id}
                id={currentUser.id}
                imgSrc={currentUser.img}
                data={{
                  cardFirstLine: currentUser.name,
                  cardSecondLine: currentUser.username,
                  cardThirdLine: currentUser.email,
                }}
                onClick={(id) => {
                  console.log(id);
                }}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
