import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import Layout from '../../layout';
import Card from '../../core/Card';
import Modal from '../../core/Modal';

import {
  literals,
  defaultModalData,
  modalIcons,
  scrollFactor,
  maxPages,
} from '../../../utils/constants';

import useScrollPosY from '../../hooks/useScrollPosY';

import getUsers from '../../../services/api';

const Loader = ({ active }) => (
  <div className={`loader${active ? ' active' : ''}`}>
    <div />
    <div>{literals.loadingText}</div>
  </div>
);

const usersReducer = (users, action) => {
  switch (action.type) {
    case 'set':
      return action.users;
    case 'add':
      return [...users, ...action.users];
    default:
      return users;
  }
};

const HomePage = () => {
  const [users, usersDispatch] = useReducer(usersReducer, []);

  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSearch, setCurrentSearch] = useState('');

  const usersContainer = useRef();
  const pageCounter = useRef(1);

  const handleGetUsers = () => {
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

      usersDispatch({
        type: pageCounter.current === 1 ? 'set' : 'add',
        users: formattedUsers,
      });
    });
  };

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
    if (users.length > 0) {
      pageCounter.current += 1;
      setIsLoading(false);
    } else {
      handleGetUsers();
    }
  }, [users]);

  useEffect(() => {
    if (modalData) {
      setModalIsOpen(true);
    }
  }, [modalData]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUserCardClick = useCallback(
    (id) => {
      const user = users.find((user) => user.id === id);
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
    },
    [users],
  );

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
          {users.length > 0 &&
            users.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                imgSrc={user.thumbSrc}
                data={{
                  cardFirstLine: user.name,
                  cardSecondLine: user.username,
                  cardThirdLine: user.email,
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
