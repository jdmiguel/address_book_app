import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../layout';
import PageTitle from '../../core/PageTitle';
import Card from '../../core/Card';

import { literals } from '../../../utils/constants';

const SettingsPage = ({ nationalities }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <PageTitle text={literals.settingsPageTitle} />
        </div>
        <div className="row">
          {nationalities.map((nationality) => (
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

const mapStateToProps = ({ nationalities }) => ({ nationalities });

export default connect(mapStateToProps)(SettingsPage);
