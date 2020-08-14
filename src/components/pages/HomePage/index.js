import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const { errorText, loadingText, endUsersText } = literals;

const ErrorMsg = () => <div className="error">{errorText}</div>;

const Loader = ({ active, translated }) => (
  <div
    className={`loader${active ? ' active' : ''}${
      translated ? ' translated' : ''
    }`}
  >
    <div />
    <div>{loadingText}</div>
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

const HomePage = ({ currentNationalityId }) => {
  const [users, usersDispatch] = useReducer(usersReducer, []);

  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [isEndLoad, setIsEndLoad] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [onError, setOnError] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const usersContainer = useRef();
  const pageCounter = useRef(1);

  const handleGetUsers = useCallback(() => {
    setIsLoading(true);
    getUsers(pageCounter.current, currentNationalityId)
      .then((users) => {
        const formattedUsers = users.results.map((user) => {
          const { picture, name, login, email, location, phone, cell } = user;

          return {
            imgSrc: picture.large,
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
      })
      .catch((error) => {
        console.log(`Request has failed because of ${error}`);
        setOnError(true);
      });
  }, [currentNationalityId]);

  useEffect(() => {
    if (!isFiltering) {
      if (users.length > 0) {
        pageCounter.current += 1;
        setIsLoading(false);
      } else {
        handleGetUsers();
      }
    }
    console.log('pageCounter.counter: ', pageCounter.current);
    if (pageCounter.current === maxPages) {
      console.log('end load');
      setIsEndLoad(true);
    }
  }, [users, isFiltering, handleGetUsers]);

  useEffect(() => {
    if (modalData) {
      setModalIsOpen(true);
    }
  }, [modalData]);

  useScrollPosY(
    ({ posY }) => {
      const { current: counter } = pageCounter;
      const allowedPages = counter <= maxPages;
      const scrollDownLimit =
        posY > usersContainer.current.clientHeight / scrollFactor &&
        allowedPages;

      setHasScroll(!!posY);

      if (scrollDownLimit && !isEndLoad && !isLoading && !isFiltering) {
        handleGetUsers(pageCounter.current);
      }
    },
    [isLoading, isFiltering],
  );

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

  const handleSearch = useCallback(
    (search) => {
      const filteredUsers = users.filter(
        (user) => user.name.toLowerCase() === search.toLowerCase(),
      );

      setIsFiltering(!!search);
      setIsMatched(filteredUsers.length > 0);
      setFilteredUsers(filteredUsers);
    },
    [users],
  );

  const currentUsers = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <Layout
      withFinder
      withSettings
      translateHeader={hasScroll}
      isSearching={isFiltering && !isMatched}
      isMatched={isFiltering && isMatched}
      withWarning={isFiltering && !isEndLoad}
      onChangeFinder={handleSearch}
    >
      <Modal
        data={modalData || defaultModalData}
        icons={modalIcons}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className="container">
        {onError ? (
          <ErrorMsg />
        ) : (
          <>
            <Loader active={isLoading} translated={hasScroll} />
            <div ref={usersContainer} className="row users-container">
              {currentUsers.length > 0 &&
                currentUsers.map((currentUsers) => (
                  <Card
                    key={currentUsers.id}
                    id={currentUsers.id}
                    imgSrc={currentUsers.imgSrc}
                    data={{
                      cardFirstLine: currentUsers.name,
                      cardSecondLine: currentUsers.username,
                      cardThirdLine: currentUsers.email,
                    }}
                    onClick={(id) => handleUserCardClick(id)}
                  />
                ))}
            </div>
            {isEndLoad && (
              <div ref={usersContainer} className="row end-users">
                {endUsersText}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ currentNationalityId }) => ({
  currentNationalityId,
});

HomePage.propTypes = {
  currentNationalityId: PropTypes.string,
};

export default connect(mapStateToProps)(HomePage);
