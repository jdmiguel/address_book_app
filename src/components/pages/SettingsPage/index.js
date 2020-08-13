import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../layout';
import PageTitle from '../../core/PageTitle';
import Card from '../../core/Card';

import { literals } from '../../../utils/constants';

import {
  activeNationality,
  deactiveAllNationalities,
} from '../../../store/actions';

const SettingsPage = ({
  nationalities,
  currentNationalityId,
  handleActiveNationality,
  handleDeactiveAllNationalities,
}) => {
  const [currentId, setCurrentId] = useState(currentNationalityId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNationalityCardClick = useCallback(
    (id) => {
      if (currentId && id === currentId) {
        handleDeactiveAllNationalities();
        setCurrentId('');
      } else {
        handleActiveNationality(id);
        setCurrentId(id);
      }
    },
    [currentId, handleActiveNationality, handleDeactiveAllNationalities],
  );

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <PageTitle text={literals.settingsPageTitle} />
        </div>
        <div className="row">
          {nationalities.map((nationality) => (
            <Card
              key={nationality.id}
              id={nationality.id}
              imgSrc={nationality.img}
              data={nationality.text}
              onClick={(id) => handleNationalityCardClick(id)}
              isHighlight
              isActive={nationality.active}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

SettingsPage.propTypes = {
  nationalities: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      text: PropTypes.string,
      active: PropTypes.boolean,
    }),
  ),
};

const mapStateToProps = ({ nationalities, currentNationalityId }) => ({
  nationalities,
  currentNationalityId,
});

const mapDispatchToProps = (dispatch) => ({
  handleActiveNationality: (id) => dispatch(activeNationality(id)),
  handleDeactiveAllNationalities: () => dispatch(deactiveAllNationalities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
