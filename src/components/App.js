import React from 'react';

import Layout from './Layout';
import Card from './Card';

import pathImg from '../assets/img/spain-flag.png';

const cardImgSrc = 'https://randomuser.me/api/portraits/med/women/52.jpg';
const cardData = {
  cardFirstLine: 'Alba Caballero',
  cardSecondLine: 'purpleelephant787',
  cardThirdLine: 'alba.caballero@example.com',
};

const App = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <Card
          id="28443430-601b-4608-a0ef-db12c062a3ce"
          imgSrc={cardImgSrc}
          data={cardData}
          onClick={(id) => {
            console.log(id);
          }}
          isActive
        />
        <Card
          id="spanish"
          imgSrc={pathImg}
          data="Spanish"
          onClick={(id) => {
            console.log(id);
          }}
          isHighlight
        />
      </div>
    </div>
  </Layout>
);

export default App;
