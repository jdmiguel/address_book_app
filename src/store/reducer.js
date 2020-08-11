import {
  spainFlag,
  franceFlag,
  switzerlandFlag,
  unitedKingdomFlag,
} from '../utils/constants';

const initialState = {
  users: [],
  nationalities: [
    {
      img: spainFlag,
      text: 'Spanish',
      active: false,
    },
    {
      img: franceFlag,
      text: 'French',
      active: false,
    },
    {
      img: switzerlandFlag,
      text: 'Swiss',
      active: false,
    },
    {
      img: unitedKingdomFlag,
      text: 'British',
      active: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
