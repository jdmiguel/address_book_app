import React from 'react';
import { connect } from 'react-redux';

import Layout from './Layout';
import Card from './Card';

const App = ({ nationalities }) => (
  <Layout>
    <div className="container">
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

const mapStateToProps = ({ nationalities }) => ({ nationalities });

export default connect(mapStateToProps)(App);
