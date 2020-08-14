import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../layout';
import Card from '../../core/Card';
import Modal from '../../core/Modal';

import {
  literals,
  batchUsersByRequest,
  defaultModalData,
  modalIcons,
  scrollTrigger,
  scrollFactor,
  maxRequests,
} from '../../../utils/constants';

import useScrollPosY from '../../hooks/useScrollPosY';

import getUsers from '../../../services/api';

const { errorText, loadingText, endUsersText } = literals;

/**
 * Displays error message
 * @component ErrorMsg
 */

const ErrorMsg = () => <div className="error">{errorText}</div>;

/**
 * Displays a loader animation
 * @param {boolean} active - set loader as active or not what implicates different styles
 * @param {boolean} translated - set loader as translated or not what implicates different styles
 */

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

/**
 * Displays the home page of the application by handling the load of users
 * and filtering visible users through the Finder component
 * @component HomePage
 * @param {string} currentNationalityId - filter the users request by nationality
 */

const HomePage = ({ currentNationalityId }) => {
  const [renderedUsers, setRenderedUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [isEndLoad, setIsEndLoad] = useState(false);

  const [onError, setOnError] = useState(false);
  const [onTranslateHeader, setOnTranslateHeader] = useState(false);

  const usersContainer = useRef();
  const renderStep = useRef(1);
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

        const currentRenderedUsers = formattedUsers.slice(
          0,
          batchUsersByRequest / 2,
        );
        const currentLoadedUsers = formattedUsers.slice(
          batchUsersByRequest / 2,
          formattedUsers.length + 1,
        );

        setLoadedUsers(currentLoadedUsers);
        setRenderedUsers(
          pageCounter.current === 1
            ? currentRenderedUsers
            : [...renderedUsers, ...currentRenderedUsers],
        );
      })
      .catch((error) => {
        console.log(`Request has failed because of ${error}`);
        setOnError(true);
      });
  }, [renderedUsers, currentNationalityId]);

  const handleLoadedUsers = useCallback(() => {
    setRenderedUsers([...renderedUsers, ...loadedUsers]);
  }, [renderedUsers, loadedUsers]);

  useEffect(() => {
    if (!isFiltering) {
      if (renderedUsers.length > 0) {
        if (isLoading) {
          pageCounter.current += 1;
          setIsLoading(false);
        }
        renderStep.current += 1;
      } else {
        handleGetUsers();
      }
    }

    if (pageCounter.current === maxRequests && !isEndLoad) {
      handleLoadedUsers();
      setIsEndLoad(true);
    }
  }, [renderedUsers]);

  useEffect(() => {
    if (modalData) {
      setModalIsOpen(true);
    }
  }, [modalData]);

  useScrollPosY(
    ({ posY }) => {
      const { current: counter } = pageCounter;
      const { current: step } = renderStep;

      const isLoadAllowed = counter <= maxRequests;
      const scrollDownLimit =
        posY > usersContainer.current.clientHeight / scrollFactor;
      setOnTranslateHeader(posY > scrollTrigger);

      if (
        isLoadAllowed &&
        scrollDownLimit &&
        !isEndLoad &&
        !isLoading &&
        !isFiltering
      ) {
        if (step % 2 === 0) {
          handleLoadedUsers();
        } else {
          handleGetUsers(counter);
        }
      }
    },
    [isLoading, isFiltering, isEndLoad],
    100,
  );

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUserCardClick = useCallback(
    (id) => {
      const user = renderedUsers.find((user) => user.id === id);
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
    [renderedUsers],
  );

  const handleSearch = useCallback(
    (search) => {
      const filteredUsers = renderedUsers.filter(
        (user) => user.name.toLowerCase() === search.toLowerCase(),
      );

      setIsFiltering(!!search);
      setIsMatched(filteredUsers.length > 0);
      setFilteredUsers(filteredUsers);
    },
    [renderedUsers],
  );

  const currentUsers = filteredUsers.length > 0 ? filteredUsers : renderedUsers;

  return (
    <Layout
      withFinder
      withSettings
      translateHeader={onTranslateHeader}
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
            <Loader active={isLoading} translated={onTranslateHeader} />
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
            {isEndLoad && !isMatched && (
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
