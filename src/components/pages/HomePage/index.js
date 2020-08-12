import React, { useState, useRef, useEffect, useCallback } from 'react';

import Layout from '../../layout';
import Card from '../../core/Card';
import Modal from '../../core/Modal';

import useScrollPosY from '../../hooks/useScrollPosY';

import {
  literals,
  defaultModalData,
  modalIcons,
  scrollFactor,
  maxPages,
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
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const usersContainer = useRef();
  const pageCounter = useRef(1);

  const handleGetUsers = useCallback(() => {
    setIsLoading(true);
    getUsers(pageCounter.current).then((users) => {
      const formattedUsers = users.results.map((user) => {
        const { picture, name, login, email, location, phone, cell } = user;

        return {
          imgSrc: picture.large,
          thumbSrc: picture.medium,
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
      setCurrentUsers(
        pageCounter.current === 1
          ? formattedUsers
          : [...currentUsers, ...formattedUsers],
      );
    });
  }, [currentUsers]);

  useScrollPosY(
    ({ posY }) => {
      const { current: counter } = pageCounter;
      const allowedPages = counter < maxPages;
      const scrollDownLimit =
        posY > usersContainer.current.clientHeight / scrollFactor &&
        allowedPages;

      if (scrollDownLimit && allowedPages && !isLoading) {
        handleGetUsers(pageCounter.current);
      }
    },
    [isLoading],
  );

  useEffect(() => {
    if (currentUsers.length > 0) {
      pageCounter.current += 1;
      setIsLoading(false);
    } else {
      handleGetUsers();
    }
  }, [currentUsers, handleGetUsers]);

  useEffect(() => {
    if (modalData) {
      setModalIsOpen(true);
    }
  }, [modalData]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUserCardClick = (id) => {
    const user = currentUsers.find((currentUser) => currentUser.id === id);
    const currentModalData = {
      imgSrc: user.imgSrc,
      firstText: user.name,
      secondText: user.username,
      thirdText: user.email,
      fourthText: user.streetName,
      fifthText: String(user.streetNumber),
      sixthText: user.city,
      seventhText: user.state,
      eighthText: String(user.postcode),
      ninethText: user.phone,
      tenthText: user.cell,
    };

    setModalData(currentModalData);
  };

  return (
    <Layout withFinder withSettings withWarning={showWarning}>
      <Modal
        data={modalData || defaultModalData}
        icons={modalIcons}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className="container">
        <Loader active={isLoading} />
        <div ref={usersContainer} className="row users-container">
          {currentUsers.length > 0 &&
            currentUsers.map((currentUser) => (
              <Card
                key={currentUser.id}
                id={currentUser.id}
                imgSrc={currentUser.thumbSrc}
                data={{
                  cardFirstLine: currentUser.name,
                  cardSecondLine: currentUser.username,
                  cardThirdLine: currentUser.email,
                }}
                onClick={(id) => handleUserCardClick(id)}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
